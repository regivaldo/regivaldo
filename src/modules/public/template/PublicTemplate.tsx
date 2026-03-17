import { useState } from 'react';
import { Outlet } from 'react-router';
import { WindowManagerContext, useWindowManagerProvider } from '../hooks/useWindowManager';
import BackgroundEffects from '../components/os/BackgroundEffects';
import Taskbar from '../components/os/Taskbar';
import BootScreen from '../components/os/BootScreen';
import AboutWindow from '../components/os/AboutWindow';

const PublicTemplate = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const value = useWindowManagerProvider(aboutOpen, setAboutOpen);

  return (
    <WindowManagerContext.Provider value={value}>
      <div className="relative min-h-screen overflow-hidden pb-12">
        <BootScreen />
        <BackgroundEffects />
        <main className="relative z-10">
          <Outlet />
        </main>
        <AboutWindow />
        <Taskbar />
      </div>
    </WindowManagerContext.Provider>
  );
};

export default PublicTemplate;
