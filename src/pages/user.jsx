import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { MdPerson } from "react-icons/md";

function User() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUserEmail(currentUser.email);

        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserName(docSnap.data().name);
            setUserAge(docSnap.data().age);
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      }
    }
    fetchUserData();
  }, []);

  async function handleSignOut() {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Error signing out.");
    }
  }

  return (
    <div className="w-full animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-7">User Profile</h1>

      <div className="w-full bg-white dark:bg-[#2A1B16] rounded-[35px] shadow-md p-8 mt-5 mb-5 flex flex-col items-center justify-center transition-colors">

        {/* Placeholder Avatar */}
        <div className="w-32 h-32 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
          <MdPerson className="text-pink-500 text-6xl" />
        </div>

        {/* User Details */}
        <h2 className="text-3xl font-bold text-primary mb-1">
          {userName ? userName : "My Account"}
        </h2>

        {userAge && (
          <p className="text-pink-500 font-semibold mb-1">Age: {userAge}</p>
        )}

        <p className="text-gray-500 text-lg mb-8">
          {userEmail ? userEmail : "Loading user details..."}
        </p>

        {/* Sign Out Button (matches addSubscription button style) */}
        <button onClick={handleSignOut} className="w-50 bg-pink-500 text-white p-4 rounded-full mt-8 text-lg font-semibold hover:bg-secondary transition-all duration-300">Sign Out</button>

      </div>

    </div>
  );
}

export default User;
