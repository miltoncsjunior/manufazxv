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
                            <p className="lead fw-light mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Fugit dolorum itaque qui unde
                                quisquam consequatur.
                            </p>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur
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
                                <a
                                    className="btn btn-primary px-4 py-3"
                                    href="#!"
                                >
                                    <div className="d-inline-block bi bi-download me-2"></div>
                                    Download
                                </a>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">
                                                    2019 - Present
                                                </div>
                                                <div className="small fw-bolder">
                                                    Web Developer
                                                </div>
                                                <div className="small text-muted">
                                                    Stark Industries
                                                </div>
                                                <div className="small text-muted">
                                                    Los Angeles, CA
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Delectus laudantium, voluptatem
                                                quis repellendus eaque sit animi
                                                illo ipsam amet officiis
                                                corporis sed aliquam non
                                                voluptate corrupti excepturi
                                                maxime porro fuga.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name">Full name</label>
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="guests">Guests</label>
                                    <input
                                        className="form-control"
                                        id="guests"
                                        type="number"
                                        placeholder="Number of guests"
                                    />
                                </div>
                                <button
                                    className="btn btn-primary px-4 py-3"
                                    type="submit"
                                >
                                    Submit RSVP
                                </button>
                            </form>
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
