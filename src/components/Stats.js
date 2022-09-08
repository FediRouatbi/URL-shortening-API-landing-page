import React from "react";
import Container from "./Container";
import { ReactComponent as Icon3 } from "../images/icon-fully-customizable.svg";
import { ReactComponent as Icon2 } from "../images/icon-detailed-records.svg";
import { ReactComponent as Icon1 } from "../images/icon-brand-recognition.svg";
const Stats = () => {
  return (
    <section className="py-6 bg-GrayishViolet/30    ">
      <div className="text-center mt-36 md:w-1/3 w-4/5 mx-auto">
        <h1 className="font-semibold md:text-4xl  text-2xl  text-VeryDarkViolet pb-5">
          Advanced Statistics
        </h1>
        <p className="text-GrayishViolet">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>

      <div className="w-10/12 flex flex-col md:flex-row items-center mx-auto py-14 ">
        <Container
          id={1}
          Icon={Icon1}
          npm
          title="Brand Recognition"
          paragraph=" Boost your brand recognition with each click.Generic links don't
          mean a thing. Branded links help instil confidence in your content"
        />
        <div className="h-3 w-28 bg-cyan rotate-90 md:rotate-0"></div>
        <Container
          id={2}
          Icon={Icon2}
          title="Detailed Records"
          paragraph=" Gain insights into who is clicking your links.Knowing when and where
          pepole enage with your content helps inform better decisions ."
        />
        <div className="h-3 w-28 bg-cyan rotate-90 md:rotate-0"></div>
        <Container
          id={3}
          Icon={Icon3}
          title="Fully Customizable"
          paragraph=" Improve brand awarness and content discoverability through
            customizable links,supercharging qudience engagement."
        />
      </div>
    </section>
  );
};

export default Stats;
