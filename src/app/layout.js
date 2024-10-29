import "./globals.css";
import { Syne } from "next/font/google";

const fontSyne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "PAUL DEV",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSyne.className}>{children}</body>
    </html>
  );
}
