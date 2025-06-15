export default function BlogCard() {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 py-6">
            <div className="rounded-md overflow-hidden relative">
                <img src={'https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                alt="Event Card" className="px-4 py-2 rounded-md" />
          
          <span className="absolute top-3 left-7 mt-3 text-[#7848f4] bg-white rounded px-2 py-1 text-sm font-semibold">FREE</span>
           <h1 className="text-sm font-semibold px-4">BestSelller Book Bootcamp -write, Market & <br /> 
            Publish Your Book -Lucknow</h1>
            
            <h2 className="text-[#7848f4] px-4 py-4">Saturday, March 18, 9.30PM</h2>
            <h3 className="text-gray-500 px-4">ONLINE EVENT - Attend anywhere</h3>
            </div>
            
        </div>
    );
}