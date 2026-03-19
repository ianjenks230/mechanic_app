import { useEffect, useState } from 'react';
import { seedMechanics } from '../data/seed';
import { Mechanic } from '../types';
import { storage } from '../utils/storage';

const CACHE_KEY = 'mm_mechanics_cache_v1';

export function useMechanics() {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      try {
        const response = await fetch('/mock/mechanics.json', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to load mechanics');
        }
        const data = (await response.json()) as Mechanic[];
        if (!active) {
          return;
        }
        setMechanics(data);
        storage.write(CACHE_KEY, data);
        setOffline(false);
      } catch (error) {
        const cached = storage.read<Mechanic[]>(CACHE_KEY, []);
        if (cached.length > 0) {
          setMechanics(cached);
        } else {
          setMechanics(seedMechanics);
        }
        setOffline(true);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return { mechanics, loading, offline };
}
