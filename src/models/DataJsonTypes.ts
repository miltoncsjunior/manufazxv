export interface SocialMedia {
    icon: string;
    link: string;
}

export interface StaticSection {
    id: number;
    order: number;
    shortcutText: string;
    title: string;
    description: string;
    socialMedias?: SocialMedia[];
    cards?: EventCard[];
}

export interface EventCard {
    order: number;
    period: { start: string; end?: string };
    title: string;
    subTitle: string;
    description: string;
}

export interface HeaderData {
    tags: string[];
    title: string;
    subTitle: string;
    personImage: string;
}

export interface CustomSection {
    id: number;
    order: number;
    shortcutText: string;
    title: string;
    content: string;
}

export interface DataJson {
    title: string;
    year: number;
    header: HeaderData;
    staticSections: {
        about: StaticSection;
        event: StaticSection;
        rsvp: StaticSection;
    };
    customSections: CustomSection[];
}
