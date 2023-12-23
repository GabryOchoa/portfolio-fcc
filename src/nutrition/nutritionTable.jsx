import { Daily } from "./daily";
import { Protein } from "./protein";

/* This component show all information form*/
export const NutritionTable = () => {
  // this is an array of information for the part of the daily value
  const ArrayInfo = [
    { name: "Cholesterol", amount: "0mg", percentage: "0%", stocked: true },
    { name: "Sodium", amount: "160mg", percentage: "7%", stocked: false },
    {
      name: "Total Carbohydrate",
      amount: "37mg",
      percentage: "13%",
      stocked: true,
    },
  ];
  return (
    <div className="daily-value small-text">
      <Daily array={ArrayInfo} />
      <Protein />
    </div>
  );
};
