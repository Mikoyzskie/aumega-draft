"use client"

import React, { useState } from "react"
import clsx from "clsx"
import First from "@/components/form/First"
import Second from "@/components/form/Second"
import Third from "@/components/form/Third"
import Fourth from "@/components/form/Fourth"
import Layout from "@/components/form/Layout"
import { GoArrowUpRight, GoArrowUpLeft } from "react-icons/go";

export default function Page() {

    const [scene, setScene] = useState(1)

    function handleNext() {
        if (scene <= 3) {
            setScene(scene + 1)
            console.log(scene);
        } else {

        }
    }
    function handleBack() {
        if (scene >= 2) {
            setScene(scene - 1)
            console.log(scene);
        } else {

        }
    }


    return (
        <Layout>
            {
                scene === 1 &&
                <First />
            }

            {
                scene === 2 &&

                <Second />
            }
            {
                scene === 3 &&

                <Third />
            }
            {
                scene === 4 &&

                <Fourth />
            }

            <div className="my-10 flex items-center justify-center">
                <div className="flex w-fit gap-6 items-center">
                    <button className={clsx('py-4 px-6 font-semibold group flex gap-5 items-center',
                        scene === 1 ? "hidden" : ""
                    )} onClick={handleBack}>
                        <span className="group-hover:-rotate-45 transform transition duration-100">
                            <GoArrowUpLeft />
                        </span>
                        Back
                    </button>
                    <button className={clsx('py-4 px-6 font-semibold group flex gap-5 items-center',
                        scene === 4 ? "hidden" : ""
                    )} onClick={handleNext}>Next
                        <span className="group-hover:rotate-45 transform transition duration-100">
                            <GoArrowUpRight />
                        </span>
                    </button>
                </div>
            </div>
        </Layout>
    )
}
