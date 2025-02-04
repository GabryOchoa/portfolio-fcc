import { Header } from "./header";
import { NutritionTable } from "./nutritionTable";
import { Note } from "./note";
import "./styles.css";

export const ShowNutritionForm = () => {
  return (
    <div className="nutrition">
      <div className="label">
        <Header />
        <NutritionTable />
        <Note />
      </div>
    </div>
  );
};
