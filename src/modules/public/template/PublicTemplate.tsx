import { Outlet } from 'react-router';
import { WindowManagerContext, useWindowManagerProvider } from '../hooks/useWindowManager';
import BackgroundEffects from '../components/os/BackgroundEffects';
import Taskbar from '../components/os/Taskbar';
import BootScreen from '../components/os/BootScreen';

const PublicTemplate = () => {
  const value = useWindowManagerProvider();

  return (
    <WindowManagerContext.Provider value={value}>
      <div className="relative min-h-screen overflow-hidden pb-12">
        <BootScreen />
        <BackgroundEffects />
        <main className="relative z-10">
          <Outlet />
        </main>
        <Taskbar />
      </div>
    </WindowManagerContext.Provider>
  );
};

export default PublicTemplate;
