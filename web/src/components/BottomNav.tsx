import { NavLink } from 'react-router-dom';
import { useI18n } from '../i18n';

export function BottomNav() {
  const { t } = useI18n();

  const items = [
    { to: '/', label: t('home') },
    { to: '/requests', label: t('requests') },
    { to: '/messages', label: t('messages') },
    { to: '/profile', label: t('profile') }
  ];

  return (
    <nav className="bottom-nav" aria-label="Primary">
      <div className="bottom-nav-inner">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
