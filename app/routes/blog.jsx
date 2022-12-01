import styles from 'highlight.js/styles/github-dark-dimmed.css';
import { Outlet } from '@remix-run/react';

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ];
};

export default function Blog() {
    return (
        <main
            data-theme={'night'}
            className='max-w-3xl min-h-screen p-5 mx-auto text-xs antialiased prose text-justify md:text-sm font-inter'
        >
            <Outlet />
        </main>
    );
}
