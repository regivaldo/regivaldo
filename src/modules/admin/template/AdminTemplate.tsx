import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

const AdminTemplate = () => {
  return (
    <div className="min-h-screen bg-dark text-white relative">
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

      <Sidebar />

      <main className="relative z-10 min-h-screen p-4 pt-16 lg:pt-6 lg:p-6 lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminTemplate;
