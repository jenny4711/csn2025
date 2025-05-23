import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppSidebar } from '@/components/AppSidebar';
import { DataProvider } from "@/context/DataContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-screen `}>
        <DataProvider>
          <div className="flex min-h-screen w-full overflow-x-hidden  ">
         
              <AppSidebar />
           
            <main className="flex-1 overflow-x-hidden">
              {/* <Navbar /> */}
              <div className="  pt-12 w-full overflow-x-hidden justify-center px-0 md:px-15 ml-0 md:ml-10 ">
                {children}
              </div>
            </main>
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
