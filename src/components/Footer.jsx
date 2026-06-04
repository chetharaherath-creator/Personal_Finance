import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import appConfig from '../data/config.json';

function Footer() {
    return (
        <footer className="w-full bg-secondary dark:bg-[#2A1B16] text-primary py-6 px-8 pb-24 md:pb-6 transition-colors border-t border-pink-200 dark:border-pink-900/30">

            {/* Responsive Container */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">

                {/* Left Side: App Name & Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-pink-600">{appConfig.appName}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        © {new Date().getFullYear()} {appConfig.appName} v{appConfig.version}
                    </p>
                </div>

                {/* Right Side: Links & Socials */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">

                    {/* Quick Links */}
                    <div className="flex gap-6 font-semibold text-sm">
                        <Link to="/dashboard" className="hover:text-pink-500 transition-colors">Dashboard</Link>
                        <Link to="/user" className="hover:text-pink-500 transition-colors">Profile</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl text-gray-500">
                        <a href="#" className="hover:text-pink-500 transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><FaGithub /></a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
