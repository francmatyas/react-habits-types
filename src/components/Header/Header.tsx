import "./Header.scss";
import { useState } from "react";
import HabitFrequency, { FrequencyTags } from "./HabitFrequency/HabitFrequency";

import { HiOutlinePlus } from "react-icons/hi";

function Header() {
  const [show, setShow] = useState(false);

  console.log(show);

  return (
    <header id="header">
      <div id="header__create">
        <input id="header__input" type="text" placeholder="Name your habit" />
        <button id="header__select" onClick={() => setShow(!show)}>
          <span>Select</span>
          <FrequencyTags tags={["monday", "friday", "saturday", "sunday", "tuesday", "wednesday"]} />
        </button>
        <HabitFrequency
          show={show}
          onHide={() => {
            setShow(false);
          }}
        />

        <button id="header__button" type="button">
          <HiOutlinePlus size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
