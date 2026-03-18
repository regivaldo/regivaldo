import { Outlet } from 'react-router';
import AdminTaskbar from '../components/AdminTaskbar';
import BackgroundEffects from '../../public/components/os/BackgroundEffects';

const AdminTemplate = () => {
  return (
    <div className="min-h-screen bg-dark text-white relative">
      <BackgroundEffects />

      {/* Content area */}
      <main className="relative z-10 min-h-screen pb-14 p-4 lg:p-6">
        <Outlet />
      </main>

      {/* OS Taskbar */}
      <AdminTaskbar />
    </div>
  );
};

export default AdminTemplate;
