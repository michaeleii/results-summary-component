import summary from "../data/data";
import SummaryItem from "./SummaryItem";

const calcAvg = (arr: number[]) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
};

function ResultsSummary() {
  return (
    <div className="flex flex-col xl:flex-row xl:rounded-3xl bg-white drop-shadow-xl">
      <div className="bg-gradient-to-b  from-bg_slate_blue to-bg_royal_blue text-blue-100/70 text-center p-10 xl:rounded-3xl flex flex-col">
        <h1 className="font-bold tracking-wide text-lg xl:text-xl">
          Your Result
        </h1>
        <p className="rounded-full bg-gradient-to-b from-circle_violet to-circle_persian_blue w-fit py-7 px-10 mx-auto my-5 xl:my-10 text-blue-100/50 xl:text-xl">
          <span className="font-bold text-5xl xl:text-7xl text-white block mb-2">
            {Math.round(calcAvg(summary.map((item) => item.score)))}
          </span>
          of 100
        </p>
        <p className="text-2xl xl:text-3xl text-white mt-5 mb-1 xl:mb-5">
          Great
        </p>
        <p className="max-w-xs xl:text-lg mx-auto">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="p-10">
        <h2 className="mb-5 font-bold text-lg xl:text-xl">Summary</h2>
        <div className="flex flex-col gap-5">
          {summary.map((item) => (
            <SummaryItem
              key={item.category}
              color={item.color}
              score={item.score}
              category={item.category}
              icon={item.icon}
            />
          ))}
        </div>
        <button className="py-3 px-2 text-center bg-gray-700 hover:bg-gradient-to-b hover:from-bg_slate_blue hover:to-bg_royal_blue cursor-pointer transition-all w-full text-lg rounded-full text-white mt-5">
          Continue
        </button>
      </div>
    </div>
  );
}
export default ResultsSummary;
