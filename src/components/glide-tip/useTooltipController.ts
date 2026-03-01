import { useCallback, useEffect, useState, type RefObject } from "react";
import type { GlideTipItem } from "./types";

export function useTooltipController(
  items: GlideTipItem[],
  widths: number[],
  controlsRef: RefObject<(HTMLDivElement | null)[]>,
  containerRef: RefObject<HTMLDivElement | null>,
) {
  const [active, setActive] = useState<number | null>(null);
  const [lastActive, setLastActive] = useState(0);
  const [tooltipX, setTooltipX] = useState(0);

  const activeIndex =
    items.length === 0 ? 0 : Math.min(active ?? lastActive, items.length - 1);

  const updatePosition = useCallback(() => {
    const control = controlsRef.current[activeIndex];
    const container = containerRef.current;
    if (!control || !container) return;

    const controlRect = control.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const center =
      controlRect.left - containerRect.left + controlRect.width / 2;

    const currentWidth = widths[activeIndex] ?? 0;

    setTooltipX(center - currentWidth / 2);
  }, [activeIndex, widths, controlsRef, containerRef]);

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  const offset = widths.slice(0, activeIndex).reduce((acc, w) => acc + w, 0);

  return {
    active,
    setActive,
    lastActive,
    setLastActive,
    activeIndex,
    tooltipX,
    offset,
    updatePosition,
  };
}
