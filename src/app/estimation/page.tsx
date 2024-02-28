import Card from "@/components/Card"
import Image from "next/image"

export default function page() {
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

            <First />

            <Second />

            <Third />

            <Fourth />

            <div className="my-10 flex items-center justify-center">
                <button className='py-4 px-6 font-semibold group flex gap-5 items-center'>Next
                    <span className="group-hover:rotate-45 transform transition duration-100">
                        <svg
                            width={11}
                            height={11}
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.5 1.5L1.5 9.5"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.5 8.83571V1.5H2.16429"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

const First = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            <Card image="wall.webp" name="Wall" />
            <Card image="ceiling.webp" name="Ceiling" />
            <Card image="door.webp" name="Door" />
            <Card image="floor.webp" name="Floor" />
        </div>
    )
}

const Second = () => {
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

const Third = () => {
    return (
        <div className="grid grid-cols-4 mt-10 mb-20 gap-5">
            <div className=" flex flex-col gap-4 relative">
                <Image
                    src="/anigre-wall.webp"
                    alt="wood"
                    width={400}
                    height={400}
                    className="object-cover rounded-[16px]"
                />
                {/* <h3 className='text-md heading font-semibold uppercase'>Anigre Plain</h3> */}
                <div className="absolute -bottom-[60px] right-5">
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
            </div>
            <div className=" flex flex-col gap-4 relative">
                <Image
                    src="/anigre-wall.webp"
                    alt="wood"
                    width={400}
                    height={400}
                    className="object-cover rounded-[16px]"
                />
                {/* <h3 className='text-md heading font-semibold uppercase'>Anigre Plain</h3> */}
                <div className="absolute -bottom-[60px] right-5">
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
            </div>
            <div className=" flex flex-col gap-4 relative">
                <Image
                    src="/anigre-wall.webp"
                    alt="wood"
                    width={400}
                    height={400}
                    className="object-cover rounded-[16px]"
                />
                {/* <h3 className='text-md heading font-semibold uppercase'>Anigre Plain</h3> */}
                <div className="absolute -bottom-[60px] right-5">
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
            </div>
            <div className=" flex flex-col gap-4 relative">
                <Image
                    src="/anigre-wall.webp"
                    alt="wood"
                    width={400}
                    height={400}
                    className="object-cover rounded-[16px]"
                />
                {/* <h3 className='text-md heading font-semibold uppercase'>Anigre Plain</h3> */}
                <div className="absolute -bottom-[60px] right-5">
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
            </div>
        </div>
    )
}

const Fourth = () => {
    return (
        <div className="flex flex-wrap justify-center -m-4">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            venenatis volutpat velit, quis iaculis velit bibendum a. Maecenas
                            accumsan fermentum nisl.
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