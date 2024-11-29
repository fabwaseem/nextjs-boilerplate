import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        "[&::before]:absolute [&::before]:z-10",
        "[&::after]:absolute [&::after]:z-10",
        {
          "[&::before]:left-0 [&::before]:top-0 [&::before]:h-full [&::before]:w-20 [&::before]:bg-gradient-to-r [&::before]:from-background [&::before]:to-transparent": !vertical,
          "[&::after]:right-0 [&::after]:top-0 [&::after]:h-full [&::after]:w-20 [&::after]:bg-gradient-to-l [&::after]:from-background [&::after]:to-transparent": !vertical,
          "[&::before]:left-0 [&::before]:top-0 [&::before]:w-full [&::before]:h-20 [&::before]:bg-gradient-to-b [&::before]:from-background [&::before]:to-transparent": vertical,
          "[&::after]:left-0 [&::after]:bottom-0 [&::after]:w-full [&::after]:h-20 [&::after]:bg-gradient-to-t [&::after]:from-background [&::after]:to-transparent": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
