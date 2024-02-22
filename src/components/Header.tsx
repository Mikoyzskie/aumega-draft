import React from 'react'
import { righteous } from "@/app/font"
import Link from "next/link"

export default function Header() {
    return (
        <header className='max-w-screen-xl w-full mx-auto py-6 flex justify-between items-center'>
            <Link href={"/"}>
                <h2 className={`text-2xl ${righteous.className}`}>AUMEGA</h2>
            </Link>
            <div className='flex gap-10 uppercase text-xs font-bold tracking-wider'>
                <Link href={"/"}>Projects</Link>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"/testimonials"}>Testimonails</Link>
                <Link href={"/"}>Get a Quote</Link>
            </div>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                <span>{"Let's"} Connect</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
        </header>
    )
}
