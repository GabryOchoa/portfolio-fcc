import { Route, Routes } from "react-router-dom";
import { route } from "../data/routes";
import "../pages/styles.css";
export const RouteLink = () => {
  return (
    <div className="route-content">
      <Routes>
        {route.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </div>
  );
};
