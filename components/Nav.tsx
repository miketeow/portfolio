"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];
interface NavProps {
  containerStyles: string;
}
const Nav = ({ containerStyles }: NavProps) => {
  const path = usePathname();
  const MotionLink = motion(Link);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };
  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;

    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);

    x.set(xRange * 10);
    y.set(yRange * 10);
  };
  return (
    <nav className={containerStyles}>
      <AnimatePresence>
        {links.map((link, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const x = useMotionValue(0);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useMotionValue(0);
          return (
            <MotionLink
              onPointerMove={(event) => {
                const item = event.currentTarget;
                setTransform(item, event, x, y);
              }}
              onPointerLeave={(event) => {
                x.set(0);
                y.set(0);
              }}
              style={{ x, y }}
              href={link.path}
              key={index}
              className={cn(
                "relative rounded-md px-4 py-2 font-medium capitalize transition-all duration-500 ease-out hover:bg-slate-200",
                path === link.path ? "bg-slate-300" : ""
              )}
            >
              <motion.span className="relative z-10">{link.name}</motion.span>
              {path === link.path ? (
                <motion.div
                  transition={{ type: "spring" }}
                  layoutId="underline"
                  className="bg-primary absolute bottom-0 left-0 h-full w-full rounded-md"
                ></motion.div>
              ) : null}
            </MotionLink>
          );
        })}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
