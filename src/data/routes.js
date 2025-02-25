import { Home } from "../pages/Home";
import { About } from "../pages/About";
import Rothko from "../rothko";
import Gallery from "../gallery";
import Quiz from "../quiz";
import { ShowNutritionForm } from "../nutrition";
import Tribute from "../Tribute-page";
import BalanceSheet from "../balance-sheet";

export const route = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/rothko", element: <Rothko /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/nutrition", element: <ShowNutritionForm /> },
  { path: "/Tribute-page", element: <Tribute /> },
  { path: "/balance-sheet", element: <BalanceSheet /> },
];
