import React from "react";
import clientsCredit from "../../../assets/images/clinets-credits.jpg";

import tIcon from "../../../assets/images/temple-icon.png";
import Details from "./Details";
import cryptobg from "../../../assets/images/bg.jpg";
import Defi from "./Defi";
import FinanceDetails from "./FinanceDetails";
import Blockchain from "./Blockchain";
import BookCall from "./BookCall";
import CryptoHit from "./CryptoHit";
import WorkDetails from "./CapitalClubNumbers";
import Team from "./Team";
import Analytics from "./Analytics";
import About from "./About";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import JoinNow from "./JoinNow";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className="w-full ">
        <img
          src={clientsCredit}
          alt="Clients Credit"
          className="w-full bg-no-repeat bg-contain h-30 object-cover"
        />
      </div>

      <JoinNow />

      <div className="bg-[#2B2B2B] flex flex-col items-center justify-center gap-5 py-10">
        <img src={tIcon} height={50} width={80}></img>
        <p className="md:max-w-[40%] max-w-[90%] text-white text-center">
          And that’s why more and more institutions and major funds are getting
          into cryptocurrencies. As regulation improves and marketplace maturity
          grows, investor confidence in this revolutionary new era of finance is
          <span style={{ color: "#fff04f" }}> building at a rapid pace</span>.
        </p>
      </div>
      <Details />
      <div
        style={{
          backgroundImage: `url(${cryptobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-[113px] w-full flex items-center justify-center"
      >
        <span
          className="font-bold text-4xl text-center font-sans-serif font-['Montserrat']"
          style={{ fontFamily: "Montserrat" }}
        >
          THE FUTURE IS CRYPTO AND DEFI
        </span>
      </div>
      <Defi />
      <FinanceDetails />
      <Blockchain />
      <div
        style={{ backgroundColor: "#fff04f" }}
        className="relative h-[113px] w-full flex items-center justify-center"
      >
        <span
          className=" text-2xl text-center font-sans-serif max-w-[60%] font-['Montserrat'] font-[900]"
          style={{ fontFamily: "Montserrat" }}
        >
          JOIN CAPITALS CLUB TODAY AND EMBARK ON A JOURNEY TOWARDS FINANCIAL
          FREEDOM AND PROSPERITY
        </span>
      </div>
      <BookCall />
      <CryptoHit />
      <WorkDetails />
      <Team />
      <Analytics />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
