
import { Link } from "react-router-dom"
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import InputField from "../components/inputField";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin() {

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login successful!!!");
            navigate("/dashboard")

        } catch (error) {

            console.log(error);

            alert("Invalid email or password");

        }

    }

    return (

        //  MOBILE-FIRST FULL SCREEN
        <div className="w-full min-h-screen bg-accent flex justify-center items-center bg-cover">

            {/* LOGIN CARD */}
            <div className="w-[350px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl bg-secondary flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-8 text-primary ">Sign in</h1>
                <InputField
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="auth"
                />

                <InputField
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="auth"
                />

                <p className="mb-6 w-3/4 text-right text-pink-600">Forget password? <Link to="/forgot-password" className="text-pink-600">Click here</Link></p>
                <button onClick={handleLogin} className="w-3/4 p-3 mb-6 rounded-lg bg-amber-950 text-white transform hover:scale-110 hover:bg-accent hover:text-primary duration-300 transition-all">Sign in</button>

                <p className="mb-6 w-3/4 text-center text-pink-600">Don't have an account? <Link to="/register" className="text-pink-600">Register</Link></p>

            </div>




        </div>




    );
}

export default Login;