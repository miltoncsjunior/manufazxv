import type { CustomSection } from './customSection';
import type { HeaderData } from './headerData';
import type { StaticSection } from './staticSession';

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
