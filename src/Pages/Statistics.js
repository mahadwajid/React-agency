import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../CSS/Statistics.css";

const stats = [
  { value: 100, suffix: "+", label: "PROJECTS DONE" },
  { value: 150, suffix: "+", label: "CLIENTS ACROSS GLOBE" },
  { value: 4.8, label: "CLIENT RATINGS" },
  { value: 10, suffix: "+", label: "EXPERIENCE" },
];

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once when in view
    threshold: 0.3,      // Trigger when 30% of the section is visible
  });

  return (
    <section className="stats" ref={ref}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="stat-box">
              <h3>
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  0
                )}
              </h3>
              <p>{stat.label}</p>
            </div>
            {index < stats.length - 1 && <div className="stat-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
