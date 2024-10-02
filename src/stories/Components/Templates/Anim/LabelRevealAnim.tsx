import React, { useEffect, useRef, useState } from "react";
import { Typography, useTheme, Box } from "@mui/material";
import { gsap } from "gsap";
import { reduceFontSizeToFit } from "../../../../utils/textMeasure";

export interface LabelRevealAnimProps {
  /**
   *  Label to be revealed
   */
  label: string;
  /**
   *  max font size for label in px, will be trimmed if label overflows
   */
  maxFontSize: number;
  /**
   * Animation duration in seconds , default 0.5
   */
  animDuration?: number;
  /**
   * Label's final opacity  after animation [0-1], default 1
   */
  finalOpacity?: number;
  onCompletionListener?: () => void;
}

/**
 * 
React FC to animate a label rising from display center to label's top. Designed to be used primarily for animating app label in landing pages. 

 */
const LabelRevealAnim: React.FC<LabelRevealAnimProps> = ({
  label,
  maxFontSize: fontSize,
  animDuration = 0.5,
  finalOpacity = 1,
  onCompletionListener,
}) => {
  const theme = useTheme();
  const labelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [adjustedFontSize, setAdjustedFontSize] = useState(fontSize);

  finalOpacity = Math.max(0, Math.min(1, finalOpacity));
  animDuration = Math.max(0, animDuration);

  useEffect(() => {
    const animLabel = (elem: HTMLElement) => {
      gsap.killTweensOf(elem);
      gsap.set(elem, { y: height, opacity: 0 });
      gsap.fromTo(
        elem,
        { y: height, opacity: 0.1 },
        {
          y: 0,
          opacity: finalOpacity,
          duration: animDuration,
          ease: "power3.inOut",
          onComplete: onCompletionListener,
        }
      );
    };
    if (labelRef.current) {
      const rect = labelRef.current.getBoundingClientRect();
      setHeight(rect.height);
      animLabel(labelRef.current);
    }
  }, [
    height,
    animDuration,
    finalOpacity,
    adjustedFontSize,
    onCompletionListener,
    labelRef,
  ]);

  useEffect(() => {
    const measureText = () => {
      if (labelRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        const labelRect = labelRef.current.getBoundingClientRect();

        const reducedFontsize = reduceFontSizeToFit(
          labelRef.current,
          containerWidth - window.innerWidth * 0.2,
          labelRect.height
        );

        setAdjustedFontSize(reducedFontsize);
      }
    };

    measureText();
  }, [labelRef, containerRef]);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          // position: "relative",
          overflow: "hidden",
          display: "inline-block",
          width: "100vw",
          height: height,
        }}
      >
        <Typography
          ref={labelRef}
          variant="h1"
          // align="center"
          sx={{
            fontSize: adjustedFontSize,
            color: theme.palette.secondary.main,
            // position: "absolute",
            // top: 0,
            // left: 0,
            // right: 0,
            // transform: "translateY(100%)",
            opacity: 0,
            whiteSpace: "nowrap", // Ensure text does not wrap
            // overflow: "hidden", // Hide overflow text
            // textOverflow: "ellipsis", // Add ellipsis for overflow text
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default LabelRevealAnim;
