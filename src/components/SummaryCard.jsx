function SummaryCard({ totalSubscriptions, totalMonthlySpending }) {
  return (
    <div className="w-full bg-white dark:bg-[#2A1B16] rounded-3xl p-5 shadow-md mb-3 flex justify-between items-center transition-colors">
      <div>
        <p className="text-primary text-lg">
          Total Active Subscriptions
        </p>
        <h1 className="text-3xl font-bold text-purple-600 mt-2">
          {totalSubscriptions}
        </h1>
      </div>
      <div className="text-right">
        <p className="text-primary text-lg">
          Total Monthly Cost
        </p>
        <h1 className="text-3xl font-bold text-purple-600 mt-2">
          Rs. {totalMonthlySpending.toLocaleString()}
        </h1>
      </div>
    </div>
  );
}

export default SummaryCard;
