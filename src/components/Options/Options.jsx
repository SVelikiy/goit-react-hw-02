export default function Options({
  btnName: [good, neutral, bad],
  updateFeed,
  totalFeedback, resetFeed,
}) {
  return (
    <div>
      <button onClick={() => updateFeed(good)} type="button">
        {good}
      </button>
      <button onClick={() => updateFeed(neutral)} type="button">
        {neutral}
      </button>
      <button onClick={() => updateFeed(bad)} type="button">
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeed} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
