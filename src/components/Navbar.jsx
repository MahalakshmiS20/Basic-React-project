import{FaHome,FaInfoCircle,FaServicestack,FaEnvelope} from "react-icons/fa"

 const navlink = [
        {href:"#",icon:<FaHome/>,name: "Home"},
        {href:"#",icon:<FaInfoCircle/>,name: "About"},
        {href:"#",icon:<FaServicestack/>,name: "Services"},
        {href:"#",icon:<FaEnvelope/> ,name: "Contact"}
        
    ];

function Navbar() {
    return (
        <nav className=" bg-gray-900 text-white p-4">
            <div className="flex mx-auto items-center justify-between px-4">
                <h1 className="text-2xl font-bold ">🚀My Website</h1>
                <ul className="flex space-x-6 "> 
                    {/*<li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400 cursor-pointer" >
                            <FaHome/>
                             Home
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"> 
                            <FaInfoCircle/>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                            <FaServicestack/>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                           <FaEnvelope/> 
                            Contact
                        </a>
                    </li>*/}

               { navlink.map((link,index)=>(
                    <li>
                    <a
                     href="{link.href}" className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                    {link.icon}
                    {link.name}
                    </a>
                    </li> 
                ))}
                </ul>
            </div>
        </nav>
    );

}

export default Navbar;