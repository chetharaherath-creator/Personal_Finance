import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosMusicalNotes } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { FaUniversity, FaChartPie } from "react-icons/fa";
import { FaRobot, FaCloudArrowUp } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

function SubscriptionCard({ subscription, onEdit, onDelete }) {
  
  function getIcon(category) {
    switch(category) {
      case "Entertainment":
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30"><BiSolidMoviePlay className="text-4xl text-pink-500" /></div>;
      case "Music":
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30"><IoIosMusicalNotes className="text-4xl text-green-500" /></div>;
      case "Health":
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30"><GiHealthNormal className="text-4xl text-blue-500" /></div>;
      case "Education":
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30"><FaUniversity className="text-4xl text-purple-500" /></div>;
      case "AI Tools":
      case "AI Tooles":
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30"><FaRobot className="text-4xl text-orange-500" /></div>;
      case "Bills":
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30"><MdAttachMoney className="text-4xl text-yellow-500" /></div>;
      case "Cloud Storage":
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30"><FaCloudArrowUp className="text-4xl text-cyan-500" /></div>;
      default:
        return <div className="p-3 rounded-full flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800"><FaChartPie className="text-4xl text-gray-500" /></div>;
    }
  }

  function getDaysLeft(date) {
    const today = new Date();
    const renewal = new Date(date);
    const diffTime = renewal - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  return (
    <div className="w-full bg-white dark:bg-[#2A1B16] rounded-3xl p-4 shadow-md mb-6 flex justify-between items-center transition-colors">
      <div className="flex items-center gap-4">
        {getIcon(subscription.category)}
        <div>
          <h1 className="text-lg font-bold text-primary">
            {subscription.subscriptionName || subscription.name}
          </h1>
          <p className="text-gray-500 text-sm">
            {subscription.category}
          </p>
          <p className="text-gray-500 text-sm">
            Renews On
          </p>
          <p className="text-pink-600 text-sm">
            {subscription.renewalDate}
          </p>
        </div>
      </div>
      
      <div className="text-right">
        <h1 className="text-xl font-bold text-primary">
          Rs. {subscription.monthlyCost || subscription.cost}
        </h1>
        <p className="bg-pink-200 text-primary px-3 py-1 rounded-full mt-2 text-xs">
          {getDaysLeft(subscription.renewalDate)} days left
        </p>
        
        <div className="flex flex-col item-end mt-2 gap-1">
          <button 
            onClick={() => onEdit(subscription.id)}
            className="text-purple-500 text-sm font-bold mt-2"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(subscription.id)}
            className="text-pink-900 text-sm font-bold mt-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCard;
