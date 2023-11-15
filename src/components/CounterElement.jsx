import React, { useEffect, useState } from "react";

const CounterElement = ({ elem, info, dataVal, classProperty }) => {
  const [counter, setCounter] = useState(0);
    useEffect(() => {
      let step=+dataVal/100;
      const interval = setInterval(() => {
          let val = +dataVal;
          console.log(counter)
        if (counter < val) {
          setCounter((prevCounter) => prevCounter + Math.ceil(step));
        } else {
          clearInterval(interval);
        }
      }, 1);

    return () => {
      clearInterval(interval);  
    };
  }, [counter]);

  return (
    <div>
      <div>
        <i className={classProperty}></i>
      </div>
      <div>
        <h3>
          <span className="counter" data-count={dataVal}>
            {counter}
          </span>
          {elem}
        </h3>
        <h5>{info}</h5>
      </div>
    </div>
  );
};

export default CounterElement;
