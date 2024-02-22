"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail: "/1.jpg",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail: "/2.jpg",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail: "/3.jpg",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail: "/4.jpg",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail: "/5.jpg",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "/6.jpg",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "/7.jpg",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "/8.jpg",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "/9.jpg",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "/10.jpg",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "/11.jpg",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "/12.jpg",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "/13.jpg",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "/14.jpg",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "/15.jpg",
    },
];
