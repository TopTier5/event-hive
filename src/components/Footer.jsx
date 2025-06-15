import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-blue py-6 text-white mt-20">
            <h1 className="flex justify-center text-2xl mb-5"><span className="font-bold">Event</span>
                <span className="text-primary font-bold px-2"> Hive</span></h1>
            <form className="flex justify-center gap-4 mb-3 mt-2">
                <input className="bg-white rounded-md text-black gap-4 px-10" type="email" placeholder="Enter your mail" name="email" />
                <button className="bg-primary rounded-md py-3 px-8" type="submit">Subscribe</button>
            </form>
            <div className="flex justify-center gap-10 py-4">
                <span>Home</span>
                <span>About</span>
                <span>Service</span>
                <span>Get in Touch</span>
                <span>FAQs</span>
            </div>
            <hr className="w-[94%] mx-auto" />
            <div className="flex place-content-between gap-64 py-4">
                <div className="flex gap-6">
                    <button>English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex flex-row gap-5 px-5">
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                </div>
                <p>Noncopyrighted &copy;2025 Upload by EventHive</p>
            </div>
        </footer>
    );
}