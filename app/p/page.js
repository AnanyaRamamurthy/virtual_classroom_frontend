"use client";

import LoadingScreen from "@/components/LoadingScreen";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function aHomeScreen() {

    const [managerData, setManagerData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const data = JSON.parse(secureLocalStorage.getItem("vc_m"));
        setManagerData(data);
    }, []);

    return (managerData === null ?
        <LoadingScreen /> :
        <>
            <NavBar />
            <main className="flex flex-1 flex-col mt-24 w-[80%] ml-auto mr-auto">
                <div>
                    <h1 className="text-3xl font-bold">Welcome {managerData.managerFullName ?? " ... "}</h1>
                    <p className="text-lg font-light mt-0">{new Date().toDateString()}</p>
                </div>

                {/* GitHub style cards for options that show courses */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 hover:cursor-pointer">
                    <div className="backdrop-blur-xl bg-[#f9f9f9] bg-opacity-40 shadow-sm p-4 rounded-xl border border-[#cdcdcd] hover:rounded-2xl hover:bg-[#ffffff]">
                        <h2 className="text-lg font-bold">Courses</h2>
                        <p className="text-sm font-light">View and manage courses</p>
                        <div className="flex flex-col justify-between items-start mt-2">
                            <Link href="/p/course" className="mt-2 bg-gray-200 text-black px-4 py-2 rounded-2xl border w-full text-center border-[#cdcdcd] hover:cursor-pointer">View Courses</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}