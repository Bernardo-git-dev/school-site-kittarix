import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { useSchoolInfo } from '../../hooks/useData';

export function HeroSection() {
  const { data: school } = useSchoolInfo();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={
            school?.hero_image_url ||
            'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1920'
          }
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/60" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
            Celebrating {school?.founded_year ? new Date().getFullYear() - school.founded_year : 40}+ Years of Excellence
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up">
            {school?.name || 'Horizon Academy'}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in-up animate-delay-100">
            {school?.tagline || 'Where Excellence Meets Opportunity'}
          </p>

          {/* Description */}
          <p className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
            {school?.description ||
              'Discover a premier educational institution dedicated to nurturing curious minds and building tomorrow\'s leaders. Take our virtual tour and explore our world-class facilities without leaving your home.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#tour"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5" />
              Virtual Tour
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <a href="#about" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
    </section>
  );
}
