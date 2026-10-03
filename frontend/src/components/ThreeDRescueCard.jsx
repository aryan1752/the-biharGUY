import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export function ThreeDRescueCard({ rescue, onSelect }) {
  return (
    <CardContainer className="inter-var w-full max-w-full">
      <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-full max-w-full h-auto rounded-2xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        
        <div>
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-700 leading-snug line-clamp-2 h-14"
          >
            {rescue.title}
          </CardItem>

          {/* Short Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 leading-relaxed line-clamp-2 h-10"
          >
            {rescue.species} • {rescue.rescueDate} — {rescue.story}
          </CardItem>

          {/* Image with 3D Float Effect */}
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4 overflow-hidden rounded-xl"
          >
            <img
              src={rescue.image}
              alt={rescue.title}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/wetland_bird_rescue.jpg";
              }}
            />
          </CardItem>
        </div>

        {/* Bottom Actions Row (Fixed Uniform Height & Non-wrapping Button) */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/60 gap-2">
          <CardItem
            translateZ={20}
            translateX={-10}
            as="button"
            onClick={() => onSelect(rescue)}
            className="text-xs font-medium text-neutral-600 hover:text-black transition-colors truncate max-w-[58%] text-left"
            title={`Location: ${rescue.location}`}
          >
            Location: {rescue.location} →
          </CardItem>

          <CardItem
            translateZ={20}
            translateX={10}
            as="button"
            onClick={() => onSelect(rescue)}
            className="px-4 py-2.5 rounded-full bg-black text-white text-xs font-bold whitespace-nowrap shrink-0 hover:bg-slate-900 transition-colors shadow-md flex items-center justify-center min-w-[96px]"
          >
            Read Story
          </CardItem>
        </div>

      </CardBody>
    </CardContainer>
  );
}
