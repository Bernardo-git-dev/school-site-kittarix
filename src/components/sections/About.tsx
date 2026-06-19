import { Container } from '../ui/Container';
import { Section, SectionHeader } from '../ui/Section';
import { useSchoolInfo } from '../../hooks/useData';
import {
  GraduationCap,
  Heart,
  Lightbulb,
  Users,
  Globe,
  BookOpen,
} from 'lucide-react';

const valueIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Excellence: GraduationCap,
  Integrity: Heart,
  Innovation: Lightbulb,
  Diversity: Users,
  Community: Globe,
  Learning: BookOpen,
};

export function AboutSection() {
  const { data: school } = useSchoolInfo();
  const values = (school?.values as string[]) || [];

  return (
    <Section id="about" background="white" padding="xl">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Campus Life"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {school?.founded_year || 1985}
                  </div>
                  <div className="text-sm text-gray-500">Year Founded</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Four decades of educational excellence and innovation
              </p>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-6">
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Discover Our Story
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {school?.history ||
                'Founded in 1985, Horizon Academy began as a small school with just 50 students and a vision to transform education. Over four decades, we have grown into a leading institution serving over 2,000 students while maintaining our commitment to personalized learning and academic excellence.'}
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-5 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2 font-heading">
                  Our Mission
                </h3>
                <p className="text-sm text-gray-600">
                  {school?.mission ||
                    'To provide an inclusive, innovative, and inspiring learning environment that empowers students to become responsible global citizens.'}
                </p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2 font-heading">
                  Our Vision
                </h3>
                <p className="text-sm text-gray-600">
                  {school?.vision ||
                    'To be recognized as a beacon of educational excellence where every student is nurtured to reach their full potential.'}
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 font-heading">
                Our Core Values
              </h3>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => {
                  const IconComponent =
                    valueIcons[value.split(' ')[0]] || BookOpen;
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      <IconComponent className="w-4 h-4" />
                      {value}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
