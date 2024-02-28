import React from 'react'
import Image from "next/image"
import {
    IconTableColumn,
} from "@tabler/icons-react";

export default function Card({ image, name }: { image: string, name: string }) {
    return (
        <div className='relative flex overflow-hidden flex-col gap-4 rounded-2xl group hover:cursor-pointer text-white w-full'>
            <Image src={`/${image}`}
                alt='unsplash'
                width={400}
                height={400}
                className='rounded-[8px] object-cover object-center h-[400px] w-full'
            />
            <div className='text-sm flex flex-col gap-3 absolute inset-0 bottom-0 bg-black bg-opacity-50 justify-end p-8 group'>
                <div className='flex flex-col gap-3 transition-all duration-100 group-hover:ml-5'>
                    <IconTableColumn />
                    <h3 className='text-lg heading font-bold uppercase'>{name}</h3>
                    <p className='w-5/6'>Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>
    )
}
