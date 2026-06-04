
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import InputField from "../components/inputField";




function EditSubscription() {

    const { id } = useParams();




    const [subscriptionName, setSubscriptionName] = useState("");

    const [category, setCategory] = useState("");
    const [monthlyCost, setMonthlyCost] = useState("");
    const [renewalDate, setRenewalDate] = useState("");


    useEffect(() => {

        async function loadSubscription() {

            const docRef = doc(db, "subscriptions", id);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {

                setSubscriptionName(docSnap.data().subscriptionName);
                setCategory(docSnap.data().category);
                setMonthlyCost(docSnap.data().monthlyCost);
                setRenewalDate(docSnap.data().renewalDate);





                console.log(docSnap.data());
            }
        }

        loadSubscription()

    }, [id]);


    async function handleUpdateSubscription() {

        try {

            const docRef = doc(db, "subscriptions", id);

            await updateDoc(docRef, {
                subscriptionName: subscriptionName,
                category: category,
                monthlyCost: monthlyCost,
                renewalDate: renewalDate
            });

            alert("Subscription Updated Successfully!");

        } catch (error) {
            console.log(error);
        }
    }






    return (

        <div className="w-full animate-fade-in">
            <img
                src="https://res.cloudinary.com/djcrejx6n/image/upload/edit-subscription_xgdjq2"
                alt="Edit Subscription"
                className="w-full h-60 md:h-80 object-cover rounded-3xl mt-7 mb-10 shadow-lg"
            />
            <h1 className="text-4xl font-bold text-primary mb-5 text-center">
                Update Subscription</h1>
            <p className="text=gray-500 text-lg mt-3 text-center">
                Update your subscription details
            </p>

            <div className="w-full bg-white dark:bg-[#2A1B16] rounded-[35px] p-5 mt-10 shadow-lg min-h-[650px] transition-colors">


                <div className="mt-5">
                    <InputField
                        label="Subscription Name"
                        type="text"
                        placeholder="Enter subscription name"
                        value={subscriptionName}
                        onChange={(e) => setSubscriptionName(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label className="text-primary text-lg font-semibold">
                        Category
                    </label>
                    <select

                        value={category}
                        onChange={(e) => setCategory(e.target.value)}

                        className="w-full p-4 rounded-2xl bg-pink-200 dark:bg-[#1C1210] mt-3 outline-none text-primary">
                        <option value="">Select Category</option>
                        <option>Entertainment</option>
                        <option>Music</option>
                        <option>Health</option>
                        <option>Education</option>
                        <option>AI Tooles</option>
                        <option>Bills</option>
                        <option>Cloud Storage</option>
                    </select>

                </div>

                <div className="mt-5">
                    <InputField
                        label="Monthly Cost"
                        type="number"
                        placeholder="Enter Amount"
                        value={monthlyCost}
                        onChange={(e) => setMonthlyCost(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <InputField
                        label="Renewal Date"
                        type="date"
                        value={renewalDate}
                        onChange={(e) => setRenewalDate(e.target.value)}
                    />
                </div>

                <button onClick={handleUpdateSubscription} className="w-full bg-pink-500 text-white p-4 rounded-full mt-8 text-lg font-semibold hover:bg-secondary transition-all duration-300">
                    Update Subscription
                </button>




            </div>

        </div>



    );

}

export default EditSubscription;