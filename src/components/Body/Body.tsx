import HabitContainer from "./HabitContainer/HabitContainer";
import Habit from "./HabitContainer/Habit/Habit";
import { Habit as HabitClass, HabitList } from "../../scripts/HabitUtils";

function Body() {
  const habitList = new HabitList({
    habits: [
      /* new HabitClass({
        name: "Test1",
        streak: 6,
        lastCompleted: new Date(),
        days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        type: "date",
      }),
      new HabitClass({
        name: "Test2",
        streak: 18,
        days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        type: "date",
      }),
      new HabitClass({
        name: "Go to gym",
        dayCycle: 3,
        completeCount: 1,
        type: "count",
      }), */
    ],
  });

  return (
    <main id="body">
      <HabitContainer type="date">
        {habitList.habitsDate.map((habit) => {
          return <Habit {...habit} />;
        })}
      </HabitContainer>

      <HabitContainer type="count">
        {habitList.habitsCount.map((habit) => {
          return <Habit {...habit} />;
        })}
      </HabitContainer>
    </main>
  );
}

export default Body;
