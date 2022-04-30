import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Twinter - Mint your loyal followers a chance to be a part of inner
          core community
        </title>
        <meta
          name="description"
          content="Twinter is aimed at creators and influencers to help organize their loyal supporters using the latest Web 3.0 technology: NFT. Using NFT, creators can have higher fan engagement with their followers in a genuine verifiable approach!"
        />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
