import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({
  children,
  className,
  background = 'white',
  padding = 'lg',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-600 text-white',
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white',
    dark: 'bg-gray-900 text-white',
  };

  const paddings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20 lg:py-24',
    xl: 'py-20 md:py-28 lg:py-32',
  };

  return (
    <section className={cn(backgrounds[background], paddings[padding], className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-10 md:mb-14', centered && 'text-center', className)}>
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg md:text-xl max-w-3xl',
            centered && 'mx-auto',
            light ? 'text-gray-200' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
