import { Calendar, Clock, MapPin, ArrowRight, Newspaper } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { formatDate } from '../../lib/utils';
import { useEvents } from '../../hooks/useData';

export function EventsSection() {
  const { data: events } = useEvents();

  const featuredEvents = (events || []).filter((e) => e.is_featured).slice(0, 4);

  return (
    <Section id="events" background="white" padding="xl">
      <Container>
        <SectionHeader
          title="News & Events"
          subtitle="Stay up to date with the latest happenings at Horizon Academy"
          centered
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Event */}
          {featuredEvents.length > 0 && (
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group h-full">
                <img
                  src={featuredEvents[0].image_url || 'https://images.pexels.com/photos/159711/books-building-library-education-159711.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                  alt={featuredEvents[0].title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <Badge variant={featuredEvents[0].type === 'event' ? 'primary' : 'secondary'} className="mb-3">
                    {featuredEvents[0].type === 'event' ? 'Upcoming Event' : 'News'}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {featuredEvents[0].title}
                  </h3>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    {featuredEvents[0].summary}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/70">
                    {featuredEvents[0].event_date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredEvents[0].event_date)}
                      </div>
                    )}
                    {featuredEvents[0].event_time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredEvents[0].event_time}
                      </div>
                    )}
                    {featuredEvents[0].location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {featuredEvents[0].location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Events List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Upcoming Events</h4>
              <a href="#all-events" className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1">
                View All
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {featuredEvents.slice(1, 4).map((event) => (
              <div
                key={event.id}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <div className="flex-shrink-0 text-center p-3 bg-primary-50 rounded-lg">
                  {event.event_date && (
                    <>
                      <div className="text-xs text-primary-600 font-medium uppercase">
                        {new Date(event.event_date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-2xl font-bold text-primary-700">
                        {new Date(event.event_date).getDate()}
                      </div>
                    </>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={event.type === 'event' ? 'primary' : 'secondary'} size="sm">
                      {event.type}
                    </Badge>
                  </div>
                  <h5 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors truncate">
                    {event.title}
                  </h5>
                  <p className="text-sm text-gray-500 truncate">
                    {event.location || event.event_time || 'View details'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-primary-600" />
              Latest News
            </h4>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(events || [])
              .filter((e) => e.type === 'news')
              .slice(0, 3)
              .map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image_url || 'https://images.pexels.com/photos/159711/books-building-library-education-159711.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="gray" size="sm" className="mb-2">
                      {news.event_date ? formatDate(news.event_date) : 'Recent'}
                    </Badge>
                    <h5 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                      {news.title}
                    </h5>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {news.summary}
                    </p>
                    <a
                      href={`#news-${news.id}`}
                      className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm mt-4 hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
