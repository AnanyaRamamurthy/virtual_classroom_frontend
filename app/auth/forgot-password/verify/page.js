"use client";

import React, { useEffect, useState } from "react";
import DialogModal from "@/components/DialogModal";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function FPVerifyScreen() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const openModal = (title, message, button) => {
        setTitle(title);
        setMessage(message);
        setButtonLabel(button);
        setIsOpen(true);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <NavBar />
            <main className="flex min-h-[80vh] flex-1 flex-col justify-center mt-4 md:mt-0">
                <div className="border border-[#cdcdcd] rounded-2xl mx-auto w-11/12 sm:max-w-11/12 md:max-w-md lg:max-w-md backdrop-blur-xl bg-[#f9f9f9] bg-opacity-40 shadow-sm">
                    <div className="mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md">
                        <div className='flex flex-row justify-center'>
                            <h1 className='px-4 py-4 w-full text-2xl font-semibold text-center text-black'>Reset Password</h1>
                        </div>
                        <hr className='border-[#cdcdcd] w-full' />
                    </div>
                    <div className="mt-10 mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md px-6 pb-8 lg:px-8">
                        <form onSubmit={handleResetPassword} className="space-y-6">
                            <div>
                                <label className="block text-md font-medium leading-6 text-black">
                                    OTP
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        required
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="block bg-white text-lg w-full rounded-md py-2 px-2 text-black shadow-sm ring-1 ring-inset placeholder:text-gray-500 sm:text-md sm:leading-6 !outline-none"
                                        placeholder="Enter the OTP"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-md font-medium leading-6 text-black">
                                    New Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        required
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="block bg-white text-lg w-full rounded-md py-2 px-2 text-black shadow-sm ring-1 ring-inset placeholder:text-gray-500 sm:text-md sm:leading-6 !outline-none"
                                        placeholder="Enter new password"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-md font-medium leading-6 text-black">
                                    Confirm Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        required
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="block bg-white text-lg w-full rounded-md py-2 px-2 text-black shadow-sm ring-1 ring-inset placeholder:text-gray-500 sm:text-md sm:leading-6 !outline-none"
                                        placeholder="Enter new password again"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    disabled={true}
                                    value="Verify and Reset"
                                    className="w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <DialogModal
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                title={title}
                message={message}
                buttonLabel={buttonLabel}
            />
        </>
    );
}
