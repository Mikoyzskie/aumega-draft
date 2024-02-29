import React from 'react'
import Image from "next/image"

export default function Fourth() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-auto p-4">
                <Image
                    src="/anigre-wall.webp"
                    alt="wood"
                    width={448}
                    height={640}
                    className="object-cover rounded-[24px] h-full"
                />

            </div>
            <div className="w-full md:flex-1 p-4">
                <div className="flex flex-col justify-center items-center p-8 h-full text-center bg-white rounded-3xl">
                    <div className="max-w-lg">
                        <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                            Rough Estimate
                        </span>
                        <h1 className="font-heading mb-5 text-5xl text-gray-900 font-black tracking-tight">

                            Php 90,000

                            {/* <span>Build better products</span>
                            <span className="text-blue-500">faster</span>
                            <span>than ever.</span> */}
                        </h1>
                        <p className="mb-5">10 Working days</p>
                        <div className="flex items-center gap-10 justify-center mb-5">
                            <div className="w-fit text-center">
                                <p className="text-xl font-bold">100cm</p>
                                <p>WIDTH</p>
                            </div>
                            <p className="text-xl font-bold">X</p>
                            <div className="w-fit text-center">
                                <p className="text-xl font-bold">100cm</p>
                                <p>HEIGHT</p>
                            </div>
                            <p className="text-xl font-bold">X</p>
                            <div className="w-fit text-center">
                                <p className="text-xl font-bold">100cm</p>
                                <p>THICK</p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-10 mb-8">
                            <div className="relative">
                                <Image
                                    src="/floor.webp"
                                    alt="wood"
                                    width={130}
                                    height={130}
                                    className="object-cover h-[130px] rounded-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className='text-xs heading font-bold uppercase'>Floor</h3>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    src="/anigre.jpg"
                                    alt="wood"
                                    width={130}
                                    height={130}
                                    className="object-cover rounded-full "
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className='text-xs heading font-bold uppercase'>Anigre Plain</h3>
                                </div>
                            </div>
                        </div>
                        <p className="mb-8 text-xl font-bold">
                            Contact us for detailed estimation
                        </p>
                        <a href='/contact' className="border text-xs relative bg-gradient-to-r from-orange-400 to-pink-600 text-white heading font-bold uppercase px-4 py-4 rounded-full">
                            <span>{"Let's"} Connect</span>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
