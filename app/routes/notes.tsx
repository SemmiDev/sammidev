import { useState } from 'react';
import WindowsMockup from '~/components/mockup';
import NavBar, { listTheme, SwitchThemeButton } from '~/components/navbar';

export default function Index() {
    const [theme, setTheme] = useState<string>(listTheme[0]); // forest
    const changeTheme = (theme: string) => setTheme(theme);

    return (
        <main data-theme={theme} className='w-full min-h-screen font-inter'>
            <div className='flex flex-col mx-auto max-w-7xl jutsify-center'>
                <WindowsMockup>
                    <NavBar>
                        <SwitchThemeButton
                            theme={theme}
                            setTheme={changeTheme}
                        />
                    </NavBar>
                    <article className={`w-full mt-12 prose`}>
                        <h1>hello</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis magnam ea sint dolorum eveniet fugit
                            cumque cum, nisi nemo aperiam aut, rem hic ipsa
                            mollitia. At molestias laborum corrupti voluptates.
                        </p>
                    </article>
                </WindowsMockup>
            </div>
        </main>
    );
}
