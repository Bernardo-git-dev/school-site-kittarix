import { Mail, Award, BookOpen } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { useStaff } from '../../hooks/useData';

const departmentLabels: Record<string, string> = {
  Administration: 'bg-primary-100 text-primary-800',
  Science: 'bg-green-100 text-green-800',
  Mathematics: 'bg-blue-100 text-blue-800',
  'English/Language Arts': 'bg-amber-100 text-amber-800',
  'Visual Arts': 'bg-pink-100 text-pink-800',
  'Performing Arts': 'bg-purple-100 text-purple-800',
  Athletics: 'bg-orange-100 text-orange-800',
  'Student Services': 'bg-teal-100 text-teal-800',
};

export function StaffSection() {
  const { data: staff } = useStaff();

  const leadershipTeam = (staff || []).filter(
    (s) => s.department === 'Administration'
  ).slice(0, 3);
  const facultySpotlight = (staff || []).filter(
    (s) => s.department !== 'Administration'
  ).slice(0, 6);

  return (
    <Section id="faculty" background="white" padding="xl">
      <Container>
        <SectionHeader
          title="Our Faculty & Staff"
          subtitle="Dedicated educators and mentors who inspire excellence every day"
          centered
        />

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8 text-center">
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all"
              >
                <img
                  src={member.image_url || 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-5 ring-4 ring-white shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {member.bio}
                </p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Spotlight */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8 text-center">
            Faculty Spotlight
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultySpotlight.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={member.image_url || 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'}
                    alt={member.name}
                    className="w-20 h-20 rounded-xl object-cover ring-2 ring-gray-100"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                    <span
                      className={`inline-block text-xs px-2 py-1 rounded-full ${
                        departmentLabels[member.department || ''] ||
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {member.department}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 line-clamp-2">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {((member.subjects as string[]) || []).slice(0, 2).map((subject, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 flex items-center gap-1"
                    >
                      <BookOpen className="w-3 h-3" />
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <a
            href="#all-staff"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-all"
          >
            View All Faculty & Staff
          </a>
        </div>
      </Container>
    </Section>
  );
}
