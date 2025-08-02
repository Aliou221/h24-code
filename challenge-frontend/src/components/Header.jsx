import { Link, useLocation } from "react-router-dom";

export default function Header() {

   const { pathname } = useLocation()

   return (
      <header className='p-2 shadow-sm w-full sticky top-0 bg-white z-1000'>
         <nav className='flex items-center mx-auto container p-3 justify-between'>
            <a href="#" className="text-xl font-bold">H24<span className="text-blue-500">Code</span></a>
            <ul className='flex items-center gap-4'>
               <li>
                  <Link 
                     to="/" 
                     className={`${pathname === "/" ? 'font-medium bg-blue-100 p-2 rounded-md text-blue-800 border border-transparent hover:border-blue-500 transition-all duration-300' : ''} text-sm`}
                  >
                     Accueil
                  </Link>
               </li>
               <li>
                  <Link 
                     to="/ajouter"  
                     className={`${pathname === "/ajouter" ? 'font-medium bg-blue-100 p-2 rounded-md text-blue-800 border border-transparent hover:border-blue-500 transition-all duration-300' : ''} text-sm`}
                  >
                        Ajouter
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}
