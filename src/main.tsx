import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './assets/css/colors.scss';
import './assets/css/styles.css';
import './assets/js/scripts.js';
import { AppProvider } from './components/AppProvider.tsx';
import { Button } from './components/Button.tsx';
import { Card } from './components/Card.tsx';
import { Form } from './components/Form.tsx';
import { TextField } from './components/TextField.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider
            title="Page title"
            headerItems={{
                tags: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
                title: 'Lorem ipsum dolor sit amet,',
                subtitle:
                    'consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur',
            }}
            sectionItems={[
                {
                    sectionName: 'about',
                    shortcutText: 'About',
                    sectionTitle: 'Lorem ipsum',
                    sectionContent: (
                        <>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Fugit dolorum itaque qui unde
                                quisquam consequatur.
                                <br /> Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Fugit dolorum itaque qui unde
                                quisquam consequatur autem. Eveniet quasi nobis
                                aliquid cumque officiis sed rem iure ipsa!
                                Praesentium ratione atque dolorem?
                            </p>
                            <div className="d-flex justify-content-center fs-2 gap-4">
                                <a className="text-gradient" href="#!">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a className="text-gradient" href="#!">
                                    <i className="bi bi-snapchat"></i>
                                </a>
                            </div>
                        </>
                    ),
                },
                {
                    sectionName: 'event',
                    shortcutText: 'Event',
                    sectionTitle: 'Lorem ipsum dolor imet',
                    sectionContent: (
                        <>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Fugit dolorum itaque qui unde
                                quisquam consequatur autem. Eveniet quasi nobis
                                aliquid cumque officiis sed rem iure ipsa!
                                Praesentium ratione atque dolorem?
                            </p>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-0">
                                    Lorem
                                </h2>
                                <Button
                                    href={'#!'}
                                    text={'Download'}
                                    leftIcon="download"
                                />
                            </div>
                            <Card
                                left={{
                                    period: ['2019', 'Present'],
                                    title: 'Web Developer',
                                    subtitle: 'Stark Industries',
                                }}
                                right={{
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.`,
                                }}
                            />
                        </>
                    ),
                },
                {
                    sectionName: 'rsvp',
                    shortcutText: 'RSVP',
                    sectionTitle: 'Lorem',
                    sectionContent: (
                        <>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Fugit dolorum itaque qui unde
                                quisquam consequatur autem. Eveniet quasi nobis
                                aliquid cumque officiis sed rem iure ipsa!
                                Praesentium ratione atque dolorem?
                            </p>
                            <Form>
                                <TextField
                                    id={'name'}
                                    type={'text'}
                                    label={'Full name'}
                                    placeholder={'Enter your full name'}
                                />
                                <TextField
                                    id={'email'}
                                    type={'email'}
                                    label={'Email'}
                                    placeholder={'Enter your email address'}
                                />
                                <TextField
                                    id={'guests'}
                                    type={'number'}
                                    label={'Guests'}
                                    placeholder={'Number of guests'}
                                    min={0}
                                />
                                <Button href={'#!'} text="Submit RSVP" />
                                {/* <button
                                    className="btn btn-primary px-4 py-3"
                                    type="submit"
                                >
                                    Submit RSVP
                                </button> */}
                            </Form>
                        </>
                    ),
                },
            ]}
            year={2025}
        >
            <App />
        </AppProvider>
    </StrictMode>,
);
