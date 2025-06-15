import BlogCard from "./BlogCard";

export default function OurBlogs() {
    return (
        <section className="mt-20 w-[90%] mx-auto bg-[#f8f8fa] px-5 py-6">
            <h1 className="mb-4">
                <span className="text-black font-bold text-2xl ">Our</span>
                <span className="text-[#7848fa] font-bold text-2xl px-1">Blogs</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <BlogCard key={n} />)}
            </div>
        </section>
    );
}