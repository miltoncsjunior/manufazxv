import { Button } from '../components/button';
import { Form } from '../components/form';
import { TextField } from '../components/textField';

interface RsvpProps {
    description: string;
}

export function Rsvp(props: RsvpProps) {
    return (
        <>
            <p className="text-muted">{props.description}</p>
            <Form>
                <TextField
                    id={'name'}
                    type={'text'}
                    label={'Nome completo'}
                    placeholder={'Digite seu nome completo'}
                />
                <TextField
                    id={'email'}
                    type={'email'}
                    label={'Email'}
                    placeholder={'Digite seu email'}
                />
                <TextField
                    id={'guests'}
                    type={'number'}
                    label={'Acompanhantes'}
                    placeholder={'Número de acompanhantes'}
                    min={0}
                />
                <Button href={'#!'} text="Enviar" />
            </Form>
        </>
    );
}
