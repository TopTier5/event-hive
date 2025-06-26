import { MapPin } from "lucide-react";
import map from "../assets/images/map.png"
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { useSearchParams } from "react-router";
import useSWR from "swr";
import { apiFetcher, imageBaseURL } from "../api/client";
import { useEffect } from "react";

export default function EventDetail() {
  const [searchParams] =useSearchParams()
  const id = searchParams.get("id")  

  const  {data, isLoading, error} = useSWR(`/events/${id}`, apiFetcher);

  useEffect(() => {
    scrollTo(0,0)
  }, [id]);

  if (isLoading ) {
    return(
      <div>
        <p>loading event detail...</p>
      </div>
    );
  }

  if (error) {
      return(
        <div>
          <p>something went wrong</p>
        </div>
      );
      
    }




  return (
    <>
      <section style={{ backgroundImage: `url(${imageBaseURL}/${data.data.image})` }} 
      className=" bg-cover w-full relative p-10">
        {/* linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(19,19,21,0.5)] to-[rgba(19,19,21,0.5)]" />
        <div className="relative z-10 max-w-7xl mx-auto p-4 flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="text-white max-w-xl mb-10 lg:mb-0">
             <Link to="/">
            <button className="bg-[#7848F4] text-white px-4 py-2 rounded-md mt-10 cursor-pointer">
              Back
            </button>
            </Link>
            {/* page description */}
            <h1 className="text-4xl sm:text-5xl font-bold mt-20">
             {data.data.title}<br /> in {data.data.venue}
            </h1>
            <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">
              {data.data.college.name}
            </h2>
            <p className="mt-8 text-base sm:text-lg">
              {data.data.description}     </p>
            <h3 className="flex items-center mt-6">
              <MapPin className="mr-2" size={20} /> View map
            </h3>
          </div>
          {/* side border */}
          <div className="p-6 bg-white rounded-md shadow-md w-full max-w-xs lg:max-w-none lg:w-1/3">
            <h1 className="text-black font-bold mb-4">
              Date & Time
            </h1>
            <p className="text-gray-600 mb-4">
             {data.data.start}
            </p>
            <p className="text-[#7848F4] mb-4">
              Add to calendar
            </p>
            <button className="w-full py-2 mb-4 bg-[#7848F4] text-gray-100 font-semibold rounded-md">
              Book now
            </button>
            <button className="w-full py-2 mb-4 bg-gray-400 text-gray-100 font-semibold rounded-md">
              Program Promoter
            </button>
            <p className="text-gray-600 text-center text-sm">
              No Refunds
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row p-6 lg:p-10 gap-10">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mt-6 lg:mt-10 mb-4">
            Description
          </h1>
          <div className="mb-6">
            <p className="text-gray-600">
             {data.data.description}
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">
              Hours
            </h1>
            <p className="text-gray-600">
              Weekdays hour <span className="text-[#7848F4] font-bold ml-2">7PM-10PM</span>
            </p>
            <p className="text-gray-600">
              Sunday hour <span className="text-[#7848F4] font-bold ml-2">7PM-10PM</span>
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">
              Organizer Contact
            </h1>
            <p className="text-gray-600">
              Please go to <span className="text-[#7848F4] font-semibold">www.sneakypeeks.com</span> and refer the FAQ section for more details.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold mt-6 lg:mt-10 mb-4">
            Event Location
          </h1>
          <div className="mb-6">
            <img src={map} alt="Event Location" className="w-1/2 h-auto ml-0 object-contain mx-auto" />
          </div>
          <div className="mb-6">
            <h1 className="text-2xl mb-2">
              {data.data.title} in {data.data.venue}
            </h1>
            <p className="text-gray-600">
              Dummy location generation model by RSU … Our approach generates more realistic dummy locations.
            </p>
          </div>
          <div className="mb-6">
            <h1 className="font-semibold mb-2">
              Tags
            </h1>
            <div className="flex flex-wrap gap-2">
              {data.data.tags.map( (tag,index) => {
                return (
                   <span key={index} className="px-2 py-1 bg-gray-200 rounded-md text-sm">
                {tag}
              </span>
                );

              })}

            </div>
          </div>

          <div>
            <h1 className="font-semibold mb-2">
              Share with friends
            </h1>
            <div className="flex items-center gap-5">
              <span className="bg-[#0572e6] p-1 rounded-md">
                <Facebook size={24} color="#FFFFFF" />
              </span>
              <span className="bg-[#1265bf] p-1 rounded-md">
                <Linkedin size={24} color="#FFFFFF" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}