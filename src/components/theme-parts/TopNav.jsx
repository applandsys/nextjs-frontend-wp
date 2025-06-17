import React from 'react';
import Link from "next/link";

const TopNav = () => {
    return (
        <div className="flex  justify-center  mt-4" >
            <nav className=" px-6 py-3">
                <ul className="flex space-x-6 text-gray-700 font-semibold text-xl">
                    <li><Link href="/"  className="hover:text-blue-500">Home</Link></li>
                    <li><Link href="/about"  className="hover:text-blue-500">About</Link></li>
                    <li><Link href="/blog" className="hover:text-blue-500">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNav;