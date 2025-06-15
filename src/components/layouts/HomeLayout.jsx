import React from 'react';
import TopNav from "@/components/theme-parts/TopNav";
import Footer from "@/components/theme-parts/Footer";

const HomeLayout = ({
                        children,
                    }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <TopNav/>
            </header>
            <main className="flex-grow">
                {children}
            </main>
           <Footer/>
        </div>
    );
};

export default HomeLayout;