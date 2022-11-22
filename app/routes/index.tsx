import { useState } from 'react';
import Achievement from '~/components/achievement';
import Certificate from '~/components/certificate';
import Currently from '~/components/currencly';
import Education from '~/components/education';
import Etc from '~/components/etc';
import Experience from '~/components/experience';
import Footer from '~/components/footer';
import Hobby from '~/components/hobby';
import Intro from '~/components/intro';
import NavBar, { listTheme, SwitchThemeButton } from '~/components/navbar';
import Portfolio from '~/components/portfolio';
import Skills from '~/components/skills';
import Clock from '~/components/clock';
import Photography from '~/components/photography';
import WindowsMockup from '~/components/mockup';

export default function Index() {
    const [theme, setTheme] = useState<string>(listTheme[0]); // forest
    const changeTheme = (theme: string) => setTheme(theme);

    return (
        <main data-theme={theme} className='min-h-screen font-inter'>
            <div className='w-11/12 mx-auto max-w-7xl'>
                <WindowsMockup>
                    <NavBar>
                        <SwitchThemeButton
                            theme={theme}
                            setTheme={changeTheme}
                        />
                    </NavBar>
                    <Intro />
                    <Currently />

                    <div className='divider'></div>

                    <div className='grid w-full grid-cols-1 gap-12 md:grid-cols-2'>
                        <Education />
                        <Experience />
                    </div>

                    <div className='divider'></div>
                    <Achievement />

                    <div className='divider'></div>
                    <Certificate />

                    <div className='divider'></div>
                    <Portfolio />

                    <div className='divider'></div>
                    <Photography />

                    <div className='divider'></div>
                    <Hobby />

                    <div className='divider'></div>
                    <div className='grid w-full grid-cols-1 gap-12 md:grid-cols-2'>
                        <Skills />
                        <Etc />
                    </div>

                    <Clock />
                    <Footer />
                </WindowsMockup>
            </div>
        </main>
    );
}
