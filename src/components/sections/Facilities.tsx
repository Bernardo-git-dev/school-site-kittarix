import { useState } from 'react';
import { ArrowRight, Building, FlaskConical, Palette, Dumbbell, Library, Users, Coffee, Heart } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';
import { useFacilities } from '../../hooks/useData';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  administration: Building,
  academics: FlaskConical,
  library: Library,
  arts: Palette,
  athletics: Dumbbell,
  'campus-life': Coffee,
  'student-services': Heart,
};

const categories = [
  { id: 'all', label: 'All Facilities' },
  { id: 'academics', label: 'Academics' },
  { id: 'arts', label: 'Arts' },
  { id: 'athletics', label: 'Athletics' },
  { id: 'library', label: 'Library' },
  { id: 'campus-life', label: 'Campus Life' },
];

export function FacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { data: facilities } = useFacilities();

  const filteredFacilities =
    activeCategory === 'all'
      ? facilities || []
      : (facilities || []).filter((f) => f.category === activeCategory);

  return (
    <Section id="tour" background="white" padding="xl">
      <Container>
        <SectionHeader
          title="Virtual Campus Tour"
          subtitle="Explore our world-class facilities from anywhere in the world. Click on each building to discover more."
          centered
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2.5 rounded-full font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.slice(0, 6).map((facility) => {
            const IconComponent = categoryIcons[facility.category] || Building;
            const images = (facility.images as string[]) || [];

            return (
              <div
                key={facility.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={images[0] || 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800'}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {facility.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {((facility.features as string[]) || []).slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`#facility-${facility.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm hover:gap-3 transition-all"
                  >
                    Explore Facility
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Experience Our Campus Virtually
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Take an immersive virtual tour of our 45-acre campus. Explore every building,
            classroom, and facility from the comfort of your home.
          </p>
          <a
            href="#full-tour"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
          >
            Start Virtual Tour
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
