"use client";
import { useState } from 'react';
import Link from "next/link";
import NavBar from "@/components/NavBar";
import DialogModal from "@/components/DialogModal";

export default function ForgotPasswordRequest() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleRequestOTP = async (e) => {
        e.preventDefault();

        fetch('/api/request-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                setTitle("OTP Sent");
                setModalMessage("OTP sent to your email.");
                setButtonLabel("OK");
                openModal();
            } else {
                setTitle("Error");
                setModalMessage("Failed to send OTP. Please try again.");
                setButtonLabel("Try Again");
                openModal();
            }
        })
        .catch(error => {
            setTitle("Error");
            setModalMessage("Error sending OTP.");
            setButtonLabel("Close");
            openModal();
        });
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
                        <form onSubmit={handleRequestOTP} className="space-y-6">
                            <div>
                                <label className="block text-md font-medium leading-6 text-black">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block bg-white text-lg w-full rounded-md py-2 px-2 text-black shadow-sm ring-1 ring-inset placeholder:text-gray-500 sm:text-md sm:leading-6 !outline-none"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Send OTP"
                                    className="w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer"
                                />
                            </div>
                            <div className="text-center text-sm mt-4">
                                Remembered your password? <Link href="/auth/login" className="text-[#000000] hover:underline italic">Sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <DialogModal
                isOpen={isOpen}
                closeModal={closeModal}
                title={title}
                message={modalMessage}
                buttonLabel={buttonLabel}
            />
        </>
    );
}
