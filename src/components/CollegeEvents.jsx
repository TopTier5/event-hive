import EventCard from "./EventCard";
import viewevent from "../assets/images/viewevent.jpg";





export default function CollegeEvents() {

  const events = [
  {
    id: 1,
    image: viewevent,
    title:
      "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 3:30PM",
    location: "ONLINE EVENT - Attend anywhere",
  },
  {
    id: 2,
    image: viewevent,
    title:
      "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 3:30PM",
    location: "ONLINE EVENT - Attend anywhere",
  },
  {
    id: 3,
    image: viewevent,
    title:
      "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 3:30PM",
    location: "ONLINE EVENT - Attend anywhere",
  },
  {
    id: 4,
    image:viewevent,
    title:
      "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 3:30PM",
    location: "ONLINE EVENT - Attend anywhere",
  },
  {
    id: 5,
    image: viewevent,
    title:
      "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 3:30PM",
    location: "ONLINE EVENT - Attend anywhere",
  },
  {
    id: 6,
    image: viewevent,
    title:
      "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 3:30PM",
    location: "ONLINE EVENT - Attend anywhere",
  },
];




   return (
    <div className="min-h-screen bg-gray-50 px-10 py-10">
      <h2 className="text-3xl font-semibold mb-8">
        College <span className="text-[#7848F4]">Events</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}