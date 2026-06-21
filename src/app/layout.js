import { Inter, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Scene from '@/components/canvas/Scene';
import AppProvider from '@/components/layout/AppProvider';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Dr. Revanth Skin & Hair Clinic | Advanced Hair Transplant Centre",
  description: "Experience world-class dermatological care, advanced hair transplants, and aesthetic skin treatments at Dr. Revanth Skin & Hair Clinic. Where Science Restores Confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <SmoothScroll>
          <Scene />
          <AppProvider>
            {children}
          </AppProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
