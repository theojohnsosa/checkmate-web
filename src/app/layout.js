import "./globals.css";
import localFont from "next/font/local";

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff", weight: "400" },
    { path: "./fonts/Switzer-Medium.woff", weight: "500" },
    { path: "./fonts/Switzer-Semibold.woff", weight: "600" }
  ]
})

export const metadata = {
  title: "Checkmate",
  description: "Classroom Attendance Tracking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={switzer.className}>
        {children}
      </body>
    </html>
  );
}
