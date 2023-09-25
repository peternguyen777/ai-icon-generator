import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DemoSection from "~/components/landingPage/demo-section";
import HeroSection from "~/components/landingPage/hero-section";
import MarqueeBanner from "~/components/landingPage/marquee-banner";
import PreviewSection from "~/components/landingPage/preview-section";
import Pricing from "~/components/landingPage/pricing";
import Testimonials from "~/components/landingPage/testimonials";
import type { GeneratedImages } from "./generate";

const defaultImage: GeneratedImages[number] = {
  id: "clmstm24g0029tlv7zshfce48",
  prompt: "eating a pizza",
  breed: "samoyed",
  colour: "green",
  style: "vintage",
  userId: "clm0o35us0004l408g9x62n7o",
  createdAt: new Date("2023-09-21T06:57:28.367Z"),
  User: {
    image:
      "https://lh3.googleusercontent.com/a/AAcHTtcC8gBd5lDU25ffuBr-VfqVRIfgFyu9nNT4ORPig8AF=s96-c",
    name: "Peter Nguyen",
  },
};

const HomePage: NextPage = () => {
  const [image, setImage] = useState(defaultImage);

  return (
    <>
      <Head>
        <title>WoofAi - Dog Icon Generator</title>
        <meta
          name="WoofAi AI powered dog icon generator"
          content="landing page for dog icon generator app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <MarqueeBanner image={image} setImage={setImage} />
        <PreviewSection image={image} />
        <DemoSection />
        <Pricing />
        <Testimonials />
      </main>
    </>
  );
};

export default HomePage;
