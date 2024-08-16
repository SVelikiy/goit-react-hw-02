import css from "./Options.module.css";

export default function Options({
  btnName : {goodText,neutralText,badText},
  updateFeed,
  totalFeedback,
  resetFeed,
}) {
  return (
    <div className={css.btnContainer}>
      <button
        className={css.button}
        onClick={() => updateFeed(goodText)}
        type="button"
      >
        {goodText}
      </button>
      <button
        className={css.button}
        onClick={() => updateFeed(neutralText)}
        type="button"
      >
        {neutralText}
      </button>
      <button
        className={css.button}
        onClick={() => updateFeed(badText)}
        type="button"
      >
        {badText}
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeed} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
