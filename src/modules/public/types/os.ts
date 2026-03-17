export interface DesktopApp {
  id: string;
  name: string;
  icon: string;
  color: string;
  route?: string;
}

export interface WindowState {
  appId: string;
  isMinimized: boolean;
}

export const desktopApps: DesktopApp[] = [
  { id: 'produtos', name: 'Produtos', icon: '📦', color: '#3b82f6', route: '/produtos' },
  { id: 'portfolio', name: 'Portfólio', icon: '🎨', color: '#f97316', route: '/portfolio' },
  { id: 'servicos', name: 'Serviços', icon: '⚙️', color: '#06b6d4', route: '/servicos' },
  { id: 'contato', name: 'Contato', icon: '✉️', color: '#10b981', route: '/contato' },
  { id: 'sobre', name: 'Sobre', icon: '👤', color: '#a855f7' },
];
