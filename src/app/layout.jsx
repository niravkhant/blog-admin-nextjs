import { Work_Sans } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/users/Navbar";
import { ContextProvider } from "@/context/ContextProvider";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/users/Footer";
import dynamic from "next/dynamic";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const Navbar = dynamic(() => import("@/components/users/Navbar"), { ssr: false });

const inter = Work_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog General",
  description: "Blog next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ContextProvider>
          <NextTopLoader color="#f11946" />
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="colored"
          />
           <Analytics />
           <SpeedInsights />
        </ContextProvider>
      </body>
    </html>
  );
}
