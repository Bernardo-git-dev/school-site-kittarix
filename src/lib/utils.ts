type ClassValue = string | undefined | null | false;

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(' ');
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTime(time: string): string {
  return time;
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function getIconComponent(iconName: string) {
  const iconMap: Record<string, string> = {
    users: 'Users',
    calendar: 'Calendar',
    award: 'Award',
    'trending-up': 'TrendingUp',
    star: 'Star',
    globe: 'Globe',
    map: 'MapPin',
    phone: 'Phone',
    mail: 'Mail',
    clock: 'Clock',
    book: 'BookOpen',
    flask: 'FlaskConical',
    monitor: 'Monitor',
    palette: 'Palette',
    music: 'Music',
    dumbbell: 'Dumbbell',
    heart: 'Heart',
    'graduation-cap': 'GraduationCap',
    building: 'Building',
    library: 'Library',
    microscope: 'Microscope',
    tv: 'Tv',
    code: 'Code',
    camera: 'Camera',
    'chevron-right': 'ChevronRight',
    'chevron-left': 'ChevronLeft',
    menu: 'Menu',
    x: 'X',
    check: 'Check',
    play: 'Play',
    quote: 'Quote',
    send: 'Send',
    arrow: 'ArrowRight',
    search: 'Search',
    filter: 'Filter',
    grid: 'Grid3x3',
    list: 'List',
    info: 'Info',
  };
  return iconMap[iconName] || 'Circle';
}

export function getIconLibrary(iconName: string | null): any {
  if (!iconName) return null;
  return getIconComponent(iconName);
}
