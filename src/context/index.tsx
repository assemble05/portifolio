import { ReactNode } from "react"
import ThemePovider from "./theme"


interface ProvidersProps {
    children: ReactNode
  }

const Providers =({children} : ProvidersProps) => {
 return <ThemePovider>{children}</ThemePovider>
}
export default Providers