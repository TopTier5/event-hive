import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-blue py-6 text-white mt-20">
            <h1 className="flex justify-center text-2xl mb-5 text-center">
                <span className="font-bold">Event</span>
                <span className="text-primary font-bold px-2">Hive</span>
            </h1>

            <form className="flex flex-col sm:flex-row justify-center gap-4 mb-3 mt-2 px-4">
                <input
                    className="bg-white rounded-md text-black px-5 py-2 w-full sm:w-auto"
                    type="email"
                    placeholder="Enter your mail"
                    name="email"
                />
                <button className="bg-primary rounded-md py-3 px-8" type="submit">
                    Subscribe
                </button>
            </form>

            <div className="flex flex-wrap justify-center gap-6 py-4 text-sm px-4">
                <span>Home</span>
                <span>About</span>
                <span>Service</span>
                <span>Get in Touch</span>
                <span>FAQs</span>
            </div>

            <hr className="w-[94%] mx-auto border-gray-300" />

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-6 py-4 text-sm text-center">

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="hover:bg-primary hover:rounded-lg px-4 py-2 transition">English</button>
                    <button className="hover:bg-primary hover:rounded-lg px-4 py-2 transition">French</button>
                    <button className="hover:bg-primary hover:rounded-lg px-4 py-2 transition">Hindi</button>
                </div>


                <div className="flex gap-4 justify-center">
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                </div>

                <p className="text-xs text-gray-300 mt-2 lg:mt-0">
                    Non Copyrighted &copy; 2023 Upload by EventHive.
                </p>
            </div>
        </footer>
    );
}