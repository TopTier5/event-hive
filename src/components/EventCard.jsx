import { imageBaseURL } from "../api/client";
import { Link } from "react-router";

export default function EventCard({event}) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 py-6">
            <div className="rounded-md overflow-hidden relative">
                <img src={event.image}
            alt="Event Card" className="px-4 py-2 rounded-md" />
            <span className="absolute top-3 left-7 mt-3 text-[#7848f4] bg-white rounded px-2 py-1 text-sm font-semibold">FREE</span>

            <Link to={`/view-event?id=${event.id}`} className="text-sm font-semibold px-4">{event.title}
            </Link>
            <h2 className="text-[#7848f4] px-4 py-4">Saturday, March 18, 9.30PM</h2>
            <h3 className="text-gray-500 px-4">ONLINE EVENT - Attend anywhere</h3>
            </div>
            
        </div>
    );
}