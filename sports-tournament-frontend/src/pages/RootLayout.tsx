import { Outlet, useNavigation } from "react-router-dom";
import Header from "../shared/Header";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {navigation.state === "loading" ? <span>Loading...</span> : <Outlet />}
      </main>
    </>
  );
};
export default RootLayout;
