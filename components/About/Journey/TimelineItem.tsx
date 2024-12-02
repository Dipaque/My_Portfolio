import Title from "@/components/Title";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const TimelineItem = ({ content, index }:any) => {
  

  return (
    <div className="flex items-start gap-12 pt-12">
       <Title title={"0"+index.toString()} />
       <div className="flex flex-col items-start gap-2">
            
       </div>
     
    </div>
  );
};

export default TimelineItem;
