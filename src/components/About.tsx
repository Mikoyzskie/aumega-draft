import React from 'react'

export default function About() {
    return (
        <section className="py-16">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap mb-32 mt-14 -mx-8">
                    <div className="w-full lg:w-1/2 px-8">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
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
                            <div className="flex items-center flex-wrap gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <circle cx={8} cy={8} r={5} stroke="#6F0B45" strokeWidth="1.25" />
                                    <circle
                                        cx={8}
                                        cy={8}
                                        r="7.375"
                                        stroke="#FFC96D"
                                        strokeWidth="1.25"
                                    />
                                    <circle cx={8} cy={8} r={3} fill="#FF7100" />
                                </svg>
                                <span className="text-sm font-semibold">Meet Solstice</span>
                            </div>
                        </div>
                        <img
                            className="rounded-3xl w-full mb-8"
                            src="https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/picture4.png"
                            alt=""
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-8">
                        <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-10 max-w-xs lg:max-w-lg">
                            On a mission to make learning fun
                        </h1>
                        <p className="text-gray-600 text-lg">
                            We are driven to transform the landscape of learning into a
                            captivating journey of excitement and discovery. Our aim is to infuse
                            every educational experience with the essence of joy, making learning
                            an immersive adventure that fuels curiosity and fosters growth.
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
                            <p className="text-gray-600 mb-2 text-center">Total funding</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                                $9.6M
                            </h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                        <div className="md:border-r border-gray-200 px-12">
                            <p className="text-gray-600 mb-2 text-center">Team members</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-center">
                                110
                            </h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                        <div className="px-12">
                            <p className="text-gray-600 mb-2 text-center">Nationalities</p>
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
                            Diversity, inclusion, and belonging are fundamental to our success. We
                            believe the best solutions occur when a plurality of backgrounds,
                            experiences, and identities work together.
                        </p>
                        <p className="text-gray-600 text-lg">
                            All your operations are connected in a single platform, transforming
                            work into a visible, automated, and collaborative experience. At every
                            turn, you’re supported by smart suggestions and interventions that
                            understand your business and anticipate your needs.
                        </p>
                    </div>
                </div>

                <div
                    className="bg-orange-50 rounded-3xl pt-24 pb-16 px-4 overflow-hidden mb-24 relative"
                    style={{ height: 700 }}
                >
                    <h2 className="text-4xl font-bold font-heading text-center mb-4">
                        Meet the team
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        A dynamic group of individuals united by passion and expertise
                    </p>
                    <div className="flex absolute left-0" style={{ height: 440 }}>
                        <div className="w-80 mx-4 flex justify-center">
                            <div
                                className="relative bg-no-repeat bg-cover rounded-3xl w-full"
                                style={{
                                    height: 440,
                                    backgroundImage:
                                        'url("https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/men-picture.png")'
                                }}
                            >
                                <div className="absolute bottom-0 left-0 bg-orange-50 rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                                    <h2 className="text-2xl font-bold font-heading mb-2">
                                        David Petrucci
                                    </h2>
                                    <p className="text-sm text-gray-600">Founder &amp; CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 mx-4 flex justify-center">
                            <div
                                className="relative bg-no-repeat bg-cover rounded-3xl w-full"
                                style={{
                                    height: 440,
                                    backgroundImage:
                                        'url("https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/woman-picture1.png")'
                                }}
                            >
                                <div className="absolute bottom-0 left-0 bg-orange-50 rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                                    <h2 className="text-2xl font-bold font-heading mb-2">
                                        Erika Newton
                                    </h2>
                                    <p className="text-sm text-gray-600">Growth Marketer</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 mx-4 flex justify-center">
                            <div
                                className="relative bg-no-repeat bg-cover rounded-3xl w-full"
                                style={{
                                    height: 440,
                                    backgroundImage:
                                        'url("https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/woman-picture2.png")'
                                }}
                            >
                                <div className="absolute bottom-0 left-0 bg-orange-50 rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                                    <h2 className="text-2xl font-bold font-heading mb-2">
                                        Malika Gil
                                    </h2>
                                    <p className="text-sm text-gray-600">Operations Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 mx-4 flex justify-center">
                            <div
                                className="relative bg-no-repeat bg-cover rounded-3xl w-full"
                                style={{
                                    height: 440,
                                    backgroundImage:
                                        'url("https://static.shuffle.dev/components/preview/2ff3783f-e5ea-40ca-ad05-1d49e38cda36/assets/public/solstice-assets/images/about/men-picture2.png")'
                                }}
                            >
                                <div className="absolute bottom-0 left-0 bg-orange-50 rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                                    <h2 className="text-2xl font-bold font-heading mb-2">
                                        Josh Tyler
                                    </h2>
                                    <p className="text-sm text-gray-600">People Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
