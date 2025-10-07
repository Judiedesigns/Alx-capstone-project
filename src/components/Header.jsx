import appLogo from '../assets/logo.png'
import { Menu } from 'lucide-react';

function Header () {
    return (
        <header className="flex justify-between items-center border-b py-4 border-gray-400">
            <div>
                <img src={appLogo} alt="logo" className="w-32" />
            </div>

            <nav className='hidden md:block'>
                <ul className="flex space-x-8">
                    <li><a href="/">Business</a></li>
                    <li><a href="/">Technology</a></li>
                    <li><a href="/">Entertainment</a></li>
                    <li><a href="/">Health</a></li>
                    <li><a href="/">Science</a></li>
                </ul>
            </nav>

            <div className='cursor-pointer md:hidden block'>
                <Menu />
            </div>
        </header>
    );
}
export default Header;
