import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appConfig } from './config';
import { BottomNav } from './components/BottomNav';
import { TopBar } from './components/TopBar';
import Home from './pages/Home';
import Requests from './pages/Requests';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import MechanicProfile from './pages/MechanicProfile';
import Invoice from './pages/Invoice';

export default function App() {
  useEffect(() => {
    document.title = appConfig.appName;
  }, []);

  return (
    <div className="app-shell">
      <TopBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mechanic/:id" element={<MechanicProfile />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/requests/:id/invoice" element={<Invoice />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}
