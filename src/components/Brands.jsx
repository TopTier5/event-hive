import spotify from "../assets/images/spotify.png"
import google from "../assets/images/google.png"
import stripe from "../assets/images/stripe.png"
import youtube from "../assets/images/youtube.png"
import microsoft from "../assets/images/microsoft.png"
import medium from "../assets/images/medium.png"
import zoom from "../assets/images/zoom.png"
import uber from "../assets/images/uber.png"
import grab from "../assets/images/grab.png"


export default function Brands () {
    return (
        <div className="text-center mt-20">
           <h2 className="text-2xl font-bold">Join these <span className="text-[#7848f4] ">brands</span></h2> 
           <p className="font-semibold mt-4">We've had the pleasure of working with industry-defining brands. These are <br /> 
           just some of them
            
           </p>

           <div className="mt-20 flex justify-center">
            <div className="w-[198px] px-5">
                <img src={spotify} alt="spotify logo"  className=""/>
            </div>
            <div className="w-[198px] px-5">
                <img src={google} alt="google logo"  className=""/>
            </div>
            <div className="w-[198px] px-5">
                <img src={stripe} alt="stripe logo"  className=""/>
            </div>
            <div className="w-[198px] px-5">
                <img src={youtube} alt="youtube logo"  className=""/>
            </div>
            <div className="w-[200px] px-5">
                <img src={microsoft} alt="microsoft logo"  className=""/>
            </div>

           </div>

           <div className="mt-1 flex justify-center">
            <div className="w-[200px]">
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
    )
}