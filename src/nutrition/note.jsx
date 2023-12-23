/* this component is showing note at bottom of page */
export const Note = () => {
  const note = `* The % Daily Value (DV) tells you how much a nutrient in a serving of
    food contributes to a daily diet. 2,000 calories a day is used for
    general nutrition advice.`;
  return (
    <div>
      <div className="divider medium"></div>
      {/* This one is the value the text */}
      <p className="note">{note}</p>
    </div>
  );
};
