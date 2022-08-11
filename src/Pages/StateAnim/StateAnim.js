import React, { useState, useRef } from "react";
import "./StateAnim.css";
import { useTransition, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";

const StateAnim = () => {
  const [inputData, setInputData] = useState([
    {
      id: uuidv4(),
      txt: "Schaad",
    },
    {
      id: uuidv4(),
      txt: "SCH",
    },
    {
      id: uuidv4(),
      txt: "Keny Arkana",
    },
  ]);

  const inputRef = useRef()

  const handleData = (e) => {
    e.preventDefault()

    const newObj = {
        id: uuidv4(),
        txt: inputRef.current.value
    }

    setInputData([...inputData, newObj]);

    inputRef.current.value = "";
  }

  const listTransitions = useTransition(inputData, {
    from: {opacity: 0, transform: "translateY(10px)"},
    enter: {opacity:1, transform: "translateY(0px)"},
    keys : inputData.map((item) => item.id)
  }) 

  return (
    <form onSubmit={handleData}>
      <label htmlFor="piano">Renseignez vos chanteurs favoris.</label>
      <input ref={inputRef} type="text" id="piano" />

      <ul>
        {listTransitions((styles, item) => {
            return <animated.li style={styles}>
                {item.txt}
            </animated.li>
        })}
      </ul>
    </form>
  );
};

export default StateAnim;
