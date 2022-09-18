import { Stage, Text } from "@inlet/react-pixi";
import React, { useEffect, useRef } from "react";

import { useForceUpdate } from "../../hooks/force-update";

export const Canvas = () => {
  const container = useRef<HTMLDivElement>(null);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const resizeListener = () => forceUpdate();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div ref={container} style={{ width: "100%", height: 300 }}>
      <Stage
        options={{
          antialias: true,
          backgroundAlpha: 0.5,
          backgroundColor: 0xffffff,
        }}
        width={container.current?.clientWidth}
        height={300}
      >
        <Text text="Hello" style={{ fill: "red" }} />
      </Stage>
    </div>
  );
};
