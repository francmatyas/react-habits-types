import "./Habit.scss";

import HabitCheck from "../../../Custom/HabitCheck/HabitCheck";
import streakImg from "../../../../assets/img/streak.png";

function Habit(props: any) {
  const { title, streak, checkValue } = props;
  return (
    <div id="habit">
      <span id="habit__title">{title}</span>
      <div id="habit__streak">
        {streak && (
          <>
            {streak} <img src={streakImg} height="20px" alt="streak"/>
          </>
        )}
      </div>
      <HabitCheck value={checkValue} />
    </div>
  );
}

export default Habit;
