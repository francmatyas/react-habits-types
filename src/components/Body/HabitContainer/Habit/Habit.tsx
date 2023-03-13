import "./Habit.scss";

import HabitCheck from "../../../Custom/HabitCheck/HabitCheck";
import streakImg from "../../../../assets/img/streak.png";

import { RxCounterClockwiseClock } from "react-icons/rx";
import { Tooltip } from "@mui/material";

function Habit(props: any) {
  const {
    title,
    streak,
    checkValue,
    type,
    dayCycle,
    completeCount,
    lastCompleted,
  } = props;
  return (
    <div id="habit">
      <div id="habit__row">
        <span id="habit__title">{title}</span>
        <span id="habit__streak">
          {streak >= 3 && (
            <>
              {streak} <img src={streakImg} height="20px" alt="streak" />
            </>
          )}
        </span>
      </div>
      {type === "date" ? (
        <div id="habit__completed">
          <Tooltip title="Last time completed">
            <span id="habit__completed__date">
              {lastCompleted && <RxCounterClockwiseClock size={16} />}
              {lastCompleted?.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </span>
          </Tooltip>
        </div>
      ) : (
        <Tooltip title={`Completed ${completeCount} out of ${dayCycle} times this week.`}>
          <div id="habit__cycle">
            <span id="habit__cycle__count">{completeCount}</span>
            <span id="habit__cycle__dayCycle">/{dayCycle}</span>
          </div>
        </Tooltip>
      )}
      <HabitCheck value={checkValue} />
    </div>
  );
}

export default Habit;
