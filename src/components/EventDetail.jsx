import { MapPin } from "lucide-react";
import map from "../assets/images/map.png"
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

export default function EventDetail() {
    return (
        <>
            <section className="bg-[url(./assets/images/viewevent.jpg)] h-[595px] bg-cover w-[95%] mx-auto relative ">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(19,19,21,0.5)] to-[rgba(19,19,21,0.5)]">
                </div>
                <div>
                    <button className="bg-[#7848F4] relative z-10 text-white ml-16 border border-none rounded-md w-16 h-9 mt-10">Back</button>
                </div>
                <div className="relative z-10 text-white w-[584.54px] top-[70px] left-[60px]">
                    <h1 className="text-5xl font-bold h-full  ">
                        Dream world wide <br />in Jakartra
                    </h1>
                    <h2 className="mt-10 text-big-heading">IIIT Sonepat</h2>
                    <p className="text-body-text mt-8">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
                    </p>
                    <h3 className="flex items-center mt-6"> <MapPin className="mr-2" size={20} />View map</h3>
                </div>
                <div className="border h-20p w-[385px] p-4"></div>
            </section>
            <section className="flex justify-between items-start p-10">
                <div className="flex-1 mr-10">
                <h1 className="ml-25 mt-10 text-heading">Description</h1>
                <div className=" mt-4 pb-0 ml-25 border border-none w-145 h-65 ">
                    <p className="text-gray-600">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement. <br /> <br />

                        DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
                </div>
                <div className="border border-none  h-25 w-53 mt-10 ml-25"><h1 className="text-heading">Hours</h1>
                <p className="text-body-text text-gray-600">Weekdays hour  <span className="text-sub-heading text-[#7848F4]
                font-bold">7PM-10PM</span></p>
                <p className="text-body-text text-gray-600">Sunday hour  <span className="text-sub-heading text-[#7848F4]
                font-bold">7PM-10PM</span></p>
                </div>
                <div>
                    <h1 className="text-heading mt-6 ml-25">Organizer Contact</h1>
                    <p className="ml-25 mt-4 text-gray-600">Please go to <span className="text-[#7848F4]">www.sneakypeeks.com</span> and refer the FAQ section for more detail</p>
                    </div>
                </div>
                <div className="flex-1 ml-25 ">
                    <h1 className="mt-10 text-heading">Event Location</h1>
                    <div className="border border-none w-70 h-70 mt-5">  <img src={map} alt="Event Location" className="w-full 
                    h-full object-contain" /> 
                    </div>
                    <div className=" mt-6 border border-none w-100 h-30">
                        <h1 className="text-2xl">Dream world wide in jakatar</h1> <br />
                        <p className="text-body-text text-gray-600">Dummy location generation model by RSU ... Our approach generates more realistic dummy locations</p>
                    </div>
                    <div className="border border-none w-90 h-25">
                        <h1 className="font-bold">Tags</h1>
                        <h3 className=" text-sm border border-none h-6 w-90 mt-3">Indonesia event <span className="ml-3">Jaskaran event</span> <span className="ml-3">UI</span> <span className="ml-3">Jaksaran event</span></h3> 
                        <h3 className=" text-sm border border-none h-6 w-90 mt-3">Seminar <span className="ml-3">
                         Jaksaran event</span>
                        </h3>   
                    </div>
                    <div className="border mt-5 w-50 h-20">
                        <h1 className="font-bold">Share with friends</h1>
                        <div className="border border-none w-50 h-9 mt-3 flex items-center"> <span className=" bg-[#0572e6] rounded-md"><Facebook size={24} color="#FFFFFF" /></span> <span className="bg-[#1265bf] ml-5 rounded-md"><Linkedin size={24} color="#FFFFFF" /></span></div>
                    </div>
                </div>
            </section>
        </>
    );
}