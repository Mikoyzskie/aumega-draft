import React from 'react'

export default function About() {
    return (
        <section className="pb-16 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-xl mb-24 mx-auto text-center">
                    <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                        About Us
                    </span>
                    <h1 className="font-heading text-4xl xs:text-6xl font-bold text-gray-900 mb-6">
                        <span>Aumega </span>
                        <span className="font-serif italic">Works</span>
                    </h1>
                </div>
            </div>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap mb-32 mt-14 -mx-8">
                    <div className="w-full lg:w-1/2 px-8">
                        {/* <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
                            <div className="py-1 px-3 rounded-lg border border-orange-100 bg-orange-50 flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={8}
                                    height={8}
                                    viewBox="0 0 8 8"
                                    fill="none"
                                >
                                    <circle cx={4} cy={4} r={3} fill="#FF7100" />
                                </svg>
                                <span className="text-orange-500 text-sm font-medium">
                                    About Us
                                </span>
                            </div>

                        </div> */}
                        <img
                            className="rounded-3xl w-full"
                            src="https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/picture4.png"
                            alt=""
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-8 flex flex-col justify-center">
                        <h1 className="text-5xl lg:text-6xl font-bold font-heading mb-10 max-w-xs lg:max-w-lg">
                            {"Bringing Nature's Beauty to Your Home with Premium Wood Veneers"}
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quaerat illo unde, rerum dolor quod delectus veniam laborum similique dicta, explicabo aliquid blanditiis velit nihil doloremque quidem voluptatibus! Odio dolor ratione repellat blanditiis voluptatibus unde explicabo neque error eligendi non?
                        </p>
                    </div>
                </div>
                <div className="border border-gray-200 bg-white rounded-3xl flex flex-wrap mb-32">
                    <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                        <div className="md:border-r border-gray-200 px-12">
                            <p className="text-gray-600 mb-2 text-center">Founded</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                                2023
                            </h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                        <div className="lg:border-r border-gray-200 px-12">
                            <p className="text-gray-600 mb-2 text-center">Total Earnings</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                                $9.6M
                            </h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                        <div className="md:border-r border-gray-200 px-12">
                            <p className="text-gray-600 mb-2 text-center">Team Projects</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                                110
                            </h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                        <div className="px-12">
                            <p className="text-gray-600 mb-2 text-center">Positive Reviews</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-center">24</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-10 -mx-8">
                    <div className="w-full lg:w-1/2 px-8">
                        <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-20 max-w-xs lg:max-w-lg">
                            A company with values
                        </h2>
                        <img
                            className="rounded-3xl w-full mb-8"
                            src="https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/picture2.png"
                            alt=""
                        />
                        <img
                            className="rounded-3xl w-full mb-8"
                            src="https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/picture5.png"
                            alt=""
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-8">
                        <img
                            className="rounded-3xl w-full mb-24"
                            src="https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/picture3.png"
                            alt=""
                        />
                        <p className="text-gray-600 text-lg mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente pariatur repellendus hic dignissimos, quam beatae dicta delectus veritatis recusandae nam numquam vitae atque dolores consequuntur aperiam ipsam at enim!
                        </p>
                        <p className="text-gray-600 text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni corporis deserunt non quia aspernatur sequi fugit ex, optio accusantium! Excepturi unde, doloremque voluptate corporis enim dolorem natus at quaerat harum laborum porro sequi, aperiam incidunt.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
