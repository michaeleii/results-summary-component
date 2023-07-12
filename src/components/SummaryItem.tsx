function SummaryItem({
  color,
  score,
  category,
  icon,
}: {
  color: string;
  score: number;
  category: string;
  icon: string;
}) {
  const variants: {
    [color: string]: string;
  } = {
    red: "bg-red-100 text-red-500",
    yellow: "bg-yellow-100 text-yellow-500",
    green: "bg-emerald-100 text-emerald-500",
    blue: "bg-blue-100 text-blue-950",
  };
  return (
    <div className={`flex p-5 rounded-xl justify-between ${variants[color]}`}>
      <div className="flex items-center gap-5 w-40">
        <img src={icon} alt={category} className="" />
        <span>{category}</span>
      </div>
      <div className="text-gray-500">
        <span className="font-bold text-slate-900">{score}</span>{" "}
        <span>/ 100</span>
      </div>
    </div>
  );
}
export default SummaryItem;
