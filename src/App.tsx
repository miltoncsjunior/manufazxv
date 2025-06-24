import profileImage from './assets/profile.png';
import { useAppContext } from './components/AppContext';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Section } from './components/Section';

function App() {
    const { title, menuItems, year } = useAppContext();
    return (
        <>
            <main className="flex-shrink-0">
                <NavBar
                    title={title}
                    itemsDescription={menuItems.map((item) => item.description)}
                />

                <Header
                    profileImage={profileImage}
                    profileTags={[
                        'Corinthiana',
                        'Sofredora',
                        'Filha Única',
                        'Amiga',
                        'Sonhadora',
                    ]}
                    title={'Nem todos os caminhos levam a Roma,'}
                    subtitle={'mas todos os caminhos levam a Manuela.'}
                    btnsText={menuItems.slice(0, 2)}
                />

                <Section id="about" title="Quem sou eu ?">
                    <p className="lead fw-light mb-4">
                        Meu nome é Manuela Coutinho Paganin.
                    </p>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit dolorum itaque qui unde quisquam consequatur
                        autem. Eveniet quasi nobis aliquid cumque officiis sed
                        rem iure ipsa! Praesentium ratione atque dolorem?
                    </p>
                    <div className="d-flex justify-content-center fs-2 gap-4">
                        <a className="text-gradient" href="#!">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a className="text-gradient" href="#!">
                            <i className="bi bi-snapchat"></i>
                        </a>
                    </div>
                </Section>

                <Section id="event" title="Informações do evento">
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit dolorum itaque qui unde quisquam consequatur
                        autem. Eveniet quasi nobis aliquid cumque officiis sed
                        rem iure ipsa! Praesentium ratione atque dolorem?
                    </p>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h2 className="text-primary fw-bolder mb-0">
                            Experience
                        </h2>
                        <a className="btn btn-primary px-4 py-3" href="#!">
                            <div className="d-inline-block bi bi-download me-2"></div>
                            Download Resume
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
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Delectus laudantium,
                                        voluptatem quis repellendus eaque sit
                                        animi illo ipsam amet officiis corporis
                                        sed aliquam non voluptate corrupti
                                        excepturi maxime porro fuga.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="bg-light p-4 rounded-4">
                                        <div className="text-primary fw-bolder mb-2">
                                            2017 - 2019
                                        </div>
                                        <div className="small fw-bolder">
                                            SEM Specialist
                                        </div>
                                        <div className="small text-muted">
                                            Wayne Enterprises
                                        </div>
                                        <div className="small text-muted">
                                            Gotham City, NY
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Delectus laudantium,
                                        voluptatem quis repellendus eaque sit
                                        animi illo ipsam amet officiis corporis
                                        sed aliquam non voluptate corrupti
                                        excepturi maxime porro fuga.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="rsvp" title="Confirmação de presença">
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit dolorum itaque qui unde quisquam consequatur
                        autem. Eveniet quasi nobis aliquid cumque officiis sed
                        rem iure ipsa! Praesentium ratione atque dolorem?
                    </p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name">Full name</label>
                            <input
                                className="form-control"
                                id="name"
                                type="text"
                                placeholder="Enter your name..."
                                required
                            />
                            <div
                                className="invalid-feedback"
                                data-sb-feedback="name:required"
                            >
                                A name is required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email address</label>
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                            />
                            <div
                                className="invalid-feedback"
                                data-sb-feedback="email:required"
                            >
                                An email is required.
                            </div>
                            <div
                                className="invalid-feedback"
                                data-sb-feedback="email:email"
                            >
                                Email is not valid.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone">Phone number</label>
                            <input
                                className="form-control"
                                id="phone"
                                type="tel"
                                placeholder="12 9456-7890"
                                required
                            />
                            <div
                                className="invalid-feedback"
                                data-sb-feedback="phone:required"
                            >
                                A phone number is required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                placeholder="Enter your message here..."
                                required
                            ></textarea>
                            <div
                                className="invalid-feedback"
                                data-sb-feedback="message:required"
                            >
                                A message is required.
                            </div>
                        </div>
                        <div className="d-grid">
                            <button
                                className="btn btn-primary btn-lg disabled"
                                id="submitButton"
                                type="submit"
                            >
                                <i className="bi bi-envelope text-white"></i>
                            </button>
                        </div>
                    </form>
                </Section>
            </main>
            <Footer footerTitle={title} year={year} />
            <BackToTop />
        </>
    );
}

export default App;
