import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';

const faqs = [
  {
    question: 'What grades does Horizon Academy serve?',
    answer: 'Horizon Academy serves students from preschool (age 3) through 12th grade. Our Early Childhood Program begins at age 3, Elementary covers grades K-5, Middle School serves grades 6-8, and High School encompasses grades 9-12.',
  },
  {
    question: 'What is the student-to-teacher ratio?',
    answer: 'We maintain a low student-to-teacher ratio to ensure personalized attention. In preschool, the ratio is 6:1. In elementary grades, it is 15:1, and in middle and high school, the average class size is 18 students.',
  },
  {
    question: 'Does Horizon Academy offer financial aid?',
    answer: 'Yes, we are committed to making our education accessible. Approximately 25% of our students receive some form of financial assistance. We offer need-based financial aid as well as merit scholarships for qualifying students.',
  },
  {
    question: 'What extracurricular activities are available?',
    answer: 'We offer over 50 clubs and organizations, 20+ varsity sports, award-winning arts programs, and community service opportunities. Students can participate in robotics, debate, Model UN, theater, band, orchestra, visual arts, and much more.',
  },
  {
    question: 'How can I schedule a campus tour?',
    answer: 'You can schedule a virtual or in-person campus tour through our website. Contact our Admissions Office at (555) 123-4567 or email admissions@horizonacademy.edu. We offer tours Monday-Friday and select Saturdays.',
  },
  {
    question: 'What colleges do Horizon Academy graduates attend?',
    answer: 'Our graduates attend top universities nationwide. Recent graduates have been accepted to Ivy League schools, Stanford, MIT, Johns Hopkins, Duke, and many other prestigious institutions. 98% of our graduates attend their first or second choice college.',
  },
  {
    question: 'Is transportation available?',
    answer: 'Yes, we offer bus transportation across the greater metro area. Routes are designed to serve families efficiently with multiple stops. There is an additional fee for transportation services.',
  },
  {
    question: 'What is the application deadline?',
    answer: 'Early Decision applications are due November 15th, and Regular Decision applications are due January 15th. We recommend submitting applications early to ensure consideration for financial aid and preferred interview slots.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 px-4 rounded-lg transition-colors -ml-4"
      >
        <span className="font-medium text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        )}
      >
        <p className="text-gray-600 px-4 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <Section id="faq" background="gray" padding="xl">
      <Container size="md">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 p-3 bg-primary-100 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-primary-600" />
          </div>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Horizon Academy"
            centered
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Still have questions? Our admissions team is here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all shadow-md"
          >
            Contact Us
          </a>
        </div>
      </Container>
    </Section>
  );
}
