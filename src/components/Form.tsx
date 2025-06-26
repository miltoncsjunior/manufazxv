import type { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
}

export function Form(props: FormProps) {
    return <form>{props.children}</form>;
}
