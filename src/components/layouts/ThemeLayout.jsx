import React from 'react';
import PropTypes from 'prop-types';
import TopNav from "@/components/theme-parts/TopNav";
import Footer from "@/components/theme-parts/Footer";

const ThemeLayout = ({children,}) => {
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

// ✅ Add this:
ThemeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ;