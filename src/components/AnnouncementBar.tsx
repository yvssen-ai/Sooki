"use client";

const MESSAGES = [
  "FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $100",
  "NEW DROP — SYMBOLS OF POWER COLLECTION",
  "LIFETIME AUTHENTICITY GUARANTEE",
];

export default function AnnouncementBar() {
  const loopItems = [...MESSAGES, ...MESSAGES, ...MESSAGES];

  return (
    <div className="relative z-[60] w-full overflow-hidden border-b border-gold/15 bg-black py-2 text-[10px] tracking-[0.25em] text-gold/80">
      <div className="flex w-max animate-marquee-slow items-center whitespace-nowrap">
        {loopItems.map((msg, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-medium">{msg}</span>
            <span className="text-gold/40">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
