import css from './Feedback.module.css'

export default function Feedback({
  values: { good, neutral, bad },
  feedbackName: [textGood, textNeutral, textBad],
  totalFeedback,
}) {
  return (
    <div>
      <p className={css.text}>
        {textGood} : {good}
      </p>
      <p className={css.text}>
        {textNeutral} : {neutral}
      </p>
      <p className={css.text}>
        {textBad} : {bad}
      </p>
      <p className={css.text}>Total : {totalFeedback}</p>
      <p className={css.text}>
        Positive : {Math.round((good / totalFeedback) * 100)} %
      </p>
    </div>
  );
}
