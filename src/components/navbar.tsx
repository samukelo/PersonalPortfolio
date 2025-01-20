import { useState } from "react"; 

function NavBar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 return (
   <nav className="bg-white fixed w-full shadow-md z-50">
     <div className="container mx-auto px-4 py-3 flex items-center justify-between">
       {/* Logo Section */}
       <div className="text-xl font-semibold text-gray-800">
         <a href="#">
           The <span className="text-blue-600">WSM</span>
         </a>
       </div>

       {/* Toggler Button (Mobile) */}
       <button
         className="text-gray-800 md:hidden focus:outline-none"
         onClick={() => setIsMenuOpen(!isMenuOpen)}>
         <svg
           className="w-6 h-6"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
           {isMenuOpen ? (
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M6 18L18 6M6 6l12 12"
             />
           ) : (
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M4 6h16M4 12h16m-7 6h7"
             />
           )}
         </svg>
       </button>

       {/* Menu Items */}
       <div
         className={`${
           isMenuOpen ? "block" : "hidden"
         } md:flex items-center space-x-4`}>
         <a
           href="#"
           className="block py-2 px-4 text-gray-800 hover:text-blue-600">
           About
         </a>
         <a
           href="#skills"
           className="block py-2 px-4 text-gray-800 hover:text-blue-600">
           Technologies
         </a>
         <a
           href="#projects"
           className="block py-2 px-4 text-gray-800 hover:text-blue-600">
           My Projects
         </a>
       </div>
     </div>
   </nav>
 );
}

export default NavBar;
