import login from "../assets/images/login.png";
import google from "../assets/images/google-icon.png";
import SubmitButton from "../components/SubmitButton";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();
    const loginUser = async (data) => {
        try {
            const response = await apiClient.post('/users/login', data, {
                headers: {
                    "Content-Type": 'application/json'
                }

            });
            console.log(response);
            localStorage.setItem('ACCESS_TOKEN', response.data.data.accessToken);
            navigate('/');

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="bg-gray-200 h-screen">
            {/* <div className="container mx-auto"> */}
            <div className="flex flex-row w-full bg-gray-100 rounded-md mx-auto overflow-hidden">
                <div className="w-1/2 py-16 px-12">
                    <p className="text-center text-2xl font-bold">Event <span className="text-[#005DB5]">Hive</span></p>
                    <h2 className="text-center text-4xl font-bold mt-12 mb-10 ml-10">Sign In to Event Hive</h2>

                    <form action={loginUser} className="">

                        <label className="block uppercase text-md mb-2">Your Email</label>

                        <input type="email"
                            name="email"
                            placeholder="Enter your name"
                            required
                            className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-md px-4 py-2 mb-6" />
                        <div className="flex flex-row justify-between">
                            <label className="block uppercase text-md mb-2">Password</label>
                            <label className="block  text-md mb-2 text-gray-500 mr-1">Forgot your password?</label>
                        </div>

                        <input type="password"
                            name="password"
                            required minlength="8"
                            maxlength="16"
                            pattern="^[a-zA-Z0-9_]*${16}"
                            placeholder="Enter your password"
                            className="border border-gray-100 rounded-md bg-white w-full text-gray-700 text-md px-4 py-2 mb-6" />

                        <SubmitButton title={'Sign In'} className="border border-gray-100 rounded-md text-white text-md px-2 py-3 w-2/4 mt-6 ml-33 bg-[#7848F4]" />
                        <p className="mt-6 text-center">Or</p>
                        <div className="flex flex-row border border-gray-100 rounded-md bg-white text-gray-700 text-sm px-6 py-3 w-2/3 mt-6 ml-20 mb-10">
                            <img src={google} className="h-6 w-6 text-center ml-15" />
                            <p className="text-center text-lg ml-4 mr-2">Sign up with Google</p>


                        </div>
                    </form>
                </div>

                <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${(login)})` }}>
                    <div className="flex flex-col text-white">
                        <h1 className="text-center mt-65 mb-6 text-4xl font-bold">Hello Friend</h1>
                        <p className="text-2xl text-center mb-8">To keep connected with us provide us with your information </p>

                        <button type="submit"
                            className="block border border-[#B4B9C2] rounded text-white text-md py-1 px-4 w-20 h-8 bg-[#B4B9C2] whitespace-nowrap ml-70">
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>


            {/* </div> */}
        </div>
    );
}

