import css from "./Options.module.css";

export default function Options({
  btnName,
  updateFeed,
  totalFeedback,
  resetFeed,
})
{
  return (
    <div className={css.btnContainer}>
      {btnName.map((key) => {
        return(
        <button type="button" key={key} className={css.button} onClick={()=>updateFeed(key)}>
          {key}
        </button>)
      })}
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeed} type="button">
          Reset
        </button>
      )}
    </div>)
}