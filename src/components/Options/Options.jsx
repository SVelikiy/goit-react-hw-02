import css from "./Options.module.css";

export default function Options({
  btnName: [good, neutral, bad],
  updateFeed,
  totalFeedback,
  resetFeed,
}) {
  return (
    <div className={css.btnContainer}>
      <button
        className={css.button}
        onClick={() => updateFeed(good)}
        type="button"
      >
        {good}
      </button>
      <button
        className={css.button}
        onClick={() => updateFeed(neutral)}
        type="button"
      >
        {neutral}
      </button>
      <button
        className={css.button}
        onClick={() => updateFeed(bad)}
        type="button"
      >
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeed} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
