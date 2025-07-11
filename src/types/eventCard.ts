export interface EventCard {
    order: number;
    period: { start: string; end?: string };
    title: string;
    subTitle: string;
    description: string;
}
