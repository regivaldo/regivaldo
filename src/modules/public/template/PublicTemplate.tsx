import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PublicTemplate = () => {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
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
