// src/app/layout.jsx
import Script from 'next/script';
import "./globals.css";

export const metadata = {
    title: 'Mentor of Cure',
    description: 'Your Trusted health Adviser',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Mentor of Cure</title>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-9ZDGJHBLLV"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9ZDGJHBLLV');
          `}
            </Script>
        </head>
        <body>{children}</body>
        </html>
    );
}
