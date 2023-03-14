import "./HabitFrequency.scss";
import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import { Slider, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { Habit, daysObject } from "../../../scripts/HabitUtils";

interface HabitFrequencyProps {
  show: boolean;
  dayCycle: number;
  daysList: string[];
  onHide: () => void;
  onCycleChange: (cycle: number) => void;
  onDaysChange: (days: string[]) => void;
}

function HabitFrequency(props: HabitFrequencyProps) {
  const { show, dayCycle, daysList, onHide, onCycleChange, onDaysChange } =
    props;

  const [cycle, setCycle] = useState<number>(dayCycle);
  const [days, setDays] = useState<string[]>(daysList);

  function submitHandler(): void {
    onCycleChange(cycle);
    onDaysChange(days);
    onHide();
  }

  return (
    <>
      {show ? (
        <ClickAwayListener onClickAway={() => onHide()}>
          <div id="habit-frequency">
            <div className="habit-frequency__col">
              <span className="habit-frequency__title">
                Pick days for your habit.
              </span>
              <FormGroup>
                {Object.entries(daysObject).map(([key, value]) => {
                  return (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          onChange={() => {
                            if (days.includes(key)) {
                              setDays(days.filter((day) => day !== key));
                            } else {
                              setDays([...days, key]);
                            }
                          }}
                          checked={days.find((day) => day === key) === key}
                        />
                      }
                      label={value}
                    />
                  );
                })}
              </FormGroup>
            </div>
            <div id="habit-frequency__spliter">
              <span>or</span>
            </div>
            <div className="habit-frequency__col">
              <span className="habit-frequency__title">Set habit cycle.</span>
              <Slider
                aria-label="Habit cycle"
                step={1}
                marks
                min={1}
                max={14}
                defaultValue={cycle}
                valueLabelDisplay="auto"
                onChange={(e, value) => {
                  setCycle(value as number);
                }}
              />
            </div>
            <Button
              variant="contained"
              id="habit-frequency__submit"
              onClick={submitHandler}
            >
              Sumbit
              <HiOutlineHandThumbUp size={24} />
            </Button>
          </div>
        </ClickAwayListener>
      ) : null}
    </>
  );
}

export default HabitFrequency;

function FrequencyTag(props: { title: string }) {
  return <span id="frequency-tag">{props.title}</span>;
}

const Tags: any = {
  mon: <FrequencyTag title="Mon" key={"tag-monday"} />,
  tue: <FrequencyTag title="Tue" key={"tag-tuesday"} />,
  wed: <FrequencyTag title="Wed" key={"tag-wednesday"} />,
  thu: <FrequencyTag title="Thu" key={"tag-thursday"} />,
  fri: <FrequencyTag title="Fri" key={"tag-friday"} />,
  sat: <FrequencyTag title="Sat" key={"tag-saturday"} />,
  sun: <FrequencyTag title="Sun" key={"tag-sunday"} />,

  daily: <FrequencyTag title="Daily" key={"tag-daily"} />,
  weekday: <FrequencyTag title="Weekday" key={"tag-weekday"} />,
  weekend: <FrequencyTag title="Weekend" key={"tag-weekend"} />,
};

export function FrequencyTags(props: any) {
  const { tags, cycle } = props;
  return (
    <div id="header-select__tags">
      {tags ? (
        props.tags.map((tag: string) => {
          return Tags[tag];
        })
      ) : (
        <FrequencyTag title={`${cycle} ${cycle > 1 ? "times" : "time"}`} />
      )}
    </div>
  );
}
