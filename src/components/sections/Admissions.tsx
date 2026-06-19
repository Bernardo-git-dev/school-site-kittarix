import { Calendar, FileText, Users, CheckCircle, ArrowRight, ClipboardCheck } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';

const steps = [
  {
    step: 1,
    title: 'Submit Inquiry',
    description: 'Complete our online inquiry form to express your interest and receive information about our programs.',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Schedule Visit',
    description: 'Book a virtual or in-person campus tour to experience Horizon Academy firsthand.',
    icon: Calendar,
  },
  {
    step: 3,
    title: 'Complete Application',
    description: 'Submit your application along with required documents including transcripts and recommendations.',
    icon: ClipboardCheck,
  },
  {
    step: 4,
    title: 'Interview & Assessment',
    description: 'Participate in an interview and complete age-appropriate assessments.',
    icon: Users,
  },
  {
    step: 5,
    title: 'Receive Decision',
    description: 'Admissions decisions are communicated within 2-3 weeks of completing the application.',
    icon: CheckCircle,
  },
];

const deadlines = [
  { title: 'Early Decision', date: 'November 15, 2025', note: 'Priority consideration' },
  { title: 'Regular Decision', date: 'January 15, 2026', note: 'Standard deadline' },
  { title: 'Financial Aid Application', date: 'February 1, 2026', note: 'For all applicants' },
  { title: 'Decision Notification', date: 'March 15, 2026', note: 'All applicants notified' },
];

export function AdmissionsSection() {
  return (
    <Section id="admissions" background="gradient" padding="xl">
      <Container>
        <SectionHeader
          title="Begin Your Journey"
          subtitle="Join our community of learners. Here's how to apply to Horizon Academy."
          centered
          light
        />

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center h-full hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-xs font-medium text-white/70 mb-2">Step {step.step}</div>
                <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-white/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Dates */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Important Dates
            </h3>
            <div className="space-y-4">
              {deadlines.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/10 rounded-lg"
                >
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-white/60">{item.note}</div>
                  </div>
                  <div className="text-white font-semibold">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Ready to Apply?
            </h3>
            <p className="text-white/80 mb-8">
              We're excited to welcome you to the Horizon Academy community. Our admissions
              team is here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              >
                Start Application
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
