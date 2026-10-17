import type React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "mark";
  mode?: "light" | "dark" | "auto";
  className?: string;
  height?: number;
  width?: number;
  size?: number;
  style?: React.CSSProperties;
}

export default function Logo({
  variant = "full",
  mode = "auto",
  className,
  height,
  width,
  size,
  style,
}: LogoProps) {
  if (variant === "mark") {
    const dim = size || height || 28;
    return (
      <Image
        src="/assets/favicon.svg"
        alt="Realtor-Go"
        width={dim}
        height={dim}
        className={className}
        style={{
          width: `${dim}px`,
          height: `${dim}px`,
          flexShrink: 0,
          ...style,
        }}
        priority
      />
    );
  }

  // Full Horizontal Logo
  const h = height || size || 42;
  const w = width || Math.round(h * 3.8);

  if (mode === "dark") {
    return (
      <Image
        src="/assets/logo_dark.svg"
        alt="Realtor-Go"
        width={w}
        height={h}
        className={className}
        style={{
          height: `${h}px`,
          width: "auto",
          flexShrink: 0,
          display: "block",
          ...style,
        }}
        priority
      />
    );
  }

  if (mode === "light") {
    return (
      <Image
        src="/assets/logo_light.svg"
        alt="Realtor-Go"
        width={w}
        height={h}
        className={className}
        style={{
          height: `${h}px`,
          width: "auto",
          flexShrink: 0,
          display: "block",
          ...style,
        }}
        priority
      />
    );
  }

  // "auto": renders the light asset by default, and dark asset when in dark/scrolled contexts via CSS
  return (
    <span
      className={`logo-img-wrap ${className || ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        flexShrink: 0,
        ...style,
      }}
    >
      <Image
        src="/assets/logo_light.svg"
        alt="Realtor-Go"
        width={w}
        height={h}
        className="logo-img-light"
        style={{
          height: `${h}px`,
          width: "auto",
          display: "block",
        }}
        priority
      />
      <Image
        src="/assets/logo_dark.svg"
        alt="Realtor-Go"
        width={w}
        height={h}
        className="logo-img-dark"
        style={{
          height: `${h}px`,
          width: "auto",
          display: "none",
        }}
        priority
      />
    </span>
  );
}
