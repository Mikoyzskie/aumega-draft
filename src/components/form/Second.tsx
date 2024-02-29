import React from 'react'

export default function Second() {
    return (
        <form action="">
            <div className="flex flex-wrap -mx-4 -mb-10 mt-20">
                <div className="w-full md:w-1/2 px-4 mb-10">
                    <div className="relative w-full h-14 py-4 px-3 border border-gray-800 hover:border-black focus-within:border-green-500 rounded-[8px]">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-black px-1 bg-white">
                            Width
                        </span>
                        <input
                            className="block w-full outline-none bg-transparent text-gray-800 font-semibold"
                            id="formInput2-1"
                            type="text"
                            placeholder="100cm"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10">
                    <div className="relative w-full h-14 py-4 px-3 border border-gray-800 hover:border-black focus-within:border-green-500 rounded-[8px]">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-black px-1 bg-white">
                            Height
                        </span>
                        <input
                            className="block w-full outline-none bg-transparent text-gray-800 font-semibold"
                            id="formInput2-1"
                            type="text"
                            placeholder="100cm"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-10">
                    <div className="relative w-full h-14 py-4 px-3 border border-gray-800 hover:border-black focus-within:border-green-500 rounded-[8px]">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-black px-1 bg-white">
                            Thickness
                        </span>
                        <input
                            className="block w-full outline-none bg-transparent text-gray-800 font-semibold"
                            id="formInput2-1"
                            type="text"
                            placeholder="100cm"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10">
                    <div className="relative w-full h-14 py-4 px-3 border border-gray-800 hover:border-black focus-within:border-green-500 rounded-[8px]">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-black px-1 bg-white">
                            Duration
                        </span>
                        <input
                            className="block w-full outline-none bg-transparent text-gray-800 font-semibold"
                            id="formInput2-1"
                            type="text"
                            placeholder="10 days"
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}
