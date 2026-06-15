import type { ComponentType } from 'react';
import {
  BotIcon,
  BrainIcon,
  CheckIcon,
  CoffeeIcon,
  CpuIcon,
  DatabaseIcon,
  EarthIcon,
  FigmaIcon,
  FlameIcon,
  FolderCodeIcon,
  GithubIcon,
  LinkedinIcon,
  MailCheckIcon,
  MessageCircleIcon,
  MonitorCheckIcon,
  PenToolIcon,
  PlayIcon,
  PlugZapIcon,
  RocketIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SmartphoneChargingIcon,
  SparklesIcon,
  UsersIcon,
  WorkflowIcon,
  WrenchIcon,
} from 'lucide-animated';

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const serviceIconMap: Record<string, IconComponent> = {
  web: MonitorCheckIcon,
  mobile: SmartphoneChargingIcon,
  sistemas: WorkflowIcon,
  consultoria: SparklesIcon,
};

const productIconMap: Record<string, IconComponent> = {
  'escoteiros-app': UsersIcon,
  'quiz-escoteiro': BrainIcon,
  'o-stop-e': PlayIcon,
};

const skillIconMap: Record<string, IconComponent> = {
  'IA Agents': BotIcon,
  TypeScript: CpuIcon,
  CSS: PenToolIcon,
  Java: CoffeeIcon,
  Python: WrenchIcon,
  MySQL: DatabaseIcon,
  Firebase: FlameIcon,
  MongoDB: DatabaseIcon,
};

const socialIconMap: Record<string, IconComponent> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  whatsapp: MessageCircleIcon,
  email: MailCheckIcon,
};

const portfolioIconMap: Record<string, IconComponent> = {
  'cesar-figueiredo': FigmaIcon,
  'ge-marechal-rondon': ShieldCheckIcon,
  'eu-eu-mesmo-e-isso': PlugZapIcon,
};

export function ServiceIcon({ id, size = 22, className = '' }: { id: string; size?: number; className?: string }) {
  const Icon = serviceIconMap[id] ?? SettingsIcon;
  return <Icon size={size} className={className} />;
}

export function ProductIcon({ id, size = 22, className = '' }: { id: string; size?: number; className?: string }) {
  const Icon = productIconMap[id] ?? RocketIcon;
  return <Icon size={size} className={className} />;
}

export function SkillIcon({ name, size = 15, className = '' }: { name: string; size?: number; className?: string }) {
  const Icon = skillIconMap[name] ?? CheckIcon;
  return <Icon size={size} className={className} />;
}

export function SocialIcon({ icon, size = 20, className = '' }: { icon: string; size?: number; className?: string }) {
  const Icon = socialIconMap[icon] ?? EarthIcon;
  return <Icon size={size} className={className} />;
}

export function PortfolioIcon({ id, size = 22, className = '' }: { id: string; size?: number; className?: string }) {
  const Icon = portfolioIconMap[id] ?? FolderCodeIcon;
  return <Icon size={size} className={className} />;
}

export { CheckIcon, EarthIcon, FolderCodeIcon, RocketIcon };
