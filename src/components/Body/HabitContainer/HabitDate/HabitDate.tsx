import "./HabitDate.scss";
import HabitCheck from "../../../Custom/HabitCheck/HabitCheck";

function HabitDate(props: any) {
  return (
    <div id="habit-date">
      <span id="habit-date__name">
        <h1>Test</h1>
      </span>
      <span id="habit-date__streak">
        <h5>Test</h5>
      </span>
      <HabitCheck />
    </div>
  );
}

export default HabitDate;
