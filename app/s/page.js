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


                
            </main>
        </>
    );
}