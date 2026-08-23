import React from "react";
import Marquee from "./Marquee";
import TechCard from "./TechCard";
import { TECH_STACK_ROW1, TECH_STACK_ROW2 } from "../data/skills";
import "./TechMarquee.css";

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper" data-aos="fade-up">
      <Marquee pauseOnHover duration="30s" gap="2rem">
        {TECH_STACK_ROW1.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover duration="32s" gap="2rem">
        {TECH_STACK_ROW2.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
    </div>
  );
}
