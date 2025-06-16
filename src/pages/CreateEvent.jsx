import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-[#F8F8FA]">
                <div>
                    <h1 className="font-bold text-big-heading text-center ">Create Event</h1>
                    <div className="ml-4 sm:ml-6 md:ml-12 lg:ml-38 mt-10 space-y-6 flex flex-col w-1/2">
                        <div>
                            <label htmlFor="Event Title">Event Title
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your mail" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3 mb-4 " />
                        </div>
                        <div>
                            <label htmlFor="Event Venue">Event Venue
                            </label>
                            <select name="location" id="Location" className="bg-white p-2 border border-none rounded-md mt-4 w-full h-14 mb-4 ">
                                <option selected disabled>Choose event type
                                </option>
                                <option value="accra">Accra</option>
                                <option value="tema">Tema</option>
                            </select>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-1">
                                <label htmlFor="Start time">Start time
                                </label>
                                <input type="time" name="time" id="time" placeholder="Select time" className="bg-white border border-none mt-4 w-full h-14 p-3 mb-4 rounded-md" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="End time">End time
                                </label>
                                <input type="time" name="ime" id="time" placeholder="time" className="bg-white border border-none rounded-md
                 mt-4 w-full h-14 p-3 "  />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-1">
                                <label htmlFor="Start date">Start date
                                </label>
                                <input type="date" name="date" id="date" placeholder="date" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="End date">End date
                                </label>
                                <input type="date" name="date" id="date" placeholder="date" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-big-heading text-center mt-20 ">Event Description</h1>
                    <div className="ml-4 sm:ml-6 md:ml-12 lg:ml-38 mt-10 space-y-6 flex flex-col w-1/2">
                   <h1>Event Image</h1>
                    <input type="file" name="image" id="image" accept="image/*"  className="border border-none h-60 rounded-md bg-[#ECECEC]" />
                   
                    <h2 className="mt-5">Event Description</h2>
                    <input type="text" name="text" id="text" placeholder="Type here..." className="border border-none bg-white h-40 rounded-md" />

                    <button className="bg-[#7848F4] mt-3 h-10 text-white text-body-text cursor-pointer">Create Event</button>
                     </div>
                </div>
            </section >
        </>
    );
}