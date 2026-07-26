import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block shrink-0", className)}>
      <Image src="/images/eye-of-horus-logo.png" alt="Sooki" fill className="object-contain" priority />
    </span>
  );
}
