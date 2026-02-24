import { useMouseFollower } from "@/hooks/useMouseFollower";

export default function MouseFollower() {
  const mousePosition = useMouseFollower();

  return (
    <div
      className="fixed pointer-events-none w-80 h-80 rounded-full blur-3xl opacity-40 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 100%)",
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: "translate(-50%, -50%)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
        zIndex: 1,
      }}
    />
  );
}
