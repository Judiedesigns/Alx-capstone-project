import appLogo from '../assets/logo.png'

function Header () {
    return (
        <header className="flex justify-between items-center border-b p-4 border-gray-400">
            <div>
                <img src={appLogo} alt="logo" className="w-32" />
            </div>

            <nav>
                <ul className="flex space-x-8">
                    <li><a href="/">Business</a></li>
                    <li><a href="/">Technology</a></li>
                    <li><a href="/">Entertainment</a></li>
                    <li><a href="/">Health</a></li>
                    <li><a href="/">Science</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
