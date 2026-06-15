import { cn } from './ui';

interface BrandMarkProps {
  className?: string;
  imageClassName?: string;
}

const BrandMark = ({ className, imageClassName }: BrandMarkProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-lg border border-primary-400/30 bg-primary-500/10 shadow-[0_0_28px_rgba(59,130,246,0.14)]',
        className,
      )}
      aria-hidden="true"
    >
      <img
        src="/favicon.svg"
        alt=""
        className={cn('h-full w-full rounded-lg object-contain', imageClassName)}
        draggable={false}
      />
    </span>
  );
};

export default BrandMark;
