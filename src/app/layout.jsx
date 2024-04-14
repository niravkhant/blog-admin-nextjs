import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/users/Navbar";
import { ContextProvider } from "@/context/ContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/users/Footer";

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
          <Navbar />
          {children}
          <Footer/>
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
        </ContextProvider>
      </body>
    </html>
  );
}
