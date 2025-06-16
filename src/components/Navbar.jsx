import { Link } from "react-router";


export default function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-4">
            <h1 className="font-bold text-heading">
                <span>Event</span>
                <span className="text-primary"> Hive</span>
            </h1>
            <div className="flex justify-center gap-10 mr-10">
                <button className="text-black"><Link to="/login">
                 Login
                </Link>
                   
                    </button>
                <button className="bg-primary rounded-md py-3 px-10 text-white"><Link to="/register">
                Signup
                 </Link></button>
            </div>
        </nav>
    );
}