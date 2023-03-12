import "./Body.scss";

import HabitContainer from "./HabitContainer/HabitContainer";
import Habit from "./HabitContainer/Habit/Habit";

function Body() {
  return (
    <main id="body">
      <HabitContainer>
        <Habit title="Test1" streak="6" checkValue="Y" />
      </HabitContainer>

      <HabitContainer>
      {/*   <Habit /> */}
      </HabitContainer>
    </main>
  );
}

export default Body;
