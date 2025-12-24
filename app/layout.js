import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "CostRadar | Smart Price Tracking & Alerts",
  description:
    "Monitor product prices across the web, track trends over time, and receive alerts when prices change with CostRadar.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
