import React from "react";
import "./Marquee.css";

export default function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  duration = "28s",
  gap = "1.25rem",
  ...props
}) {
  return (
    <div
      className={`marquee-container ${reverse ? "marquee-reverse" : ""} ${
        pauseOnHover ? "marquee-pause-hover" : ""
      } ${className}`}
      style={{
        "--duration": duration,
        "--gap": gap,
      }}
      {...props}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div key={i} className="marquee-content" aria-hidden={i > 0}>
          {children}
        </div>
      ))}
    </div>
  );
}
