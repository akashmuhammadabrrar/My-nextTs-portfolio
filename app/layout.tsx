import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Helper/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Helper/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Abrrar's portfolio",
  description: "Abrrar portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${font.className}`}>
        <div className="hidden md:block ">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>
        <ResponsiveNav></ResponsiveNav>
        {children}
        <Footer></Footer>
        <ScrollToTop></ScrollToTop>
      </body>
    </html>
  );
}
