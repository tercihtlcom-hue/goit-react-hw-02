import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import s from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saved = window.localStorage.getItem("saved-feedback");
    return saved !== null ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div className={s.container}>
      <Description />
      <Options onUpdate={updateFeedback} onReset={resetFeedback} total={total} />
      {total > 0 ? (
        <Feedback data={feedback} total={total} positive={positive} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;