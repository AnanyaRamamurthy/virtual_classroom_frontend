"use client";

import React, { useEffect, useState } from "react";
import DialogModal from "@/components/DialogModal";
import secureLocalStorage from "react-secure-storage";
import { hashPassword } from "@/components/hashData";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import { FORGOT_PASSWORD_VERIFY_URL } from "@/components/constants";
import validator from 'validator';

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

    useEffect(() => {
        
        const userEmail = secureLocalStorage.getItem("user-email");
        if (!userEmail) {
            router.push("/forgot-password"); 
        }
    }, [router]);

    const handleResetPassword = async (event) => {
        event.preventDefault();
        if (!otp || otp.length !== 6 || !validator.isNumeric(otp)) {
            openModal("Invalid OTP", "Please enter a valid 6-digit OTP.", "Try Again");
            return;
        }
        if (!newPassword || newPassword.length < 8 || newPassword !== confirmPassword) {
            openModal("Password Error", "Passwords must match and be at least 8 characters long.", "Try Again");
            return;
        }

        setIsLoading(true);
        try {
            const hashedOtp = hashPassword(otp);
            const hashedPassword = hashPassword(newPassword);
            const response = await fetch(FORGOT_PASSWORD_VERIFY_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: hashedOtp, newPassword: hashedPassword })
            });

            if (response.ok) {
                secureLocalStorage.removeItem("user-email");
                openModal("Success", "Your password has been reset successfully!", "Login");
                setTimeout(() => router.push('/login'), 2000);
            } else {
                openModal("Error", "Failed to reset password. Please try again.", "Try Again");
            }
        } catch (error) {
            openModal("Network Error", "Unable to connect. Please check your internet connection and try again.", "Try Again");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <main className="flex min-h-screen flex-col justify-center align-middle">
                <div className="max-w-md mx-auto p-8 border rounded-lg shadow-lg">
                    <h1 className="text-center text-2xl font-semibold">Verify OTP</h1>
                    <form onSubmit={handleResetPassword} className="space-y-6 mt-4">
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Reset Password
                        </button>
                    </form>
                </div>
            </main>
            <DialogModal isOpen={isOpen} closeModal={() => setIsOpen(false)} title={title} message={message} buttonLabel={buttonLabel} />
        </>
    );
}
