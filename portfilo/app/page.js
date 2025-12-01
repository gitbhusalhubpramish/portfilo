import Image from "next/image";
import Navbar from "../components/navbar";
import Contant from "../components/homecontant";

export default function Home() {
  return (
  <>
	<div>
    <Navbar/>
    </div>
    <div className="">
    <Contant/>
    </div>
    </>
  );
}
