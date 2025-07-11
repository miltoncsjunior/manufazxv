import { useAppContext } from './components/appContext';
import { BackToTop } from './components/backToTop';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { NavBar } from './components/navBar';
import RenderHtmlString from './components/renderHtmlString';
import { Section } from './components/section';
import { About } from './pages/about';
import { Event } from './pages/event';
import { Rsvp } from './pages/rsvp';

function App() {
    const { data } = useAppContext();
    const orderedItems = [
        ...Object.values(data.staticSections || {}),
        ...Object.values(data.customSections || []),
    ].sort((a, b) => a.order - b.order);

    return (
        <>
            <main className="flex-shrink-0">
                <NavBar
                    title={data.title}
                    sectionItems={orderedItems.map((item) => ({
                        sectionName: item.id.toString(),
                        shortcutText: item.shortcutText,
                    }))}
                />

                <Header
                    personImage={data.header.personImage}
                    personTags={data.header.tags}
                    title={data.header.title}
                    subtitle={data.header.subTitle}
                    btnsText={orderedItems.slice(0, 2).map((item) => ({
                        section: item.id.toString(),
                        description: item.shortcutText,
                    }))}
                />

                {orderedItems.map((item, index) => (
                    <Section
                        key={index}
                        id={item.id.toString()}
                        title={item.title}
                    >
                        {(() => {
                            if (
                                'id' in item &&
                                item.id === data.staticSections.about.id
                            ) {
                                return (
                                    <About
                                        description={
                                            data.staticSections.about
                                                .description
                                        }
                                        socialMedias={
                                            data.staticSections.about
                                                .socialMedias
                                        }
                                    />
                                );
                            } else if (
                                'id' in item &&
                                item.id === data.staticSections.event.id
                            ) {
                                return (
                                    <Event
                                        description={
                                            data.staticSections.event
                                                .description
                                        }
                                        cards={data.staticSections.event.cards}
                                    />
                                );
                            } else if (
                                'id' in item &&
                                item.id === data.staticSections.rsvp.id
                            ) {
                                return (
                                    <Rsvp
                                        description={
                                            data.staticSections.rsvp.description
                                        }
                                    />
                                );
                            }

                            // Se não, renderiza a description normalmente
                            else if (
                                'description' in item &&
                                typeof item.description === 'string'
                            ) {
                                return item.description;
                            }

                            // Se for customSection com content HTML
                            else if (
                                'content' in item &&
                                typeof item.content === 'string'
                            ) {
                                return <RenderHtmlString html={item.content} />;
                            }

                            return null;
                        })()}
                    </Section>
                ))}
            </main>
            <Footer footerTitle={data.title} year={data.year} />
            <BackToTop />
        </>
    );
}

export default App;
