import { useState, useEffect } from "react";

export default function FullTypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  const fullText = "I build intelligent AI agents\nthat automate businesses.";
  const deleteToText = "I build intelligent AI agents\nthat automate businesses.";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 80);
      } else {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setPhase("waiting");
        }, 2000);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 1000);
    } else if (phase === "deleting") {
      if (displayText.length > deleteToText.length) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        // Wait before starting to type again
        timeout = setTimeout(() => {
          setDisplayText("");
          setPhase("typing");
        }, 1500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, fullText, deleteToText]);

  const lines = displayText.split("\n");

  return (
    <div>
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-300 mb-2">
        {lines[0]}
        {lines.length === 1 && <span className="animate-cursor-blink">|</span>}
      </h2>
      {lines.length > 1 && (
        <p className="text-3xl lg:text-5xl font-bold text-[#64FFDA]">
          {lines[1]}
          <span className="animate-cursor-blink">|</span>
        </p>
      )}
    </div>
  );
}
