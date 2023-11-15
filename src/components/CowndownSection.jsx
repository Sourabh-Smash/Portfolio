import React, { useEffect, useRef, useState } from "react";
import CounterElement from "./CounterElement";

const CowndownSection = () => {
//   const targetRef = useRef(null);
//   const [animate, setanimate] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             console.log("in view");
//             setanimate((prev) => !prev);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );
//     if (targetRef.current) {
//       observer.observe(targetRef.current);
//     }
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

  return (
    <section className="counter_wrapper">
      <CounterElement
        classProperty="uil uil-cell"
        dataVal="1500"
        elem="+"
        // trigger={animate}
        info="Completed Projects"
      />
      <CounterElement
        classProperty="uil uil-smile"
        dataVal="1600"
        elem="K"
        info="Happy Clients"
        // trigger={animate}
      />
      <CounterElement
        classProperty="uil uil-trophy"
        dataVal="21"
        elem="+"
        info="Awards Received"
        // trigger={animate}
      />
    </section>
  );
};

export default CowndownSection;
