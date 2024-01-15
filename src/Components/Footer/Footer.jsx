import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-500 text-white">
                <div className='footer grid-rows-2 p-10'>
                    <nav>
                        <header className="footer-title">Services</header>
                        <Link to='' className="link link-hover">Branding</Link>
                        <Link to='' className="link link-hover">Design</Link>
                        <Link to='' className="link link-hover">Marketing</Link>
                        <Link to='' className="link link-hover">Advertisement</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <Link to='' className="link link-hover">About us</Link>
                        <Link to='' className="link link-hover">Contact</Link>
                        <Link to='' className="link link-hover">Jobs</Link>
                        <Link to='' className="link link-hover">Press kit</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <Link to='' className="link link-hover">Terms of use</Link>
                        <Link to='' className="link link-hover">Privacy policy</Link>
                        <Link to='' className="link link-hover">Cookie policy</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Social</header>
                        <Link to='' className="link link-hover">Twitter</Link>
                        <Link to='' className="link link-hover">Instagram</Link>
                        <Link to='' className="link link-hover">Facebook</Link>
                        <Link to='' className="link link-hover">Github</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Explore</header>
                        <Link to='' className="link link-hover">Features</Link>
                        <Link to='' className="link link-hover">Enterprise</Link>
                        <Link to='' className="link link-hover">Security</Link>
                        <Link to='' className="link link-hover">Pricing</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Apps</header>
                        <Link to='' className="link link-hover">Mac</Link>
                        <Link to='' className="link link-hover">Windows</Link>
                        <Link to='' className="link link-hover">iPhone</Link>
                        <Link to='' className="link link-hover">Android</Link>
                    </nav>
                </div>
                <aside className='text-center py-4'>
                    <p>Copyright © 2023 - All right reserved by medicare hospital Ltd</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;