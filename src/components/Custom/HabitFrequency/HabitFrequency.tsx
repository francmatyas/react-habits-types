import "./HabitFrequency.scss";
import { useState } from "react";

import { Habit } from "../../../scripts/HabitUtils";

import { HabitFrequency as HabitFrequencyType } from "../../../scripts/HabitUtils";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

function HabitFrequency() {
  console.log(new Habit({ name: "Test", days: [0, 1] }));
  console.log(new Habit({ name: "Test2", dayCycle: 4 }));
  //console.log(habit.getFrequencyLabel());

  //console.log(Object.keys(HabitFrequencyType).filter((key) => isNaN(Number(key))))

  //console.log(HabitFrequencyType.Saturday);
  //console.log(HabitFrequencyType[0]);

  console.log(
    Object.keys(HabitFrequencyType).filter((key) => isNaN(Number(key)))
  );

  const key = "Saturday";
  console.log(HabitFrequencyType[key]);
  console.log(HabitFrequencyType[0]);

  return (
    <div id="habit-frequency">
      <FormGroup>
        {Object.keys(HabitFrequencyType)
          .filter((key) => isNaN(Number(key)))
          .map((key) => {
            return (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox /* onChange={() => {console.log(key); habit.frequency.push(HabitFrequencyType[key])}} */
                  />
                }
                label={key}
              />
            );
          })}
      </FormGroup>
    </div>
  );
}

export default HabitFrequency;
