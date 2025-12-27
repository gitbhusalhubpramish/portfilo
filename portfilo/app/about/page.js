import data from "@/data/about.json"
import React from "react";

export default function About() {
	/*const elm = (dta)=>(
		{}
	)*/
  return (
    <div className="m-45">
      {data.data.map((item, index) => (
        <div key={index} className="m-2">
          <h1 className="text-xl">{item.Heading}</h1>
          {item.des.map((itm, idx) =>
            React.createElement(itm.tag, { key: idx }, itm.elm)
          )}
        </div>
      ))}
    </div>
  )
}
