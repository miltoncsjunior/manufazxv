import type { ReactNode } from 'react';

interface SectionProps {
    id: string;
    title: string;
    children?: ReactNode;
}

export function Section(props: SectionProps) {
    return (
        <section id={`section_${props.id}`} className="bg-light">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xxl-8">
                        <div className="text-center my-5">
                            <h2 className="display-5 fw-bolder">
                                <span className="text-gradient d-inline">
                                    {props.title}
                                </span>
                            </h2>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
