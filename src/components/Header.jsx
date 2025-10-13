import appLogo from '../assets/logo.png'
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header className="flex justify-between items-center border-b py-4 border-gray-400">
            <Link to="/">
                <img src={appLogo} alt="logo" className="w-32" />
            </Link>

            <nav className='hidden md:block'>
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/business">Business</Link>
                    </li>
                    <li>
                        <Link to="/technology">Technology</Link>
                    </li>
                    <li>
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li>
                        <Link to="/health">Health</Link>
                    </li>
                    <li>
                        <Link to="/science">Science</Link>
                    </li>
                </ul>
            </nav>

            {/* <div className='cursor-pointer md:hidden block'>
                <Menu />
            </div> */}
        </header>
    );
}
export default Header;
