import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";
import banner from "../assets/images/banner.png";
import { Link } from "react-router";
import spotify from "../assets/images/spotify.png";
import google from "../assets/images/google.png";
import stripe from "../assets/images/stripe.png";
import youtube from "../assets/images/youtube.png";
import microsoft from "../assets/images/microsoft.png";
import medium from "../assets/images/medium.png";
import zoom from "../assets/images/zoom.png";
import uber from "../assets/images/uber.png";
import grab from "../assets/images/grab.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithFilter />
      <UpcomingEvents />
      <section className="bg-[#f8f8fa]">
       
        <div className="bg-indigo-900 w-full px-6 flex flex-col md:flex-row items-center justify-center mt-16">
          <div className="flex flex-col md:flex-row items-center max-w-6xl w-full overflow-hidden px-4 md:px-10 py-10 gap-10">

      
            <div className="flex-shrink-0">
              <img
                src={banner}
                alt="Event"
                className="w-[250px] md:w-[300px] h-auto object-contain mx-auto md:mx-0"
              />
            </div>

            
            <div className="text-center md:text-left md:ml-20">
              <h2 className="text-2xl text-white font-bold mb-2">Make your own Event</h2>
              <p className="text-sm text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur <br className="hidden md:block" /> adipiscing elit.
              </p>
              <button className="bg-[#7848f4] text-white text-sm px-10 py-3 rounded-md shadow-md">
                <Link to="/create-event">Create Events</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <div className="text-center mt-20 px-4">
        <h2 className="text-2xl font-bold">
          Join these <span className="text-[#7848f4]">brands</span>
        </h2>
        <p className="font-semibold mt-4">
          We've had the pleasure of working with industry-defining brands. These are <br className="hidden md:block" />
          just some of them
        </p>

       
        <div className="mt-20 flex flex-wrap justify-center gap-x-5 gap-y-10">
          <div className="w-[198px] px-5">
            <img src={spotify} alt="spotify logo" />
          </div>
          <div className="w-[198px] px-5">
            <img src={google} alt="google logo" />
          </div>
          <div className="w-[198px] px-5">
            <img src={stripe} alt="stripe logo" />
          </div>
          <div className="w-[198px] px-5">
            <img src={youtube} alt="youtube logo" />
          </div>
          <div className="w-[200px] px-5">
            <img src={microsoft} alt="microsoft logo" />
          </div>
        </div>

        
        <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-10">
          <div className="w-[200px] px-5">
            <img src={medium} alt="medium logo" />
          </div>
          <div className="w-[250px] px-5">
            <img src={zoom} alt="zoom logo" />
          </div>
          <div className="w-[200px] px-5">
            <img src={uber} alt="uber logo" />
          </div>
          <div className="w-[200px] px-5">
            <img src={grab} alt="grab logo" />
          </div>
        </div>
      </div>
      <TrendingColleges />
      <OurBlogs />
      <Footer />
    </>
  );
}