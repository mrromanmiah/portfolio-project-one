import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-[#91ff00] bg-opacity-10 lg:px-20">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <img className="w-8" src="https://i.ibb.co/nLBGhvQ/new-logo.png" alt="" />
                    <div className="flex-1 px-2 mx-2 text-3xl font-bold text-white">roman <span className="text-[#91ff00]">.</span></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal text-white text-xs items-center">
                            {/* Navbar menu content here */}
                            <NavLink to='/'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Home</a></li></NavLink>
                            <NavLink to='/aboutMe'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>About Me</a></li></NavLink>
                            <NavLink to='/myProjects'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Projects</a></li></NavLink>
                            <NavLink to='/'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Services</a></li></NavLink>
                            <NavLink to='/contactMe'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Contact</a></li></NavLink>

                            <button className="bg-[#91ff00] border-2 border-[#91ff00] px-4 py-2 text-black font-semibold rounded ml-6 hover:border-2 hover:border-[#91ff00] hover:bg-[#91ff00] hover:bg-opacity-10 hover:text-white">Hire Me</button>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <NavLink to='/'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Home</a></li></NavLink>
                    <NavLink to='/aboutMe'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>About Me</a></li></NavLink>
                    <NavLink to='/myProjects'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Projects</a></li></NavLink>
                    <NavLink to='/'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Services</a></li></NavLink>
                    <NavLink to='/contactMe'><li className="hover:border-b-2 hover:border-[#91ff00]"><a>Contact</a></li></NavLink>

                    <button className="bg-[#91ff00] border-2 border-[#91ff00] px-4 py-2 text-black font-semibold rounded ml-6 hover:border-2 hover:border-[#91ff00] hover:bg-[#91ff00] hover:bg-opacity-10 hover:text-white">Hire Me</button>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;