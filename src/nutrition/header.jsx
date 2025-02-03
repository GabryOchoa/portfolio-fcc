/*This component react is the top of the page */
export const Header = () => {
  return (
    <div>
      <header>
        <h1 className="bold">Nutrition Facts</h1>
        <div className="divider"></div>
        <p>8 servings per container</p>
        <p className="bold">
          Serving size <span>2/3 cup (55g)</span>
        </p>
      </header>
      <div className="divider large"></div>
      <div className="calories-info">
        <div className="left-container">
          <h2 className="bold small-text">Amount per serving</h2>
          <p>Calories</p>
        </div>
        <span>230</span>
      </div>
      <div className="divider medium"></div>
    </div>
  );
};
