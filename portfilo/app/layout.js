import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pramish Bhusal | Developer Portfolio",
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
                                    

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*<body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >*/}
      <body
       className=""
       >
                    
        {children}
      </body>
    </html>
  );
}
