import { imageBaseURL } from "../api/client";



export default function CollegeCard({college}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative group">

      <div className="relative h-80">
        <img
          src={`${imageBaseURL}/${college.image}`}
          alt={college.name}
          className="w-full h-full object-cover"
        />
       
        <span className="absolute top-60 left-3 bg-white text-black text-xs font-medium px-5 py-3 rounded-full shadow">
          ⭐ 4.8
        </span>
       
        <span className="absolute top-60 right-3 bg-black text-white text-xs font-medium px-5 py-3 rounded-full">
          EXCLUSIVE
        </span>
      </div>

      
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black mb-10">{college.name}</h2>
        <p className="text-sm text-gray-500">{college.address}</p>
      </div>

     
      <div className="absolute bottom-3 right-3 bg-[#f2f2f2] rounded-full px-2 text-gray-400 cursor-pointer">
        <span className="text-xl font-bold">⋯</span>
      </div>
    </div>
  );
}