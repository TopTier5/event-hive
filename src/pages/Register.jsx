
import register from "../assets/images/register.png";
import google from "../assets/images/google-icon.png";
import SubmitButton from "../components/SubmitButton.jsx";
import { apiClient } from "../api/client.js";
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const resgiterUser = async (data) => {
        try {
            const response = await apiClient.post("/users/register", data, {
                headers: {
                   "Content-Type": "application/json",

                }
            });
            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className="bg-gray-200 h-screen">
            {/* <div className="container mx-auto"> */}
            <div className="flex flex-row w-full bg-gray-100 rounded-md h-full">
                <div className="w-1/2 bg-cover h-full" style={{ backgroundImage: `url(${(register)})` }}>
                    <div className="flex flex-col justify-center text-white h-full">
                        <h1 className="text-center mt-6 mb-6 text-4xl font-bold">Welcome back</h1>
                        <p className="text-2xl text-center mb-8">To keep connected with us provide us with your information </p>
                        <button type="submit" className="block border border-[#B4B9C2] rounded text-white text-md py-1 px-2 w-20 h-8 bg-[#B4B9C2] whitespace-nowrap ml-70 text-center">Sign In</button>
                    </div>

                </div>

                <div className="w-1/2 px-12 h-full">
                    <p className="text-center text-2xl font-bold mt-8">Event <span className="text-[#005DB5]">Hive</span></p>
                    <h2 className="text-center text-4xl font-bold mt-10 mb-2 ml-10">Sign Up to Event Hive</h2>
                    <form action={resgiterUser}>
                        <label className="block uppercase text-md mb-2">Your Name</label>
                        <input type="text" name="name" placeholder="Enter your name" required className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-md px-4 py-2 mb-8" />

                        <label className="blockn uppercase text-md">Email</label>
                        <input type="email" name="email" placeholder="Enter your name" required className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-md px-4 py-2 mt-2 mb-8" />

                        <label className="block uppercase text-md mb-2">Password</label>
                        <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder="Enter your password" className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-md px-4 py-2 mb-8" />

                        {/* <label className="block uppercase text-md mb-2">Confirm Password</label>
                        <input type="password" placeholder="Enter your password" minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" required className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-md px-4 py-2 mb-8 " /> */}

                        <SubmitButton
                            className="border border-gray-100 rounded-md text-white text-sm px-2 py-3 w-2/4 mt-6 ml-33 bg-[#7848F4]"
                            title={"Sign Up"} />


                        <p className="mt-6 text-center">Or</p>
                        <div className="flex flex-row border border-gray-100 rounded-md bg-white text-gray-700 text-sm px-6 py-3 w-2/3 mt-6 ml-20 mb-10">
                            <img src={google} className="h-6 w-6 text-center ml-15" />
                            <p className="text-center text-lg ml-4 mr-2">Sign up with Google</p>

                        </div>
                    </form>
                </div>
            </div>


            {/* </div> */}
        </div>
    );
}


