import Navbar from "../components/Navbar";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { Navigate, useNavigate } from "react-router";


export default function CreateEvent() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useSWR("/colleges", apiFetcher);

    const postEvent = async (data) => {
        try {
            const response = await apiClient.post("/events", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }
            });
            console.log(response.data);
            navigate(`/view-event?id=${response.data.data.id}`);
        } catch (error) {
            console.log(error)
        }
    }

    if(localStorage.getItem("ACCESSTOKEN")){
        return <Navigate to={"/login"}/>
    }

    return (
        <>
            <Navbar />
            <section className="bg-[#F8F8FA] py-10 w-full">
                <form action={postEvent} className="flex flex-col items-center  px-4 sm:px-6 md:px-10">
                    <div>
                        <h1 className="font-bold text-big-heading text-center ">Create Event</h1>
                        <div className="ml-4 sm:ml-6 md:ml-12 lg:ml-38 mt-10 space-y-6 flex flex-col w-1/2">
                            <div>
                                <label htmlFor="Event Title">Select College
                                </label>
                                <select className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3 mb-4 " name="college" id="">
                                    {isLoading ? <option value="">loading...</option> :
                                        error ? <option value="">something went wrong</option> :
                                            data.data.map((college) => {
                                                return <option key={college.id} value={college.id}>{college.name}</option>
                                            })}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Event Title">Event Title
                                </label>
                                <input type="text" name="title" id="email" placeholder="Enter your mail" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3 mb-4 " />
                            </div>
                            <div>
                                <label htmlFor="Event Venue">Event Venue
                                </label>
                                <select name="venue" id="Location" className="bg-white p-2 border border-none rounded-md mt-4 w-full h-14 mb-4 ">
                                     <option selected disabled>Choose event type
                                    </option>
                                    <option value="accra">Accra</option>
                                    <option value="tema">Tema</option>
                                </select>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-1">
                                    <label htmlFor="Start date">Start date
                                    </label>
                                    <input type="datetime-local" name="start" id="date" placeholder="date" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3" />
                                </div> 
                                <div className="flex-1">
                                    <label htmlFor="End date">End date
                                    </label>
                                    <input type="datetime-local" name="end" id="date" placeholder="date" className="bg-white border border-none rounded-md mt-4 w-full h-14 p-3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center p-4">
                            <h1 className="font-bold text-big-heading text-center mt-20 ">Event Description</h1>
                            <div className="flex flex-col space-y-6 w-full max-w-md mx-auto mt-10 p-4">
                                <h1>Event Image</h1>
                                <input type="file" name="image" id="image" accept="image/*" className="border border-none h-60 rounded-md bg-[#ECECEC]" />

                                <h2 className="mt-5">Event Description</h2>
                                <input type="text" name="description" id="text" placeholder="Type here..." className="border border-none bg-white h-40 rounded-md w-full p-3" />

                                <h2 className="mt-5">Event Tags</h2>
                                <select multiple className="border border-none bg-white h-40 rounded-md w-full p-3" name="tags" id="">
                                    <option value="social">Social</option>
                                    <option value="education">Education</option>
                                    <option value="fun-fair">Fun-fair</option>
                                    <option value="business">Business</option>
                                    <option value="party">Party</option>
                                </select>

                                <SubmitButton className="bg-[#7848F4] mt-3 h-10 text-white text-body-text cursor-pointer w-full" title={"Create Event"} />
                            </div>
                        </div>
                    </div>
                </form>

            </section >
        </>
    );
}