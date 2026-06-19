import { Star, ChevronRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';
import { useClubs } from '../../hooks/useData';

const categoryColors: Record<string, string> = {
  STEM: 'bg-blue-500',
  Academic: 'bg-green-500',
  Arts: 'bg-purple-500',
  Service: 'bg-amber-500',
  Leadership: 'bg-red-500',
  Publications: 'bg-pink-500',
};

export function StudentLifeSection() {
  const { data: clubs } = useClubs();

  const featuredClubs = (clubs || []).slice(0, 8);

  return (
    <Section id="student-life" background="gray" padding="xl">
      <Container>
        <SectionHeader
          title="Student Life"
          subtitle="Beyond academics - discover clubs, activities, and opportunities to grow"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-5 group"
            >
              <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                <img
                  src={club.image_url || 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={club.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={cn('absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium text-white', categoryColors[club.category] || 'bg-gray-500')}>
                  {club.category}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                {club.name}
              </h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {club.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {((club.features as string[]) || []).slice(0, 2).map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-xs text-gray-500"
                  >
                    <Star className="w-3 h-3" />
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {club.advisor}
                </span>
                <a href={`#club-${club.id}`} className="text-primary-600 hover:underline text-sm flex items-center gap-1">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Over 50 Ways to Get Involved
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            From robotics and debate to theater and community service, Horizon Academy offers
            countless opportunities for students to explore their interests and develop leadership skills.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-white/70">Clubs & Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">20+</div>
              <div className="text-white/70">Sports Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-white/70">Arts Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">5000+</div>
              <div className="text-white/70">Service Hours Annually</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
