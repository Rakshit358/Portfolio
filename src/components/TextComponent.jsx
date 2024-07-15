import React, { useEffect, useState } from "react";

const texts = [
  "Competitive Programmer",
  "Web Developer",
  "Machine Learning Enthusiast",
];

const TextTransition = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timeoutFadeOut = 1000; // Time to wait before starting to fade out
    const intervalTime = 150; // Time between letters

    const effect = () => {
      if (isFading) return; // Prevent updates during fading

      if (letterIndex < texts[index].length) {
        setCurrentText(currentText + texts[index][letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else {
        // Start fading out after the full text is displayed
        setIsFading(true);
        setTimeout(() => {
          setCurrentText(""); // Clear current text after fading
          setLetterIndex(0);
          setIndex((index + 1) % texts.length);
          setIsFading(false);
        }, timeoutFadeOut);
      }
    };

    const interval = setInterval(effect, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [currentText, letterIndex, index, isFading]);

  return (
    <h1
      className={`text-[22px] font-[450] transition-opacity duration-1000 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {currentText}
    </h1>
  );
};

export default TextTransition;
