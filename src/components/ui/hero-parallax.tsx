"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { righteous } from "@/app/font"


export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-1100, 80]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[220vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 -z-[1]">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10 mt-[75px]">

            <div className="relative">
                <h1 className={`text-2xl md:text-7xl font-bold dark:text-white`}>
                    Elevate Your Space <br /> With Timeless Beauty
                </h1>
                <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                    Elevate your space with the timeless allure of wood veneers, infusing warmth and sophistication into every corner. Embrace {"nature's"} elegance and elevate your interior design aesthetic effortlessly.
                </p>

                <div className="mt-11 flex gap-3">
                    <button className="border border-black px-10 py-5 text-xs uppercase font-bold hero-button text-white bg-black">Contact Us</button>
                    <button className="border border-black px-10 py-5 text-xs uppercase font-bold hero-button">Get a quote</button>
                </div>
                {/* <Image
                    src={"/heroes.png"}
                    alt="hero element"
                    width={700}
                    height={397}
                    className="absolute right-0 top-0 -z-[1]"
                /> */}
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;

        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >

            <Image
                src={product.thumbnail}
                height="600"
                width="600"
                className="object-cover object-left-top absolute h-full w-full inset-0"
                alt={product.title}
            />

            <div className="absolute inset-0 h-full w-full opacity-0  bg-black pointer-events-none"></div>

        </motion.div>
    );
};
