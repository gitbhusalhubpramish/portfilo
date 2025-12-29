import data from "@/data/about.json"
import React from "react";

export default function About() {
	const renderElem = (node, keyPrefix = "root") => {
    // base case: text node
    if (typeof node.elm === "string") {
      return React.createElement(node.tag, { key: keyPrefix, className:node.cls }, node.elm);
    }

    // recursive case: array of children
    if (Array.isArray(node.elm)) {
      return React.createElement(
        node.tag,
        { key:keyPrefix, className:node.cls },
        node.elm.map((child, idx) => renderElem(child, idx))
      );
    }

    return null;
  };
  return (
    <div className="sm:m-50 mx-0 m-30">
      {data.data.map((item, index) => (
        <div key={index} className="m-10 text-gray-300">
          <h1 className="text-5xl font-bold text-[#33a400]">{item.Heading}</h1>
          {item.des.map((itm, idx) =>
            renderElem(itm)
          )}
        </div>
      ))}
    </div>
  )
}
