import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Heart,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { useSchoolInfo } from '../../hooks/useData';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Virtual Tour', href: '#tour' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

const resources = [
  { label: 'Student Portal', href: '#' },
  { label: 'Parent Resources', href: '#' },
  { label: 'Library', href: '#tour' },
  { label: 'Career Services', href: '#' },
  { label: 'Campus Map', href: '#tour' },
  { label: 'FAQs', href: '#faq' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const { data: school } = useSchoolInfo();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-gray-800">
        <Container>
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">
                    {school?.name || 'Horizon Academy'}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {school?.tagline || 'Where Excellence Meets Opportunity'}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {school?.description ||
                  'A premier educational institution dedicated to nurturing curious minds and building tomorrow\'s leaders.'}
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                {school?.address && (
                  <li className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-400" />
                    <span>{school.address}</span>
                  </li>
                )}
                {school?.phone && (
                  <li>
                    <a
                      href={`tel:${school.phone}`}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary-400" />
                      {school.phone}
                    </a>
                  </li>
                )}
                {school?.email && (
                  <li>
                    <a
                      href={`mailto:${school.email}`}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary-400" />
                      {school.email}
                    </a>
                  </li>
                )}
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-400" />
                  <div>
                    <p>Mon - Fri: 7:30 AM - 5:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-b border-gray-800">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {school?.name || 'Horizon Academy'}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-all hover:-translate-y-1 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}
