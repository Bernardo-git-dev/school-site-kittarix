import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useSchoolInfo } from '../../hooks/useData';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Virtual Tour', href: '#tour' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: school } = useSchoolInfo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary-900 text-white text-sm">
        <Container>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              {school?.phone && (
                <a
                  href={`tel:${school.phone}`}
                  className="flex items-center gap-2 hover:text-primary-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {school.phone}
                </a>
              )}
              {school?.email && (
                <a
                  href={`mailto:${school.email}`}
                  className="flex items-center gap-2 hover:text-primary-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {school.email}
                </a>
              )}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#admissions"
                className="hover:text-primary-200 transition-colors"
              >
                Admissions
              </a>
              <span className="text-primary-400">|</span>
              <a
                href="#student-life"
                className="hover:text-primary-200 transition-colors"
              >
                Student Life
              </a>
              <span className="text-primary-400">|</span>
              <a
                href="#contact"
                className="hover:text-primary-200 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        )}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span
                  className={cn(
                    'font-heading font-bold text-xl transition-colors',
                    isScrolled ? 'text-gray-900' : 'text-gray-900'
                  )}
                >
                  {school?.name || 'Horizon Academy'}
                </span>
                <p
                  className={cn(
                    'text-xs transition-colors',
                    isScrolled ? 'text-gray-500' : 'text-gray-600'
                  )}
                >
                  {school?.tagline || 'Where Excellence Meets Opportunity'}
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg font-medium transition-all',
                    'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#tour" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Take a Virtual Tour
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-heading font-bold text-xl">
              {school?.name || 'Horizon Academy'}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <nav className="p-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="p-4 border-t">
            <a href="#tour" className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md">
              Take a Virtual Tour
            </a>
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
            <div className="space-y-2 text-sm text-gray-600">
              {school?.phone && (
                <a
                  href={`tel:${school.phone}`}
                  className="flex items-center gap-2 hover:text-primary-600"
                >
                  <Phone className="w-4 h-4" />
                  {school.phone}
                </a>
              )}
              {school?.email && (
                <a
                  href={`mailto:${school.email}`}
                  className="flex items-center gap-2 hover:text-primary-600"
                >
                  <Mail className="w-4 h-4" />
                  {school.email}
                </a>
              )}
              {school?.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{school.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
