import type { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

export function TextField({ id, label, ...rest }: TextFieldProps) {
    return (
        <div className="mb-3">
            <label htmlFor={id}>{label}</label>
            <input className="form-control" id={id} {...rest} />
        </div>
    );
}
