import { Canvas } from "@react-three/fiber"
import { Cloud, Html, OrbitControls, Stars } from "@react-three/drei"
import { Suspense, useContext } from "react"
import { ThemeContext } from "styled-components"
import { NavContext } from "../../context/navigate"
import HomeInfoText from "../homeIntroText"

interface TypeProps {
    props?: any
}
const HomeThreeD = ({ props }: TypeProps) => {

    const { title, } = useContext(ThemeContext)
    const { navigate } = useContext(NavContext)

    return (
        <>
            <Canvas style={{ width: "100%", height: "95%" }}>
                <Suspense  fallback={null}>


                    {title === "dark" ?
                        <>
                        <Stars radius={40} depth={40} count={1000} factor={4} saturation={1} fade />
                        <Stars radius={120} depth={30} count={5000} factor={4} saturation={1} fade />
                        </>

                        :

                        < >

                            <Stars radius={80} depth={20} count={100} factor={2} saturation={1} fade />
                            <Cloud
                                opacity={0.5}
                                speed={0.5}
                                width={15}
                                depth={1.7}
                                segments={20} />

                        </>



                    }


                <ambientLight />
                <OrbitControls enableZoom={false} makeDefault {...props}>
                    <Html
                        distanceFactor={4.5}
                        zIndexRange={[100, 0]}
                        transform
                        >
                        <HomeInfoText navigate={navigate} />

                    </Html>
                </OrbitControls>
                        </Suspense>
            </Canvas>

        </>
    )
}
export default HomeThreeD