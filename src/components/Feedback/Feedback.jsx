import css from './Feedback.module.css'

export default function Feedback({
  values: { good, neutral, bad },
  feedbackName : {goodText,neutralText,badText},
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <p className={css.text}>
        {goodText} : {good}
      </p>
      <p className={css.text}>
        {neutralText} : {neutral}
      </p>
      <p className={css.text}>
        {badText} : {bad}
      </p>
      <p className={css.text}>Total : {totalFeedback}</p>
      <p className={css.text}>Positive : {positiveFeedback} %</p>
    </div>
  );
}
