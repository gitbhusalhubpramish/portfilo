//import {Metadata} from "next"
"client site"
import data from "@/data/about.json"
import React from "react";
import AboutMe from "./about.js"
import Skills from "./skills.js"
import Achivements from "./achivements.js"

export const metadata = {
  title: "About me",
  description: "Portfolio of Pramish Bhusal, a Nepali developer skilled in JavaScript, Python, C++, and more. Projects, blogs, and contact.",
  keywords: [
      "Pramish Bhusal",
      "Nepal developer",
      "13 years old prodigi",
      "Pygame chess",
      "JavaScript developer Nepal",
      "Python projects",
      "Next.js portfolio"
  ]
};
export default function About() {
	const renderElem = (node, keyPrefix = "root") => {
    // base case: text node
    if (typeof node.elm === "string") {
      return React.createElement(node.tag, { key: keyPrefix, className:node.cls, src:node.src?node.src:null, alt:node.alt?node.alt:null}, node.elm);
    }
    if (node.tag === "img") {
    return <img className={node.cls} src={node.src} alt={node.alt} key={keyPrefix}/>;
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
    <div className="sm:m-[15%] mx-0 m-30">
		<AboutMe/>
		<Skills/>
		<Achivements/>
    </div>
  )
}
