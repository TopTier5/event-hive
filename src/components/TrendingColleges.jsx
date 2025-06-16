import CollegeCard from "./CollegeCard";
import harvard from "../assets/images/harvard.jpg"
import standford from "../assets/images/standford.jpg"
import nanyang from "../assets/images/nanyang.jpg"

export default function TrendingColleges() {
  return (
    <section className="w-[90%] mx-auto mt-30 bg-[#f8f8fa] py-6 px-4 sm:px-5">
      <h1 className="mb-8 text-3xl font-bold text-center sm:text-left">
        <span className="text-black">Trending</span>{" "}
        <span className="text-[#7748f2]">colleges</span>
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CollegeCard
          image={harvard}
          name="Harvard University"
          location="Cambridge, Massachusetts, UK"
        />

        <CollegeCard
          image={standford}
          name="Stanford University"
          location="Stanford, California"
        />

        <CollegeCard
          image={nanyang}
          name="Nanyang University"
          location="Nanyang Ave, Singapura"
        />
      </div>

      {/* Load More Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-[#7848f4] rounded-md px-7 py-3 text-white">
          Load more...
        </button>
      </div>
    </section>

  );
}