import { ArrowRight, BookOpen, GraduationCap, FlaskConical, Palette, Globe, Award } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '../ui/Card';
import { usePrograms } from '../../hooks/useData';

const levelIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Preschool: GraduationCap,
  Elementary: BookOpen,
  'Middle School': BookOpen,
  'High School:': GraduationCap,
  'Specialty Program': Award,
};

export function ProgramsSection() {
  const { data: programs } = usePrograms();

  const featuredPrograms = (programs || []).slice(0, 4);

  return (
    <Section id="programs" background="gray" padding="xl">
      <Container>
        <SectionHeader
          title="Academic Programs"
          subtitle="Rigorous academics designed to challenge, inspire, and prepare students for success in college and beyond"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredPrograms.map((program, index) => {
            const IconComponent = levelIcons[program.level] || BookOpen;
            return (
              <Card
                key={program.id}
                hover
                className="group"
              >
                <CardImage
                  src={program.image_url || 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={program.name}
                  aspectRatio="video"
                />
                <CardContent>
                  <div className="flex items-center gap-2 text-primary-600 text-sm font-medium mb-2">
                    <IconComponent className="w-4 h-4" />
                    {program.level}
                  </div>
                  <CardTitle className="group-hover:text-primary-600 transition-colors">
                    {program.name}
                  </CardTitle>
                  <CardDescription>
                    {program.description?.slice(0, 80)}...
                  </CardDescription>
                  <a
                    href={`#program-${program.id}`}
                    className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm mt-4 hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#all-programs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
