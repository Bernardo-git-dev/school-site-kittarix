import { useState } from 'react';
import { Camera, Grid3x3, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';
import { useGallery } from '../../hooks/useData';

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'Campus', label: 'Campus' },
  { id: 'Academics', label: 'Academics' },
  { id: 'Athletics', label: 'Athletics' },
  { id: 'Arts', label: 'Arts' },
  { id: 'Student Life', label: 'Student Life' },
  { id: 'Events', label: 'Events' },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { data: gallery } = useGallery();

  const photos = gallery || [];

  const filteredPhotos =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : null
    );
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
    );

  return (
    <Section id="gallery" background="gray" padding="xl">
      <Container>
        <SectionHeader
          title="Photo Gallery"
          subtitle="Moments that define our community. Explore life at Horizon Academy through our photo collection."
          centered
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2',
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {filteredPhotos.slice(0, 12).map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={cn(
                'relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all',
                index === 0 || index === 5
                  ? 'md:col-span-2 md:row-span-2'
                  : '',
                index === 0 || index === 5
                  ? 'min-h-[360px] md:min-h-[440px]'
                  : ''
              )}
            >
              <img
                src={photo.image_url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">{photo.title}</h4>
                  <p className="text-white/70 text-sm">{photo.category}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow">
                  <Camera className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <img
              src={filteredPhotos[lightboxIndex].image_url}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-white font-medium text-center">
                {filteredPhotos[lightboxIndex].title}
              </p>
              <p className="text-white/70 text-sm text-center">
                {filteredPhotos[lightboxIndex].description || filteredPhotos[lightboxIndex].category}
              </p>
            </div>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-10">
          <a
            href="#all-gallery"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all shadow-md"
          >
            <Grid3x3 className="w-5 h-5" />
            View Full Gallery
          </a>
        </div>
      </Container>
    </Section>
  );
}
