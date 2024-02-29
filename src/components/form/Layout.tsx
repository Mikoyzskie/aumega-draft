import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-32 max-w-screen-xl mx-auto">
            <section className="pb-10 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4 -mb-8">
                        <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="flex items-center">
                                <span className="inline-block w-8 h-8 bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 rounded-full">
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.95898 16.2917L13.1257 19.4584L21.0423 11.5417"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <div className="pl-3">
                                    <span className="block font-bold text-gray-800">Project</span>
                                    <span className="block text-sm text-gray-400">Where you want to apply?</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 inline-flex w-8 h-8 items-center justify-center rounded-full bg-gray-800 font-bold text-white">
                                    2
                                </div>
                                <div className="pl-3">
                                    <span className="block font-bold text-gray-800">Dimension / Duration</span>
                                    <span className="block text-sm text-gray-400">
                                        Measurement and Working Days
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="flex items-center">
                                <div
                                    className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-gray-800 font-bold text-white"
                                    style={{ width: 30, height: 30 }}
                                >
                                    3
                                </div>
                                <div className="pl-3">
                                    <span className="block font-bold text-gray-800">Veneer Type</span>
                                    <span className="block text-sm text-gray-400">
                                        Preferred wood type
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="flex items-center">
                                <div
                                    className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-gray-800 font-bold text-white"
                                    style={{ width: 30, height: 30 }}
                                >
                                    4
                                </div>
                                <div className="pl-3">
                                    <span className="block font-bold text-gray-800">Estimate</span>
                                    <span className="block text-sm text-gray-400">
                                        Rough Quotation of Project
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children}
        </div>
    )
}
