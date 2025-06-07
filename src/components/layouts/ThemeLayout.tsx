import React from 'react';
import TopNav from "@/components/theme-parts/TopNav";
import Footer from "@/components/theme-parts/Footer";

const ThemeLayout = ({
                        children,
                    }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <TopNav/>
            </header>
            <main className="container mx-auto flex-grow">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default ThemeLayout;