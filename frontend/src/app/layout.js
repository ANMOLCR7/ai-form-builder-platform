import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font with latin subset and a CSS variable for usage
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AI Form Builder Platform",
  description: "An AI-Native Web Development project built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* You can add custom metadata tags or links here if needed */}
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
