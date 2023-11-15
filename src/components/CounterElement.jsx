import React from "react";

const CounterElement = ({ elem, info, dataVal, classProperty }) => {
  return (
    <div>
      <div>
        <i className={classProperty}></i>
      </div>
      <div>
        <h3>
          <span className="counter" data-count={dataVal}>
            {dataVal}
          </span>
          {elem}
        </h3>
        <h5>{info}</h5>
      </div>
    </div>
  );
};

export default CounterElement;
