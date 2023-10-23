import { BioRhyme } from "next/font/google";
import "./globals.css";

const bioRhyme = BioRhyme({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Using gsap",
  description: "I'm using gsap for first time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bioRhyme.className}>{children}</body>
    </html>
  );
}
