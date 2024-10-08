import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";
import Notification from "../Notification/Notification";

export default function App() {  

  const [values, setValues] = useState(() => {
    const localValue = window.localStorage.getItem("savedValues");
    if (localValue !== null) {
      return JSON.parse(localValue);
    }
    return { 
    good: 0,
    neutral: 0,
    bad: 0,
  };
  });

  const keys = Object.keys(values)

  const updateFeedback = (key) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const PositiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };


  useEffect(() => {
    window.localStorage.setItem("savedValues", JSON.stringify(values));} ,[totalFeedback]);

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
          feedbackName={{
            goodText: "good",
            neutralText: "neutral",
            badText: "bad",
          }}
          totalFeedback={totalFeedback}
          positiveFeedback={PositiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
