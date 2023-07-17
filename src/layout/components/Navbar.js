"use client"
import { useState } from 'react'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from '@/layout/components/Theme';

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}


export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="nav-main">
        <nav className="nav-bar to-width to-center flex filter drop-shadow-md px-4 py-4 h-24 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-1/5 flex items-center">
                <a className="text-2xl font-bold text-motion reflect" href="/"><span className='ct-logo'>❖</span> CT SERVICES</a>
            </div>
            <div className="w-3/5 flex justify-evenly items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="#sales">
                        SALES
                    </NavLink>
                    <NavLink to="#services">
                        SERVICES
                    </NavLink>
                    <NavLink to="#team">
                        TEAM
                    </NavLink>
                    <NavLink to="#metrix">
                        METRIX.PLACE
                    </NavLink>
                    <NavLink to="#cryptechtest">
                        CRYPTECHTEST
                    </NavLink>
                </div>
            </div>
            <div className="w-1/5 flex justify-end items-end"> 
        {/* <React.StrictMode>
          <StyledEngineProvider injectFirst>
            <Demo />
          </StyledEngineProvider>
        </React.StrictMode> */}
            <a className="home-button" href="#explorecourses"><div><button type="button"> <ContactPageOutlinedIcon/> <span className="home-button-txt">Contact Us</span></button></div></a>
            </div>
        </nav>
        </nav>
    )
}