import type { EventCard } from './eventCard';
import type { SocialMedia } from './socialMedia';

export interface StaticSection {
    id: number;
    order: number;
    shortcutText: string;
    title: string;
    description: string;
    socialMedias?: SocialMedia[];
    cards?: EventCard[];
}
