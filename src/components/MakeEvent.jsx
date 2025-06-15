import banner from "../assets/images/banner.png";


export default function MakeEvent () {
    return (

      <section className="bg-[#f8f8fa]">
          <div className="bg-indigo-900 w-full px-6 flex items-center justify-center mt-16">
      <div className="flex items-center max-w-6xl w-full overflow-hidden px-10 relative">

       
        <div className="">
          <img
            src={banner}
            alt="Event"
            className="w-[300px] h-auto object-contain"
          />
        </div>

        
        <div className="ml-20">
          <h2 className="text-2xl text-white font-bold mb-2">Make your own Event</h2>
          <p className="text-sm text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
          <button className="bg-[#7848f4] text-white text-sm px-10 py-3 rounded-md shadow-md">
            Create Events
          </button>
        </div>
      </div>
    </div>
      </section>


    )
}