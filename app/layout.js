"use client";
import Head from "./head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

import Nav from "@/components/Navigation";

import FinanceContextProvider from "@/lib/store/finance-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <FinanceContextProvider>
          <ToastContainer />
          <Nav />
          {children}
        </FinanceContextProvider>
      </body>
    </html>
  );
}
