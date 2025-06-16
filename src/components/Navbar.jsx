import { Link } from "react-router";


export default function Navbar() {
    return (
        <nav className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-4 gap-4 sm:gap-0">
            <h1 className="font-bold text-heading text-center sm:text-left">
                <span>Event</span>
                <span className="text-primary"> Hive</span>
            </h1>

            <div className="flex justify-center sm:justify-end gap-4 sm:gap-10">
                <button className="text-black">
                    <Link to="/login">
                        Login
                    </Link>
                </button>
                <button className="bg-primary rounded-md py-2 px-6 text-white">
                    <Link to="/register">
                        Signup
                    </Link>
                </button>
            </div>
        </nav>
    );
}