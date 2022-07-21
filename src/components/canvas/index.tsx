import { Canvas } from "@react-three/fiber";
import { Cloud, Stars } from "@react-three/drei";
import { ReactNode, Suspense, useContext } from "react";
import { ThemeContext } from "styled-components";
interface TypeChild {
    children: ReactNode;
    style?: any
  }

const BackgroundCanvas = ({children,style} : TypeChild) => {
    const { title } = useContext(ThemeContext);

    return (
        <>
        <Canvas style={style}>
          <Suspense fallback={null}>
            {title === "dark" ? (
              <>
                <Stars
                  radius={40}
                  depth={20}
                  count={3000}
                  factor={4}
                  saturation={1}
                  fade
                />
                <Stars
                  radius={120}
                  depth={10}
                  count={5000}
                  factor={4}
                  saturation={1}
                  fade
                />
              </>
            ) : (
              <>
                <Stars
                  radius={80}
                  depth={20}
                  count={100}
                  factor={2}
                  saturation={1}
                  fade
                />
                <Cloud
                  opacity={0.5}
                  speed={0.5}
                  width={20}
                  depth={1.9}
                  segments={40}
                />
              </>
            )}

            <ambientLight />
          </Suspense>
        </Canvas>
        {children}
        </>
    )
}
export default BackgroundCanvas