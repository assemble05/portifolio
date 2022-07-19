import { ReactNode } from "react";
import NavProvider from "./navigate";
import ThemePovider from "./theme";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemePovider>
      <NavProvider>{children}</NavProvider>
    </ThemePovider>
  );
};
export default Providers;
