import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosMusicalNotes } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { FaUniversity, FaChartPie } from "react-icons/fa";
import { FaRobot, FaCloudArrowUp } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

function CategoryCard({ subscriptions }) {
  // Aggregate subscriptions by category
  const categoryCounts = subscriptions.reduce((acc, sub) => {
    let cat = sub.category || "Unknown";
    // Map legacy typo to standard spelling
    if (cat === "AI Tooles") cat = "AI Tools";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const categoryConfig = {
    "Entertainment": { icon: <BiSolidMoviePlay className="text-pink-500 text-xl" />, bg: "bg-pink-100 dark:bg-pink-900/30" },
    "Music": { icon: <IoIosMusicalNotes className="text-green-500 text-xl" />, bg: "bg-green-100 dark:bg-green-900/30" },
    "Health": { icon: <GiHealthNormal className="text-blue-500 text-xl" />, bg: "bg-blue-100 dark:bg-blue-900/30" },
    "Education": { icon: <FaUniversity className="text-purple-500 text-xl" />, bg: "bg-purple-100 dark:bg-purple-900/30" },
    "AI Tools": { icon: <FaRobot className="text-orange-500 text-xl" />, bg: "bg-orange-100 dark:bg-orange-900/30" },
    "AI Tooles": { icon: <FaRobot className="text-orange-500 text-xl" />, bg: "bg-orange-100 dark:bg-orange-900/30" },
    "Bills": { icon: <MdAttachMoney className="text-yellow-500 text-xl" />, bg: "bg-yellow-100 dark:bg-yellow-900/30" },
    "Cloud Storage": { icon: <FaCloudArrowUp className="text-cyan-500 text-xl" />, bg: "bg-cyan-100 dark:bg-cyan-900/30" },
    "Unknown": { icon: <FaChartPie className="text-gray-500 text-xl" />, bg: "bg-gray-100 dark:bg-gray-800" }
  };

  const standardCategories = [
    "Entertainment",
    "Music",
    "Health",
    "Education",
    "AI Tools",
    "Bills",
    "Cloud Storage"
  ];

  const categories = standardCategories.map(name => {
    const count = categoryCounts[name] || 0;
    const config = categoryConfig[name] || categoryConfig["Unknown"];
    return { name, count, ...config };
  });

  // Add any custom/unknown categories that aren't in the standard list
  Object.keys(categoryCounts).forEach(name => {
    if (!standardCategories.includes(name)) {
      categories.push({
        name,
        count: categoryCounts[name],
        ...(categoryConfig[name] || categoryConfig["Unknown"])
      });
    }
  });

  return (
    <div className="w-full bg-white dark:bg-[#2A1B16] rounded-[35px] shadow-md p-11 transition-colors mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-xl">
            <FaChartPie className="text-pink-500 text-xl" />
          </div>
          <h2 className="text-xl font-bold text-pink-500">Categories</h2>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {categories.map((cat, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-100 dark:border-[#422B23] pb-2 last:border-0 last:pb-0">
            <div className="flex items-center gap-3">
              <div className={`${cat.bg} p-2 rounded-full flex items-center justify-center w-10 h-10`}>
                {cat.icon}
              </div>
              <p className="text-base font-bold text-primary">{cat.name}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">{cat.count}</p>
              <p className="text-[10px] text-gray-500 uppercase">{cat.count === 1 ? 'sub' : 'subs'}</p>
            </div>
          </div>
        ))}
        {categories.length === 0 && (
          <p className="text-center text-gray-500 my-4 text-sm">No categories yet.</p>
        )}
      </div>

      <div className="mt-2 pt-3 border-t border-gray-100 dark:border-[#422B23] text-center">
        <p className="text-pink-500 font-bold text-sm">Total Categories: {categories.length}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
