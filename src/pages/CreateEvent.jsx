import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-[#F8F8FA]">
                <h1 className="font-bold text-big-heading flex justify-center">Create Event</h1>
                <div className="ml-4 sm:ml-6 md:ml-12 lg:ml-38 mt-10 space-y-6 flex flex-col w-1/2">
                    <div>
                        <label htmlFor="Event Title">Event Title
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your mail" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3 mb-4 " />
                    </div>
                    <div>
                        <label htmlFor="Event Venue">Event Venue
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your mail" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3 mb-4" />
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <label htmlFor="Start time">Start time
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your mail" className="bg-white border border-none mt-4 w-full h-14 p-3 mb-4 rounded-md" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="End time">End time
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your mail" className="bg-white border border-none rounded-md
                 mt-4 w-full h-14 p-3 "  />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <label htmlFor="Start date">Start date
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your mail" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3"  />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="End date">End date
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your mail" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3"  />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}