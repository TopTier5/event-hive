import EventCard from "./EventCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { BeatLoader } from "react-spinners";


export default function UpcomingEvents() {

  const {data, isLoading, error} = useSWR("/events?limit=6",apiFetcher);

  if (isLoading) {
    return(
    <div>
        <BeatLoader size={100} />
    </div>
    );
  }

  if (error) {
    return (
      <div>something went wrong</div>
    );
  }






    return (
       <section className="mt-30 w-[90%] mx-auto bg-[#f8f8fa]">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6 px-4">
    <h2 className="text-2xl font-bold">
      Upcoming<span className="text-[#7646f2] px-1">Events</span>
    </h2>

    <div className="flex flex-wrap gap-4">
      <select className="bg-[#f1f2f5] text-sm px-5 py-2 rounded-md shadow-sm text-gray-700">
        <option value="">Weekdays</option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
      </select>

      <select className="bg-[#f1f2f5] text-sm px-5 py-2 rounded-md shadow-sm text-gray-700">
        <option value="">Events</option>
        <option value="concerts">Concerts</option>
        <option value="festival">Festival</option>
        <option value="online event">Online Event</option>
      </select>

      <select className="bg-[#f1f2f5] text-sm px-5 py-2 rounded-md shadow-sm text-gray-700">
        <option value="">Any Category</option>
        <option value="education">Education</option>
        <option value="technology">Technology</option>
        <option value="health">Health</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-6">
    {data.data.map((event) => (<EventCard key={event.id} event={event}
     />))}
  </div>

  
  <div className="flex justify-center py-8">
    <button className="bg-[#7848f4] rounded-md px-6 py-3 text-white hover:bg-[#6633cc] transition">
      Load more...
    </button>
  </div>
</section>
    );
}