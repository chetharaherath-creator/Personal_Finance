import { Link } from "react-router-dom"
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import InputField from "../components/inputField";
function Register() {
   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleRegister(){

      try{
         const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
         );

         // Save additional user info to Firestore
         await setDoc(doc(db, "users", userCredential.user.uid), {
            name: name,
            age: age,
            email: email
         });

         alert("Account Created.");

      }catch(error){

         console.log(error);

         alert("Registration Failed");

      }

   }

  return (

<div className="w-full min-h-screen bg-accent flex justify-center items-center bg-cover">

    {/* REGISTER CARD */}
    <div className="w-[350px] min-h-[500px] py-10 backdrop-blur-lg rounded-xl shadow-2xl bg-secondary flex flex-col justify-center items-center">

        <h1 className="text-4xl font-bold mb-8 text-primary">
            Register
        </h1>

        <InputField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            variant="auth"
        />

        <InputField
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            variant="auth"
        />

        <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            variant="auth"
        />

        <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            variant="auth"
        />

        <button onClick={handleRegister} className="w-3/4 p-3 mb-6 rounded-lg bg-amber-950 text-white transform hover:scale-110 hover:bg-accent hover:text-primary duration-300 transition-all">
            Register
        </button>

        <p className="mb-6 w-3/4 text-center text-pink-600">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-600">
                Login
            </Link>
        </p>

    </div>

</div>

  );
}

export default Register;