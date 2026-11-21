/* 
 * FILE: components/sections/RealitySection.js 
 * PURPOSE: 
 * Problem-solution section addressing the operational realities of cement distribution. 
 * 
 * RESPONSIBILITIES: 
 * - Render section heading (eyebrow, title, lead description)
 * - Render the real cement-business railway-rake visual beside the section copy
 * - Render 3 core cement challenge cards (Transit vs Godown Stock, Lifting & Challan Processing, Connected Sales & Ledgers) 
 * 
 * DEPENDENCIES: 
 * - next/image 
 * - @/content/siteContent 
 * - @/components/ui/BrandText 
 * 
 * NOTES: 
 * - Answers Question 5: What specific problems does it solve? 
 * - Uses the centralized BrandText renderer for visible "ai flow" brand mentions. 
 */ 
 
import Image from "next/image"; 
import { BrandText } from "@/components/ui/BrandText"; 
import { content } from "@/content/siteContent"; 
 
export function RealitySection() { 
  const reality = content.realitySection; 
 
  if (!reality || !reality.challenges || reality.challenges.length === 0) { 
    return null; 
  } 
 
  return ( 
    <section className="reality-section section"> 
      <div className="container"> 
        <div className="reality-feature"> 
          <div className="reality-copy"> 
            {reality.eyebrow && ( 
              <p className="eyebrow">{reality.eyebrow}</p> 
            )} 
 
            {reality.title && ( 
              <h2> 
                <BrandText text={reality.title} /> 
              </h2> 
            )} 
 
            {reality.description && ( 
              <p className="section-lead"> 
                <BrandText text={reality.description} /> 
              </p> 
            )} 
          </div> 
 
          {reality.image && ( 
            <div className="reality-image"> 
              <Image 
                src={reality.image} 
                alt="Cement bags being unloaded from a railway freight wagon" 
                width={1600} 
                height={900} 
                sizes="(max-width: 768px) 100vw, 50vw" 
                priority={true} 
                style={{ width: "100%", height: "auto", display: "block" }}
              /> 
            </div> 
          )} 
        </div> 
 
        <div className="reality-grid"> 
          {reality.challenges.map((challenge, index) => ( 
            <div 
              className="reality-card" 
              key={challenge.title || index} 
            > 
              <span className="reality-badge"> 
                {challenge.number || String(index + 1).padStart(2, "0")} 
              </span> 
 
              <h3> 
                <BrandText text={challenge.title} /> 
              </h3> 
 
              <p> 
                <BrandText text={challenge.description} /> 
              </p> 
            </div> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
} 