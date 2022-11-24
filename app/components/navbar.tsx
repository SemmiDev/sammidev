import { Link } from '@remix-run/react';

export const listTheme: string[] = [
    'forest',
    'synthwave',
    'dark',
    'night',
    'coffee',
    'halloween',
    'black',
    'business',
    'dracula',
];

interface SwitchThemeButtonProps {
    theme: string;
    setTheme: (theme: string) => void;
}

export const SwitchThemeButton = (props: SwitchThemeButtonProps) => {
    return (
        <div className='flex justify-center dropdown dropdown-bottom'>
            <label
                tabIndex={0}
                className='flex items-center justify-between btn btn-sm md:btn-md btn-outline gap-x-2'
            >
                <span className='flex items-center text-sm gap-x-2'>
                    {props.theme}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-5 h-5 animate-bounce'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                </span>
            </label>
            <ul
                tabIndex={0}
                className='p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52'
            >
                {listTheme.map((theme: string) => (
                    <li key={theme}>
                        <span
                            className='my-3 text-sm font-semibold md:text-lg'
                            onClick={() => props.setTheme(theme)}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>

                            {theme}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function NavBar(props: any) {
    return (
        <div className='sticky top-0 z-50 -mb-8 navbar'>
            <div className='flex-1'>
                <Link
                    to='#'
                    prefetch='intent'
                    className='text-xl normal-case md:text-2xl btn btn-ghost'
                >
                    Sammiii
                </Link>
            </div>
            <div className='flex-none'>
                <div className='dropdown dropdown-end'>{props.children}</div>
            </div>
        </div>
    );
}

export default NavBar;
