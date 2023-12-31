import React,{useState} from 'react'
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  return (
    <div className="bg-gray-700 w-full">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
        <div className='flex flex-col text-white md:text-center'>
  <h1 className='text-m md:text-2xl font-bold px-6 '>
    A.P.J. ABDUL KALAM DEGREE COLLEGE
  </h1>
  <h2 className='text-sm px-6 '>
    (An Affiliated Unit of B.R.A Bihar University, Muzaffarpur)
  </h2>
  <h3 className='text-sm font-bold px-6'>
    Pakri Deoraj, Ramnagar, Dist.- West Champaran -845103
  </h3>
</div>

          <div className="flex items-center">
          
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  href="/"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                 About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
         
         
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                  </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                        onClick={closeMenu}
                          href="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                        onClick={closeMenu}
                          href="/courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                        onClick={closeMenu}
                          href="/gallery"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Gallery
                        </Link>
                      </li>
                     
                      <li>
                        <Link
                        onClick={closeMenu}
                          href="/about"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                        onClick={closeMenu}
                          href="/contactus"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact Us
                        </Link>
                      </li>
                     
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar