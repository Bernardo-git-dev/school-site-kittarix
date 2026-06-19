import { ArrowRight, Play } from 'lucide-react';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';

export function CallToAction() {
  return (
    <div className={cn('relative py-24 overflow-hidden')}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/70" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Take the first step toward an exceptional education. Experience our campus virtually
            and discover why families choose Horizon Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tour"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              <Play className="w-5 h-5" />
              Take a Virtual Tour
            </a>
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>

      {/* Decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
}
