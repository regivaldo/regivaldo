import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PublicTemplate = () => {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background with animated orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-35"
          style={{
            top: '-10%',
            left: '-15%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 65%)',
            animation: 'orb-drift 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            bottom: '-5%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.16) 0%, transparent 65%)',
            animation: 'orb-drift 25s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            top: '40%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%)',
            animation: 'orb-drift 18s ease-in-out 3s infinite',
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicTemplate;
