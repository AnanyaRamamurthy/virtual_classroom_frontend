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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 hover:cursor-pointer">
                    <div className="backdrop-blur-xl bg-[#f9f9f9] bg-opacity-40 shadow-sm p-4 rounded-2xl border border-[#cdcdcd]">
                        <h2 className="text-lg font-bold">Students</h2>
                        <p className="text-sm font-light">View and manage Students</p>
                        <div className="flex justify-between items-start mt-2">
                            <Link href="/a/student/new" className="mt-2 bg-gray-200 text-black px-4 py-2 rounded-2xl border w-full text-center border-[#cdcdcd]">Add Students</Link>
                            <Link href="/a/student" className="mt-2 bg-gray-200 text-black px-4 ml-2 py-2 rounded-2xl border w-full text-center border-[#cdcdcd]">View Students</Link>
                        </div>
                    </div>
                    <div className="backdrop-blur-xl bg-[#f9f9f9] bg-opacity-40 shadow-sm p-4 rounded-2xl border border-[#cdcdcd]">
                        <h2 className="text-lg font-bold">Courses</h2>
                        <p className="text-sm font-light">View and manage courses</p>
                        <div className="flex justify-between items-start mt-2">
                            <Link href="/a/student/new" className="mt-2 bg-gray-200 text-black px-4 py-2 rounded-2xl border w-full text-center border-[#cdcdcd]">Add Courses</Link>
                            <Link href="/a/student" className="mt-2 bg-gray-200 text-black px-4 ml-2 py-2 rounded-2xl border w-full text-center border-[#cdcdcd]">View Courses</Link>
                        </div>
                    </div>
                    <div className="backdrop-blur-xl bg-[#f9f9f9] bg-opacity-40 shadow-sm p-4 rounded-2xl border border-[#cdcdcd]">
                        <h2 className="text-lg font-bold">Officials</h2>
                        <p className="text-sm font-light">View and manage officials</p>
                        <div className="flex justify-between items-start mt-2">
                            <Link href="/a/student/new" className="mt-2 bg-gray-200 text-black px-4 py-2 rounded-2xl border w-full text-center border-[#cdcdcd]">Add Officials</Link>
                            <Link href="/a/student" className="mt-2 bg-gray-200 text-black px-4 ml-2 py-2 rounded-2xl border w-full text-center border-[#cdcdcd]">View Officials</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}