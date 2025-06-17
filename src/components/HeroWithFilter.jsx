import { Search } from "lucide-react";

export default function HeroWithFilter() {
    return (
        <section className="bg-[url('./assets/images/hero.png')] bg-cover bg-center bg-no-repeat min-h-[596px] w-[95%] mx-auto relative rounded-md bg-[#f8f8fa]">
  <h1 className="text-big-heading font-bold text-white w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto text-center pt-24 px-4">
    MADE FOR THOSE <br /> WHO DO
  </h1>

  <form className="bg-navy-blue w-[90%] mx-auto py-6 px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 rounded-md absolute -bottom-20 left-1/2 transform -translate-x-1/2">
    
    <div className="flex flex-col w-full lg:w-[30%]">
      <label className="text-white mb-1" htmlFor="type">Looking for</label>
      <select name="type" id="type" className="bg-white p-2 rounded-md">
        <option selected disabled>Choose event type</option>
        <option value="drama">Drama</option>
        <option value="tech">Tech</option>
      </select>
    </div>

    <div className="flex flex-col w-full lg:w-[30%]">
      <label className="text-white mb-1" htmlFor="location">Location</label>
      <select name="location" id="location" className="bg-white p-2 rounded-md">
        <option selected disabled>Choose location</option>
        <option value="accra">Accra</option>
        <option value="kumasi">Kumasi</option>
      </select>
    </div>

    <div className="flex flex-col w-full lg:w-[30%]">
      <label className="text-white mb-1" htmlFor="when">When</label>
      <input type="datetime-local" name="when" id="when" className="bg-white p-2 rounded-md" />
    </div>

    <div className="bg-primary text-white w-[60px] h-[60px] flex justify-center items-center rounded-md self-center">
      <Search />
    </div>
  </form>
</section>
    );
}