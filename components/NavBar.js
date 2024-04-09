import Link from "next/link";

export default function NavBar() {

    return (
        <header data-aos="fade-in" className="flex justify-center items-center w-fit ml-auto mr-auto sticky z-40 top-0 mt-4">
            <nav className="w-fit ml-auto mr-auto rounded-3xl h-fit bg-[#202020] backdrop-blur-lg align-middle p-2 relative
            m-0 px-2 z-10 flex items-center flex-col space-y-2 border border-[#373737]">
                {/* Main Navigation */}
                <ul className="flex flex-row justify-center align-middle items-center space-x-4">
                    <Link className="rounded-2xl h-fit bg-[#000000] backdrop:blur-lg flex justify-center items-center align-middle px-2 py-3 text-white cursor-pointer hover:bg-white hover:px-4 hover:text-black hover:shadow-lg w-fit ml-auto mr-auto my-0" href="/">
                        <span className="font-semibold">VC@Amrita</span>
                    </Link>
                    <Link className="rounded-2xl h-fit backdrop:blur-lg flex justify-center items-center align-middle px-2 py-3 text-white cursor-pointer hover:bg-white hover:px-4 hover:text-black hover:shadow-lg w-fit ml-auto mr-auto my-0" href="/auth/login">
                        <span className="font-semibold">Login</span>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
