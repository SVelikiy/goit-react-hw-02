import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";
import Notification from "../Notification/Notification";

export default function App() {
  const feedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const keys = Object.keys(feedback);

  const [values, setValues] = useState(() => {
    const localValue = window.localStorage.getItem("savedValues");
    if (localValue !== null) {
      return JSON.parse(localValue);
    }
    return feedback;
  });

  const updateFeedback = (key) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const resetFeedback = () => {
    setValues(feedback);
  };

  useEffect(() => {
    window.localStorage.setItem("savedValues", JSON.stringify(values), [
      values,
    ]);
  });

  return (
    <div>
      <Description />
      <Options
        btnName={keys}
        updateFeed={updateFeedback}
        resetFeed={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          feedbackName={keys}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
