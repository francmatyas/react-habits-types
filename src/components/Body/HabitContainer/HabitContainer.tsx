import "./HabitContainer.scss";

function HabitContainer(props: any) {
  const { type, children } = props;
  return (
    <div id="habit-container">
      <div id="habit-container__header">
        <span id="habit-container__header__title">
          {type === "date"
            ? "Your tasks for the day."
            : "Complete this tasks by the end of the week."}
        </span>
      </div>
      <div id="habit-container__body">{children}</div>
    </div>
  );
}

export default HabitContainer;
