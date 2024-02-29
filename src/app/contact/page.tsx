import React from 'react'

export default function page() {
    return (
        <section className="overflow-hidden mt-32">
            <div className="container px-4 mx-auto pb-20">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 p-4">
                        <div className="max-w-xl mx-auto">
                            <h1 className="text-3xl lg:text-5xl font-bold font-heading mb-4">
                                Contact us
                            </h1>
                            <p className="text-gray-600 mb-10">
                                Submit your info and we’ll get back to you as soon as possible.
                            </p>
                            <div className="mb-10 flex items-center gap-1">
                                <div className="bg-orange-200 rounded-3xl h-px w-3" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={3}
                                    height={3}
                                    viewBox="0 0 3 3"
                                    fill="none"
                                >
                                    <circle cx="1.5" cy="1.5" r="1.5" fill="#FFA632" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={3}
                                    height={3}
                                    viewBox="0 0 3 3"
                                    fill="none"
                                >
                                    <circle cx="1.5" cy="1.5" r="1.5" fill="#FFA632" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={3}
                                    height={3}
                                    viewBox="0 0 3 3"
                                    fill="none"
                                >
                                    <circle cx="1.5" cy="1.5" r="1.5" fill="#FFA632" />
                                </svg>
                                <div className="bg-orange-200 rounded-3xl h-px w-3" />
                            </div>
                            <div className="flex items-center flex-wrap gap-3 mb-4">
                                <div className="bg-orange-500 rounded-xl p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.3333 17.7083H1.66666C1.32499 17.7083 1.04166 17.9916 1.04166 18.3333C1.04166 18.675 1.32499 18.9583 1.66666 18.9583H18.3333C18.675 18.9583 18.9583 18.675 18.9583 18.3333C18.9583 17.9916 18.675 17.7083 18.3333 17.7083Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M14.1667 1.66669H5.83333C3.33333 1.66669 2.5 3.15835 2.5 5.00002V18.3334H17.5V5.00002C17.5 3.15835 16.6667 1.66669 14.1667 1.66669ZM8.33333 14.375H5.83333C5.49167 14.375 5.20833 14.0917 5.20833 13.75C5.20833 13.4084 5.49167 13.125 5.83333 13.125H8.33333C8.675 13.125 8.95833 13.4084 8.95833 13.75C8.95833 14.0917 8.675 14.375 8.33333 14.375ZM8.33333 10.625H5.83333C5.49167 10.625 5.20833 10.3417 5.20833 10C5.20833 9.65835 5.49167 9.37502 5.83333 9.37502H8.33333C8.675 9.37502 8.95833 9.65835 8.95833 10C8.95833 10.3417 8.675 10.625 8.33333 10.625ZM8.33333 6.87502H5.83333C5.49167 6.87502 5.20833 6.59169 5.20833 6.25002C5.20833 5.90835 5.49167 5.62502 5.83333 5.62502H8.33333C8.675 5.62502 8.95833 5.90835 8.95833 6.25002C8.95833 6.59169 8.675 6.87502 8.33333 6.87502ZM14.1667 14.375H11.6667C11.325 14.375 11.0417 14.0917 11.0417 13.75C11.0417 13.4084 11.325 13.125 11.6667 13.125H14.1667C14.5083 13.125 14.7917 13.4084 14.7917 13.75C14.7917 14.0917 14.5083 14.375 14.1667 14.375ZM14.1667 10.625H11.6667C11.325 10.625 11.0417 10.3417 11.0417 10C11.0417 9.65835 11.325 9.37502 11.6667 9.37502H14.1667C14.5083 9.37502 14.7917 9.65835 14.7917 10C14.7917 10.3417 14.5083 10.625 14.1667 10.625ZM14.1667 6.87502H11.6667C11.325 6.87502 11.0417 6.59169 11.0417 6.25002C11.0417 5.90835 11.325 5.62502 11.6667 5.62502H14.1667C14.5083 5.62502 14.7917 5.90835 14.7917 6.25002C14.7917 6.59169 14.5083 6.87502 14.1667 6.87502Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold font-heading">Company HQ</h2>
                            </div>
                            <p className="text-gray-600 mb-10">
                                4140 Parker Rd. Allentown, New Mexico 31134
                            </p>
                            <div className="rounded-3xl border border-gray-100 shadow-sm py-8">
                                <div className="relative">
                                    <div className="absolute top-0 left-0 bg-orange-500 w-1 h-8" />
                                    <div className="px-8">
                                        <h2 className="text-xl font-bold font-heading mb-6">
                                            Technical Help desk
                                        </h2>
                                        <a
                                            className="w-full sm:w-auto h-12 py-3 px-5 rounded-full bg-purple-900 border border-purple-700 hover:bg-purple-800 focus:ring focus:ring-purple-800 transition duration-200 inline-flex items-center justify-center gap-2"
                                            href="#"
                                        >
                                            <span className="text-white text-sm font-semibold">
                                                Visit FAQ Center
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M5 10H15.4167M15.4167 10L10.4167 5M15.4167 10L10.4167 15"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <form action="">
                            <div className="border border-gray-100 rounded-3xl p-6 max-w-xl mx-auto">
                                <h2 className="text-3xl text-center font-bold font-heading mb-4">
                                    Get in touch
                                </h2>
                                <p className="text-center text-gray-600 mb-16">
                                    Fill out the form to connect with a member of our team.
                                </p>
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full lg:w-1/2 p-4">
                                        <label
                                            className="text-sm font-medium mb-2 block"
                                            htmlFor="textInput1"
                                        >
                                            First name
                                        </label>
                                        <input
                                            className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200"
                                            id="textInput1"
                                            type="text"
                                            placeholder="First name"
                                        />
                                    </div>
                                    <div className="w-full lg:w-1/2 p-4">
                                        <label
                                            className="text-sm font-medium mb-2 block"
                                            htmlFor="textInput2"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            className="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200"
                                            id="textInput2"
                                            type="text"
                                            placeholder="Last name"
                                        />
                                    </div>
                                </div>
                                <label
                                    className="text-sm font-medium mb-2 block"
                                    htmlFor="textInput3"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full mb-4 rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200"
                                    id="textInput3"
                                    type="text"
                                    placeholder="john@email.com"
                                />
                                <label
                                    className="text-sm font-medium mb-2 block"
                                    htmlFor="textInput4"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="resize-none w-full rounded-3xl p-4 mb-8 outline-none border border-gray-100 placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200"
                                    id="textInput4"
                                    rows={5}
                                    placeholder="Enter your message"
                                    defaultValue={""}
                                />
                                <button
                                    className="py-4 px-6 rounded-full w-full h-14 inline-flex items-center justify-center text-center mb-8 bg-orange-500 border border-orange-600 font-bold font-heading text-white hover:bg-orange-600 focus:ring focus:ring-orange-200 transition duration-200"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <p className="text-gray-500 text-sm">
                                    <span>We process your information in accordance with our</span>
                                    <span />
                                    <span className="text-orange-500 text-sm font-semibold">
                                        Privacy Policy
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
