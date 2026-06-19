import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';
import { useTestimonials } from '../../hooks/useData';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: testimonials } = useTestimonials(true);

  const featured = (testimonials || []).slice(0, 6);

  const next = () => setActiveIndex((prev) => (prev + 1) % featured.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + featured.length) % featured.length);

  if (featured.length === 0) return null;

  return (
    <Section id="testimonials" background="gray" padding="xl">
      <Container>
        <SectionHeader
          title="What Our Community Says"
          subtitle="Hear from alumni, parents, and students about their Horizon Academy experience"
          centered
        />

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-5 h-5',
                      i < (featured[activeIndex]?.rating || 5)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300'
                    )}
                  />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              "{featured[activeIndex]?.content}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={featured[activeIndex]?.image_url || 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'}
                alt={featured[activeIndex]?.name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100"
              />
              <div>
                <div className="font-semibold text-gray-900 text-lg">
                  {featured[activeIndex]?.name}
                </div>
                <div className="text-gray-500">
                  {featured[activeIndex]?.role}
                  {featured[activeIndex]?.graduation_year &&
                    ` • Class of ${featured[activeIndex].graduation_year}`}
                </div>
                {featured[activeIndex]?.current_position && (
                  <div className="text-primary-600 text-sm">
                    {featured[activeIndex].current_position}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            {featured.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex gap-2">
                  {featured.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        'w-2.5 h-2.5 rounded-full transition-all',
                        index === activeIndex
                          ? 'bg-primary-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featured.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'p-6 rounded-xl cursor-pointer transition-all',
                activeIndex === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md',
                index !== activeIndex && activeIndex !== index && 'opacity-60 hover:opacity-100'
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonial.image_url || 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className={cn('font-medium text-sm', activeIndex === index ? 'text-white' : 'text-gray-900')}>
                    {testimonial.name}
                  </div>
                  <div className={cn('text-xs', activeIndex === index ? 'text-white/80' : 'text-gray-500')}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-sm line-clamp-3">
                "{testimonial.content.slice(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
