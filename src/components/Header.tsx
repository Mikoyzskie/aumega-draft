import React from 'react'
import { righteous } from "@/app/font"
import Link from "next/link"

export default function Header() {
    return (
        <header className='max-w-screen-xl w-full mx-auto py-6 flex justify-between items-center absolute top-0 inset-x-0'>
            <Link href={"/"}>
                <h2 className={`text-2xl ${righteous.className}`}>AUMEGA</h2>
            </Link>
            <div className='flex gap-10 uppercase text-xs font-bold tracking-wider'>
                <Link href={"/"}>Projects</Link>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"/testimonials"}>Testimonails</Link>
                <Link href={"/estimation"}>Get a Quote</Link>
            </div>
            <button className="border text-xs relative bg-gradient-to-r from-orange-400 to-pink-600 text-white heading font-bold uppercase px-4 py-4 rounded-full">
                <span>{"Let's"} Connect</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
        </header>
    )
}
