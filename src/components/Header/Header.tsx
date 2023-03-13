import "./Header.scss";
import { useState } from "react";
import HabitFrequency, { FrequencyTags } from "./HabitFrequency/HabitFrequency";

import { HiOutlinePlus } from "react-icons/hi";
import { Tooltip } from "@mui/material";

function Header() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const [cycle, setCycle] = useState<number>(1);
  const [days, setDays] = useState<string[]>([]);

  function createHandler(): void {
    console.log(name, cycle, days);
  }

  return (
    <header id="header">
      <div id="header__create">
        <input
          id="header__input"
          type="text"
          placeholder="Name your habit"
          onChange={(e) => setName(e.target.value)}
        />
        <button id="header__select" onClick={() => setShow(!show)}>
          <span>Select</span>

          {days.length > 0 ? (
            <FrequencyTags tags={days} />
          ) : (
            <FrequencyTags cycle={cycle} />
          )}
        </button>
        <HabitFrequency
          show={show}
          dayCycle={cycle}
          daysList={days}
          onHide={() => setShow(false)}
          onCycleChange={(cycle) => setCycle(cycle)}
          onDaysChange={(days) => setDays(days)}
        />
        <Tooltip title="Add new habit">
          <button id="header__button" onClick={createHandler}>
            <HiOutlinePlus size={24} />
          </button>
        </Tooltip>
      </div>
    </header>
  );
}

export default Header;
