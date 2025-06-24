import CollegeCard from "./CollegeCard";
import harvard from "../assets/images/harvard.jpg"
import standford from "../assets/images/standford.jpg"
import nanyang from "../assets/images/nanyang.jpg"
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { ClipLoader } from "react-spinners";

export default function TrendingColleges() {
  const { data, error, isLoading } = useSWR("/colleges?limit=3&skip=2", apiFetcher);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <ClipLoader size={100} />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-center text-xl">something went wrong</p>
      </div>
    );
  }


  return (
    <section className="w-[90%] mx-auto mt-30 bg-[#f8f8fa] py-6 px-4 sm:px-5">
      <h1 className="mb-8 text-3xl font-bold text-center sm:text-left">
        <span className="text-black">Trending</span>{" "}
        <span className="text-[#7748f2]">colleges</span>
      </h1>


      <div className="grid grid-col(s-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((college) =>
          <CollegeCard
            key={college.id}
            college={college}
          />
        )}
      </div>


      <div className="mt-10 flex justify-center">
        <button className="bg-[#7848f4] rounded-md px-7 py-3 text-white">
          Load more...
        </button>
      </div>
    </section>

  );
}