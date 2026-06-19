import { Users, Calendar, Award, TrendingUp, Star, Globe } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { useStatistics } from '../../hooks/useData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  calendar: Calendar,
  award: Award,
  'trending-up': TrendingUp,
  star: Star,
  globe: Globe,
};

export function StatsSection() {
  const { data: statistics } = useStatistics();

  return (
    <Section background="gradient" padding="lg">
      <Container>
        <SectionHeader
          title="By the Numbers"
          subtitle="A track record of excellence spanning decades"
          centered
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {(statistics || []).map((stat, index) => {
            const IconComponent = iconMap[stat.icon || ''] || Users;
            return (
              <div
                key={stat.id}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 mb-4">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
