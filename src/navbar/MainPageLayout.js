import Navbar from "./Navbar";

const MainPageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainPageLayout;
