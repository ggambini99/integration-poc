"use client";
import React, { useEffect, useState } from "react";
import List from "../components/List";
import Input from "../components/Input";
import { TodoProvider } from "@/context/TodoContext";
import Header from "@/components/Header";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <TodoProvider>
        <Header />
        <Input />
        <List />
      </TodoProvider>
    </>
  );
};

export default Home;
