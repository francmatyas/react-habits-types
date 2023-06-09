import "./HabitCheck.scss";
import { useState } from "react";

import { HiOutlineCheck, HiOutlineMinus, HiOutlineX } from "react-icons/hi";
import { Tooltip } from "@mui/material";

enum HabitCheckValue {
  Yes = "Y",
  No = "N",
  Maybe = "M",
  Undefined = "U",
}

function HabitCheck(props: any) {
  const { value } = props;

  const [habitState, setHabitState] = useState(value);

  function handleHabitCheck(value: HabitCheckValue) {
    setHabitState(value);
  }

  return (
    <div id="habit-check">
      <Tooltip title="Mark as uncompleted">
        <button
          className={
            "habit-check__button " +
            (habitState === HabitCheckValue.No &&
              "habit-check__button--checked")
          }
          id="habit-check__button--red"
          onClick={() =>
            habitState === HabitCheckValue.No
              ? handleHabitCheck(HabitCheckValue.Undefined)
              : handleHabitCheck(HabitCheckValue.No)
          }
        >
          <HiOutlineX size={24} />
        </button>
      </Tooltip>
      <Tooltip title="Mark as half-completed">
        <button
          className={
            "habit-check__button " +
            (habitState === HabitCheckValue.Maybe &&
              "habit-check__button--checked")
          }
          id="habit-check__button--yellow"
          onClick={() =>
            habitState === HabitCheckValue.Maybe
              ? handleHabitCheck(HabitCheckValue.Undefined)
              : handleHabitCheck(HabitCheckValue.Maybe)
          }
        >
          <HiOutlineMinus size={24} />
        </button>
      </Tooltip>
      <Tooltip title="Mark as completed">
        <button
          className={
            "habit-check__button " +
            (habitState === HabitCheckValue.Yes &&
              "habit-check__button--checked")
          }
          id="habit-check__button--green"
          onClick={() =>
            habitState === HabitCheckValue.Yes
              ? handleHabitCheck(HabitCheckValue.Undefined)
              : handleHabitCheck(HabitCheckValue.Yes)
          }
        >
          <HiOutlineCheck size={24} />
        </button>
      </Tooltip>
    </div>
  );
}

export default HabitCheck;
