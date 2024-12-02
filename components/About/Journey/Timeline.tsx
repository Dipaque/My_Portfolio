import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const timelineData = [
    { title: "Started Project", description: "Kick-off meeting and initial setup." },
    { title: "Design Phase", description: "Worked on UI/UX design and wireframes." },
    { title: "Development", description: "Built the application using React." },
    { title: "Testing & Launch", description: "QA testing and deployed the application." },
  ];

  return (
    <div className="timeline-wrapper mx-auto max-w-4xl">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} content={item} index={index} />
      ))}
    </div>
  );
};

export default Timeline;
