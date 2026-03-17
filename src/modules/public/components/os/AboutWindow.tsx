import { AnimatePresence } from 'motion/react';
import { desktopApps } from '../../types/os';
import { useWindowManager } from '../../hooks/useWindowManager';
import Window from './Window';

export default function AboutWindow() {
  const { aboutOpen, closeWindow } = useWindowManager();
  const app = desktopApps.find((a) => a.id === 'sobre')!;

  return (
    <AnimatePresence>
      {aboutOpen && (
        <Window app={app} onClose={() => closeWindow('sobre')}>
          <div className="p-6 sm:p-10 max-w-2xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-6xl block mb-4">👤</span>
              <h2 className="text-2xl font-bold gradient-text mb-2">Regivaldo</h2>
              <p className="text-slate-400 text-sm">Desenvolvedor Full Stack</p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Desenvolvedor apaixonado por transformar ideias em soluções digitais.
                Especializado em aplicações web e mobile modernas, com foco em performance,
                usabilidade e código limpo.
              </p>
              <p>
                Trabalho com tecnologias como React, Node.js, TypeScript, React Native e
                diversas ferramentas do ecossistema moderno de desenvolvimento.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary-400">4+</p>
                <p className="text-xs text-slate-400 mt-1">Projetos entregues</p>
              </div>
              <div className="glass rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent-400">4</p>
                <p className="text-xs text-slate-400 mt-1">Áreas de atuação</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="mailto:regivaldo@email.com"
                className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                Email
              </a>
            </div>

            <p className="text-center text-xs text-slate-500 pt-4">
              &copy; {new Date().getFullYear()} Regivaldo. Todos os direitos reservados.
            </p>
          </div>
        </Window>
      )}
    </AnimatePresence>
  );
}
