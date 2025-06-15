import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import MakeEvent from "../components/MakeEvent";
import Brands from "../components/Brands";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroWithFilter />
            <UpcomingEvents />
            <MakeEvent />
            <Brands />
            <TrendingColleges />
            <OurBlogs />
            <Footer />
        </>
    );
}