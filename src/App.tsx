import personImage from './assets/img/person.png';
import { useAppContext } from './components/AppContext';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Section } from './components/Section';

function App() {
    const { title, headerItems, sectionItems, year } = useAppContext();
    return (
        <>
            <main className="flex-shrink-0">
                <NavBar
                    title={title}
                    sectionItems={sectionItems.map((item) => ({
                        sectionName: item.sectionName,
                        shortcutText: item.shortcutText,
                    }))}
                />

                <Header
                    personImage={personImage}
                    personTags={headerItems.tags}
                    title={headerItems.title}
                    subtitle={headerItems.subtitle}
                    btnsText={sectionItems.slice(0, 2).map((item) => ({
                        section: item.sectionName,
                        description: item.shortcutText,
                    }))}
                />

                {sectionItems.map((item, index) => (
                    <Section
                        key={index}
                        id={item.sectionName}
                        title={item.sectionTitle}
                    >
                        {item.sectionContent}
                    </Section>
                ))}
            </main>
            <Footer footerTitle={title} year={year} />
            <BackToTop />
        </>
    );
}

export default App;
