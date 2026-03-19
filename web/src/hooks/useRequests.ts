import { useEffect, useState } from 'react';
import { Request, REQUEST_STATUSES } from '../types';
import { storage } from '../utils/storage';

const REQUESTS_KEY = 'mm_requests_v1';

export function useRequests() {
  const [requests, setRequests] = useState<Request[]>(() => {
    return storage.read<Request[]>(REQUESTS_KEY, []);
  });

  useEffect(() => {
    storage.write(REQUESTS_KEY, requests);
  }, [requests]);

  const addRequest = (request: Request) => {
    setRequests((prev) => [request, ...prev]);
  };

  const updateRequest = (id: string, updater: (request: Request) => Request) => {
    setRequests((prev) => prev.map((request) => (request.id === id ? updater(request) : request)));
  };

  const advanceStatus = (id: string) => {
    updateRequest(id, (request) => {
      const currentIndex = REQUEST_STATUSES.indexOf(request.status);
      if (currentIndex < 0 || currentIndex >= REQUEST_STATUSES.length - 1) {
        return request;
      }
      return {
        ...request,
        status: REQUEST_STATUSES[currentIndex + 1]
      };
    });
  };

  return { requests, addRequest, updateRequest, advanceStatus };
}
