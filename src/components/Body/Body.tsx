import "./Body.scss";

import HabitContainer from "./HabitContainer/HabitContainer";
import Habit from "./HabitContainer/Habit/Habit";
import { Habit as HabitClass } from "../../scripts/HabitUtils";

function Body() {
  const habit1 = new HabitClass({name: "Test1"});
  const habit2 = new HabitClass({name: "Test2"});
  const habit3 = new HabitClass({name: "Test3"});
  return (
    <main id="body">
      <HabitContainer type="date">
        <Habit title="Test1" streak="6" checkValue="Y" type="date" lastCompleted={new Date()}/>
        <Habit title="Test2" streak="18" checkValue="N" type="date"/>
      </HabitContainer>

      <HabitContainer type="count">
        <Habit title="Go to gym" streak="0" checkValue="M" type="count" dayCycle={3} completeCount={1}/>
      </HabitContainer>
    </main>
  );
}

export default Body;
