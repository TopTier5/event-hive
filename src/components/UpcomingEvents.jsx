import EventCard from "./EventCard";

export default function UpcomingEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto bg-[#f8f8fa]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6">
                <h2 className="text-2xl font-bold ml-7">
                    Upcoming
                    <span className="text-[#7646f2] px-1">Events</span>
                </h2>

                <div className="flex flex-wrap gap-6">
                    <select className="bg-[#f1f2f5] text-sm px-7 py-2 rounded-md shadow-sm text-gray-700">
                        <option value="">Weekdays</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option> 
                    </select>

                    <select className="bg-[#f1f2f5] text-sm px-7 py-2 rounded-md shadow-sm text-gray-700">
                        <option value="">Events</option>
                    <option value="concerts">Concerts</option>
                    <option value="festival">Festival</option> 
                    <option value="online event">Online Event</option> 
                    </select>

                    <select className="bg-[#f1f2f5] text-sm px-7 py-2 rounded-md shadow-sm text-gray-700">
                        <option value="">Any Category</option>
                    <option value="education">Education</option>
                    <option value="technology">Technology</option> 
                    <option value="health">Health</option> 
                    </select>

                </div>
            </div>

            
             <div className="grid grid-cols-3 gap-6 px-5 py-4">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>   


            <div className="flex justify-center py-8">
                <button className="bg-[#7848f4] rounded-md px-7 py-3 text-white">Load more...</button>
            </div>
        </section>
    );
}