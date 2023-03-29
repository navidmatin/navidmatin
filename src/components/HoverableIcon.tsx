import React, { useCallback, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { MouseEvent } from "react";

export default function HoverableIcon({
  icon,
  action,
  size = "5x",
  color = null,
}: {
  icon: IconDefinition;
  action?: "spin" | "fade" | "bounce";
  size?: SizeProp;
  color?: string | any;
}) {
  const [isHovering, setHover] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const onMouseEnter = useCallback(() => {
    if (timer) clearTimeout(timer);
    setHover(true);
  }, []);
  const onMouseExit = useCallback((event: MouseEvent<SVGSVGElement>) => {
    const newTimer = setTimeout(() => {
      setHover(false);
    }, 250);
    setTimer(newTimer);
  }, []);
  return (
    <FontAwesomeIcon
      icon={icon}
      onMouseEnter={onMouseEnter}
      color={color}
      onMouseLeave={onMouseExit}
      spin={action === "spin" && isHovering}
      size={size}
      fade={action === "fade" && isHovering}
      bounce={action === "bounce" && isHovering}
      // style={{ "--fa-animation-duration": "0.5s" }}
    />
  );
}
