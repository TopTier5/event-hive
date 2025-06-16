import login from "../assets/images/login.png";
import google from "../assets/images/google-icon.png";

export default function Login() {
    return (
        <div className="bg-gray-200 min-h-screen py-40">
            <div className="container mx-auto">
                <div className="flex flex-row w-8/12 bg-gray-100 rounded-md mx-auto overflow-x-hidden">
                    <div className="w-1/2 py-16 px-12">
                        <p className="text-center font-bold">Event <span className="text-[#005DB5]">Hive</span></p>
                        <h2 className="text-center text-xl font-bold mt-12 mb-10 ml-10">Sign In to Event Hive</h2>
                        <form action="#" className="">
                            <label className="block uppercase text-xs mb-2">Your Email</label>
                            <input type="email" placeholder="Enter your name" required className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-sm px-2 py-1 mb-6" />
                            <div className="flex flex-row justify-between">
                                <label className="block uppercase text-xs mb-2">Password</label>
                                <label className="block  text-xs mb-2 text-gray-500 mr-1">Forgot your password?</label>
                            </div>
                            
                            <input type="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder="Enter your password" className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-sm px-2 py-1 mb-6" />


                            <button type="submit" className="border border-gray-100 rounded-md text-white text-sm px-2 py-1 w-1/2 mt-6 ml-20 bg-[#7848F4]">Sign Up</button>
                            <p className="mt-6 text-center">Or</p>
                            <div className="flex flex-row border border-gray-100 rounded-md bg-white text-gray-700 text-sm px-5 py-1 w-2/3 mt-6 ml-12">
                                <img src={google} className="h-4 w-4 text-center ml-7" />
                                <p className="text-center text-xs ml-2 mr-2">Sign up with Google</p>

                            </div>
                        </form>
                    </div>
                    
                      <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${(login)})` }}>
                        <div className="flex flex-col text-white">
                            <h1 className="text-center mt-65 mb-6 text-2xl font-bold">Hello Friend</h1>
                            <p className="text-xs text-center mb-8">To keep connected with us provide us with your information </p>
                            <button type="submit" className="block border border-[#B4B9C2] rounded text-white text-sm py-1 w-20 h-8 bg-[#B4B9C2] whitespace-nowrap ml-43 text-center">Sign Up</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

