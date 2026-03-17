interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
      {subtitle && (
        <p className="mt-4 text-lg text-slate-400">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
