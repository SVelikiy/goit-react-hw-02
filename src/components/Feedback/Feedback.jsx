export default function Feedback({
  values: { good, neutral, bad },
  feedbackName: [textGood, textNeutral, textBad],
  totalFeedback,
}) {
  return (
    <div>
      <p>
        {textGood} : {good}
      </p>
      <p>
        {textNeutral} : {neutral}
      </p>
      <p>
        {textBad} : {bad}
      </p>
      <p>Total : {totalFeedback}</p>
      <p>Positive : {Math.round((good / totalFeedback) * 100)} %</p>
    </div>
  );
}
