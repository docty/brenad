import Image from "next/image"
import { Box, IconButton } from '@mui/material';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import Link from "next/link";

export const Navbar = () => {

    return (
        <section>
            <nav className="bg-transparent relative py-5  z-50">
                <Box className="lg:px-36 px-2 mx-auto">
                    <div className="flex items-center justify-between">
                        <Link className="" href="/">
                            <Image className="h-14" src="/logo.png" alt="" width={"100"} height={'100'} />
                        </Link>
                        <Box className="lg:hidden ml-auto">
                            <IconButton aria-label="delete">
                                <IoMenuOutline />
                            </IconButton>
                        </Box>
                        <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
                            <li className="group relative">
                                <a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Article</a>
                                <div className="hidden  group-hover:block absolute top-full left-0 min-w-max max-w-xs p-2 px-0 z-50  shadow-md ">
                                    <div className="-mb-2 ml-3 w-3 h-3 rounded-sm  border-l border-t border-gray-700 transform rotate-45 "></div>
                                    <div className="w-full max-w-xs bg-white border border-gray-100   shadow-md rounded-md pt-2 pb-2">
                                        <div className="border-b border-gray-100">
                                            <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Web Suite</a>
                                            <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Data Science</a>
                                            <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Machine Learning</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Learn</a></li>
                            <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Practice</a></li>
                        </ul>
                         
                    </div>
                </Box>
            </nav>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="relative flex flex-col py-6 px-4 w-full h-full bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-16">
                        <Link className="mr-auto text-2xl font-medium leading-none" href="#">
                            <Image className="h-14" src="/logo.png" alt="" width={"100"} height={'100'} />
                        </Link>
                        <IconButton aria-label="delete">
                            <IoCloseOutline />
                        </IconButton>
                    </div>
                    <div>
                        <ul className="mb-2">
                            <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Article</a></li>
                            <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Learn</a></li>
                            <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Practice</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>


    )
}
