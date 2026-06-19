import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type {
  SchoolInfo,
  Facility,
  Program,
  Staff,
  GalleryImage,
  Event,
  Testimonial,
  Statistic,
  Club,
} from '../types';

export function useData<T>(
  table: string,
  options?: {
    select?: string;
    order?: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
    single?: boolean;
  }
) {
  const [data, setData] = useState<T | null | T[]>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase.from(table).select(options?.select || '*');

      if (options?.order) {
        query = query.order(options.order.column, {
          ascending: options.order.ascending ?? true,
        });
      }

      if (options?.filter) {
        query = query.eq(options.filter.column, options.filter.value);
      }

      if (options?.single) {
        query = query.limit(1);
      }

      const { data: result, error: fetchError } = await query;

      if (fetchError) throw fetchError;

      setData(options?.single ? (result as T[])?.[0] || null : result as T[]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  }, [table, options?.select, options?.order, options?.filter, options?.single]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export function useSchoolInfo() {
  return useData<SchoolInfo>('school_info', { single: true });
}

export function useFacilities(category?: string) {
  const options: {
    order: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
  } = {
    order: { column: 'sort_order', ascending: true },
  };

  if (category) {
    options.filter = { column: 'category', value: category };
  }

  return useData<Facility[]>('facilities', options);
}

export function usePrograms(level?: string) {
  const options: {
    order: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
  } = {
    order: { column: 'sort_order', ascending: true },
  };

  if (level) {
    options.filter = { column: 'level', value: level };
  }

  return useData<Program[]>('programs', options);
}

export function useStaff(department?: string) {
  const options: {
    order: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
  } = {
    order: { column: 'sort_order', ascending: true },
  };

  if (department) {
    options.filter = { column: 'department', value: department };
  }

  return useData<Staff[]>('staff', options);
}

export function useGallery(category?: string, featured?: boolean) {
  const options: {
    order: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
    select?: string;
  } = {
    order: { column: 'sort_order', ascending: true },
  };

  const filters: { column: string; value: unknown }[] = [];
  if (category) filters.push({ column: 'category', value: category });
  if (featured !== undefined) filters.push({ column: 'is_featured', value: featured });

  // Apply first filter if exists
  if (filters.length > 0) {
    options.filter = filters[0];
  }

  return useData<GalleryImage[]>('gallery', options);
}

export function useEvents(type?: string) {
  const options: {
    order: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
  } = {
    order: { column: 'sort_order', ascending: true },
  };

  if (type) {
    options.filter = { column: 'type', value: type };
  }

  return useData<Event[]>('events', options);
}

export function useTestimonials(featured?: boolean) {
  const options: {
    order: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
  } = {
    order: { column: 'sort_order', ascending: true },
  };

  if (featured !== undefined) {
    options.filter = { column: 'is_featured', value: featured };
  }

  return useData<Testimonial[]>('testimonials', options);
}

export function useStatistics() {
  return useData<Statistic[]>('statistics', {
    order: { column: 'sort_order', ascending: true },
  });
}

export function useClubs(category?: string) {
  const options: {
    order: { column: string; ascending?: boolean };
    filter?: { column: string; value: unknown };
  } = {
    order: { column: 'sort_order', ascending: true },
  };

  if (category) {
    options.filter = { column: 'category', value: category };
  }

  return useData<Club[]>('clubs', options);
}
