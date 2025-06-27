import { Button } from './Button';
import { Card, type CardProps } from './Card';

interface EventProps {
    description: string;
    cards?: CardProps[];
}

export function Event(props: EventProps) {
    return (
        <>
            <p className="text-muted">{props.description}</p>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Lorem</h2>
                <Button href={'#!'} text={'Download'} leftIcon="download" />
            </div>
            {props.cards?.map((card, index) => (
                <Card
                    key={index}
                    period={card.period}
                    title={card.title}
                    subTitle={card.subTitle}
                    description={card.description}
                />
            ))}
        </>
    );
}
