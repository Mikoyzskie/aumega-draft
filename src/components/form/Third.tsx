import React from 'react'
import Image from "next/image"

export default function Third() {
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
