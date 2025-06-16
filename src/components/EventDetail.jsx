import { MapPin } from "lucide-react";


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
                        Dream world wide <br />in Jakarta
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
                <p className="text-body-text">Weekdays hour  <span className="text-sub-heading text-[#7848F4]
                font-bold">7PM-10PM</span></p>
                <p className="text-body-text">Sunday hour  <span className="text-sub-heading text-[#7848F4]
                font-bold">7PM-10PM</span></p>
                </div>
                <div>
                    <h1 className="text-heading mt-6 ml-25">Organizer Contact</h1>
                    <p className="ml-25 mt-4">Please go to www.sneakypeeks.com and refer the FAQ section for more detail</p>
                    </div>
                </div>
                <div className="flex-1 ml-25 ">
                    <h1 className="mt-10 text-heading">Event Location</h1>
                    <div className="border w-95 h-70 mt-5"><img src="/assets/images/png" /> </div>
                </div>
            </section>
        </>
    );
}