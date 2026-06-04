import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase/firebase";
import { collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { MdOutlineLightbulb } from "react-icons/md";

import SubscriptionCard from "../components/SubscriptionCard";
import SummaryCard from "../components/SummaryCard";
import CategoryCard from "../components/CategoryCard";

function Dashboard() {
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);
  const [dailyTip, setDailyTip] = useState("Loading tip...");

  useEffect(() => {
    // External Data Sourcing Fetch
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setDailyTip(data.slip.advice))
      .catch(() => setDailyTip("A penny saved is a penny earned."));

    const unsubscribe = auth.onAuthStateChanged(() => {
      async function loadSubscriptions() {
        if (!auth.currentUser) return; // Prevent querying if completely logged out

        const querySnapshot = await getDocs(
          query(collection(db, "subscriptions"), where("userId", "==", auth.currentUser.uid))
        );

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSubscriptions(data);
      }

      loadSubscriptions();
    });

    return () => unsubscribe();
  }, []);

  const totalMonthlySpending = subscriptions.reduce(
    (total, subscription) =>
      total + Number(subscription.monthlyCost || subscription.cost || 0), 0
  );

  const sortedSubscriptions = [...subscriptions].sort((a, b) => {
    return new Date(a.renewalDate) - new Date(b.renewalDate);
  });

  async function handleDelete(id) {
    try {
      await deleteDoc(doc(db, "subscriptions", id));
      setSubscriptions(
        subscriptions.filter(
          (subcollection) => subcollection.id !== id)
      )
      alert("Subscription deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(id) {
    navigate(`/edit-subscription/${id}`);
  }

  return (
    <div className="w-full animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
          <p className="text-gray-500">Welcome to your dashboard!</p>
        </div>
      </div>

      {/* External API Tip Card */}
      <div className="w-full bg-pink-100 rounded-2xl p-4 mb-6 flex items-start gap-3 shadow-sm border border-pink-200">
        <MdOutlineLightbulb className="text-pink-500 text-3xl shrink-0 mt-1" />
        <div>
          <p className="text-pink-600 font-bold text-sm uppercase tracking-wider mb-1">Daily Tip</p>
          <p className="text-primary italic text-sm md:text-base">"{dailyTip}"</p>
        </div>
      </div>

      {/* HERO IMAGE */}
      <img
        src="https://res.cloudinary.com/djcrejx6n/image/upload/f_auto,q_auto/dashboard-hero_rsq6fn"
        alt="Finance Dashboard"
        className="w-full h-48 md:h-64 object-cover rounded-3xl mt-7 shadow-lg"
      />

      <div className="w-full bg-secondary rounded-3xl p-9 mt-7 mb-5 shadow-lg">
        <p className="text-lg text-pink-600">
          Total Monthly Spending</p>
        <h1 className="text-5xl font-bold text-primary mt-2">
          Rs. {totalMonthlySpending.toLocaleString()}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full mb-5 items-start">
        {/* Left Column: Upcoming Renewals */}
        <div className="w-full md:w-2/3">
          <div className="flex justify-between item-center w-full mb-5">
            <h1 className="text-2xl font-bold text-primary mb-1">
              Upcoming Renewals
            </h1>
            <button
              onClick={() => setViewAll(!viewAll)}
              className="text-pink-600 font-bold">
              {viewAll ? "Show Less" : "View All"}
            </button>
          </div>

          {/*Cards*/}
          {(viewAll ? sortedSubscriptions : sortedSubscriptions.slice(0, 3)).map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Right Column: Categories */}
        <div className="w-full md:w-1/3">
          <CategoryCard subscriptions={subscriptions} />
        </div>
      </div>

      {/* SUMMARY CARD */}
      <SummaryCard
        totalSubscriptions={subscriptions.length}
        totalMonthlySpending={totalMonthlySpending}
      />

      {/* ADD BUTTON */}
      <button
        onClick={() => navigate("/add-subscription")}
        className="w-full bg-pink-500 text-white p-4 rounded-full mt-5 text-lg font-semibold hover:bg-secondary transition-all duration-300"
      >
        + Add Subscription
      </button>



    </div>

  );
}

export default Dashboard;