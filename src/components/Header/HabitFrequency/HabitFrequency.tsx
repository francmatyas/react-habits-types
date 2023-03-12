import "./HabitFrequency.scss";
import { useState } from "react";
import { ClickAwayListener } from "@mui/base";

import { Slider, Button } from "@mui/material";

import { HiOutlineHandThumbUp } from "react-icons/hi2";

import { Habit } from "../../../scripts/HabitUtils";

import { HabitFrequency as HabitFrequencyType } from "../../../scripts/HabitUtils";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

interface HabitFrequencyProps {
  show: boolean;
  onHide: () => void;
}

function HabitFrequency(props: HabitFrequencyProps) {
  const { show, onHide } = props;
  const [cycle, setCycle] = useState(1);

  return (
    <ClickAwayListener onClickAway={() => onHide()}>
      <>
        {show ? (
          <div id="habit-frequency">
            <div className="habit-frequency__col">
              <span className="habit-frequency__title">
                Pick days for your habit.
              </span>
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
                defaultValue={1}
                valueLabelDisplay="auto"
              />
            </div>
            <Button
              variant="contained"
              id="habit-frequency__submit"
              onClick={onHide}
            >
              Sumbit
              <HiOutlineHandThumbUp size={24} />
            </Button>
          </div>
        ) : null}
      </>
    </ClickAwayListener>
  );
}

export default HabitFrequency;

function FrequencyTag(props: { title: string }) {
  return <span id="frequency-tag">{props.title}</span>;
}

const Tags: any = {
  monday: <FrequencyTag title="Mon" />,
  tuesday: <FrequencyTag title="Tue" />,
  wednesday: <FrequencyTag title="Wed" />,
  thursday: <FrequencyTag title="Thu" />,
  friday: <FrequencyTag title="Fri" />,
  saturday: <FrequencyTag title="Sat" />,
  sunday: <FrequencyTag title="Sun" />,

  daily: <FrequencyTag title="Daily" />,
  weekday: <FrequencyTag title="Weekday" />,
  weekend: <FrequencyTag title="Weekend" />,
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
        <FrequencyTag title={`${cycle}x`} />
      )}
    </div>
  );
}
