import data from "@/data/about.json"
import React from "react";

export default function About() {
	const renderElem = (node, key) => {
    // base case: text node
    if (typeof node.elm === "string") {
      return React.createElement(node.tag, { key, className:node.cls }, node.elm);
    }

    // recursive case: array of children
    if (Array.isArray(node.elm)) {
      return React.createElement(
        node.tag,
        { key, className:node.cls },
        node.elm.map((child, idx) => renderElem(child, idx))
      );
    }

    return null;
  };
  return (
    <div className="m-45">
      {data.data.map((item, index) => (
        <div key={index} className="m-2 ">
          <h1 className="text-3xl">{item.Heading}</h1>
          {item.des.map((itm, idx) =>
            renderElem(itm)
          )}
        </div>
      ))}
    </div>
  )
}
