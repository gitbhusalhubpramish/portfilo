import Contact from "./contact.js"
export const metadata = {
  title: "Contact Pramish Bhusal – Full Stack Developer",
  description:
    "Contact Pramish Bhusal for collaborations, freelance work, or web development inquiries. Send a message directly through the contact form.",
  openGraph: {
    title: "Contact Pramish Bhusal",
    description:
      "Reach out for web development projects, collaborations, or freelance work.",
    type: "website",
  },
};
export default function page(){
	return (<Contact/>)
}
