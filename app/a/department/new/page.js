"use client";

import DialogModal from "@/components/DialogModal";
import LoadingScreen from "@/components/LoadingScreen";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewDepartmentScreen() {

    // For The AlertDialogModal
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [departmentName, setDepartmentName] = useState("");
    const isValiddepartmentName = departmentName.length > 0;

    const buildDialog = (title, message, buttonLabel) => {
        setTitle(title);
        setMessage(message);
        setButtonLabel(buttonLabel);
    }


    const handleCreateNew = async () => {

    }



    return (<>
        <NavBar />

        {isLoading ? <LoadingScreen /> : (
            <main className="flex min-h-[80vh] flex-1 flex-col justify-center mt-4 md:mt-0">
                <div className="border border-[#cdcdcd] rounded-2xl mx-auto w-11/12 sm:max-w-11/12 md:max-w-md lg:max-w-md backdrop-blur-xl bg-[#f9f9f9] bg-opacity-40 shadow-sm">
                    <div
                        className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[64%] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3c8292] to-[#a9afde] opacity-10"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%, 45.2% 34.5%)',
                            }}
                        />
                    </div>

                    <div className="mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md">
                        <div className='flex flex-row justify-center'>
                            <h1 className='px-4 py-4 w-full text-2xl font-semibold text-center text-black'>Add New Department</h1>
                        </div>
                        <hr className='border-[#cdcdcd] w-full' />
                    </div>


                    <div className="mt-10 mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md px-6 pb-8 lg:px-8 ">
                        <form className="space-y-6" onSubmit={handleCreateNew}>
                            <div>
                                <label className="block text-md font-medium leading-6 text-black">
                                    Department Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        autoComplete="departmentName"
                                        placeholder='Enter Department Name'
                                        onChange={(e) => setDepartmentName(e.target.value.toLowerCase())}
                                        className={"block bg-white text-lg w-full rounded-md py-2 px-2 text-black shadow-sm ring-1 ring-inset placeholder:text-gray-500 sm:text-md sm:leading-6 !outline-none" +
                                            (!isValiddepartmentName && departmentName ? ' ring-[#ffb3b3]' : isValiddepartmentName && departmentName ? ' ring-[#c5feb3]' : ' ring-transparent')}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                {isLoading == false ? <input
                                    value="Add New Department"
                                    type="submit"
                                    disabled={(isValiddepartmentName) ? false : true}
                                    className={"w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer disabled:bg-[#d7d7d7] disabled:cursor-not-allowed disabled:text-[#696969] disabled:border disabled:border-[#c8c8c8] "} /> :
                                    <input
                                        value="Loading..."
                                        type="submit"
                                        disabled={true}
                                        className={"w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer disabled:bg-[#d7d7d7]  disabled:text-[#696969] disabled:cursor-not-allowed disabled:border disabled:border-[#c8c8c8]"} />
                                }
                            </div>



                        </form>
                    </div>


                </div>
            </main>
        )}

        < DialogModal
            isOpen={isOpen}
            closeModal={closeModal}
            title={title}
            message={message}
            buttonLabel={buttonLabel}
        />
    </>
    );
}