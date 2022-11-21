import type { MetaFunction } from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';

import styles from './styles/app.css';

export function links() {
    return [
        { rel: 'stylesheet', href: styles },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        },
    ];
}

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Sammi Aldhi Yanto',
    viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
    return (
        <html lang='en'>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
