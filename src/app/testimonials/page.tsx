import React from 'react'
import Image from "next/image"

export default function page() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <img
                className="absolute top-0 left-0"
                src="https://shuffle.dev/saturn-assets/images/testimonials/blue-light.png"
                alt=""
            />
            <img
                className="absolute bottom-0 right-0"
                src="https://shuffle.dev/saturn-assets/images/testimonials/orange-light.png"
                alt=""
            />
            <div className="relative container px-4 mx-auto">
                <div className="max-w-lg lg:max-w-7xl mx-auto">
                    <div className="flex flex-wrap -mx-4 mb-18 items-center">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <div className="max-w-md xl:max-w-xl">
                                <h1 className="font-heading text-6xl xs:text-6xl font-bold text-gray-900 mb-10">
                                    <span>Our </span>
                                    <span className="font-serif italic">happy</span>
                                    <span> clients says about us</span>
                                </h1>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="max-w-md lg:ml-auto">
                                <p className="text-gray-500">
                                    {/* Risus viverra justo sagittis vestibulum metus. Massa lacinia eros
                                    posuere cursus sed vestibulum massa gravida. Turpis volutpat
                                    faucibus hac sed suspendisse convallis vestibulum massa. */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-28'>
                        <div className="flex flex-wrap flex-row-reverse -mx-4 items-center">
                            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                                <div className="lg:max-w-md xl:max-w-lg">
                                    <img
                                        className="block w-full"
                                        src="https://shuffle.dev/saturn-assets/images/testimonials/men-photo.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="max-w-lg">
                                    <img
                                        className="block mb-8"
                                        src="https://shuffle.dev/saturn-assets/images/testimonials/quote.svg"
                                        alt=""
                                    />
                                    <p className="text-2xl font-semibold text-gray-900 mb-5">
                                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam culpa, voluptatum temporibus similique cumque a?”
                                    </p>
                                    <span className="block text-gray-900 font-semibold mb-1">
                                        — Yacob Sudarmaji
                                    </span>
                                    <span className="block text-gray-500 mb-10">
                                        Product Manager, XYZ Tech
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-4 items-center">
                            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                                <div className="lg:max-w-md xl:max-w-lg">
                                    <img
                                        className="block w-full"
                                        src="https://shuffle.dev/saturn-assets/images/testimonials/men-photo.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="max-w-lg">
                                    <img
                                        className="block mb-8"
                                        src="https://shuffle.dev/saturn-assets/images/testimonials/quote.svg"
                                        alt=""
                                    />
                                    <p className="text-2xl font-semibold text-gray-900 mb-5">
                                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam culpa, voluptatum temporibus similique cumque a?”
                                    </p>
                                    <span className="block text-gray-900 font-semibold mb-1">
                                        — Yacob Sudarmaji
                                    </span>
                                    <span className="block text-gray-500 mb-10">
                                        Product Manager, XYZ Tech
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap flex-row-reverse -mx-4 items-center">
                            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                                <div className="lg:max-w-md xl:max-w-lg">
                                    <img
                                        className="block w-full"
                                        src="https://shuffle.dev/saturn-assets/images/testimonials/men-photo.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="max-w-lg">
                                    <img
                                        className="block mb-8"
                                        src="https://shuffle.dev/saturn-assets/images/testimonials/quote.svg"
                                        alt=""
                                    />
                                    <p className="text-2xl font-semibold text-gray-900 mb-5">
                                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam culpa, voluptatum temporibus similique cumque a?”
                                    </p>
                                    <span className="block text-gray-900 font-semibold mb-1">
                                        — Yacob Sudarmaji
                                    </span>
                                    <span className="block text-gray-500 mb-10">
                                        Product Manager, XYZ Tech
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
