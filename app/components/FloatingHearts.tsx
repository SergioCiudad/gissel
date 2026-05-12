"use client";

const items = ["🩷", "✨", "💗", "🌸", "✦", "💕"];

export default function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${5 + Math.random() * 90}%`,
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 12}s`,
            fontSize: `${0.6 + Math.random() * 0.8}rem`,
          }}
        >
          {items[i % items.length]}
        </span>
      ))}
    </div>
  );
}
