import Nav from "./components/Nav";
import CenterPhoto from "./components/CenterPhoto";
import CenterContentContainer from "./components/CenterContentContainer";
import NewsContainer from "./components/NewsContainer";
import SecondContentContainer from "./components/SecondContentContainer";
import EmployeesContainer from "./components/EmployeesContainer";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
const FirstIndex = () => {
  return (
    <>
      <Nav />
      <CenterPhoto />
      <CenterContentContainer />
      <NewsContainer />
      <SecondContentContainer />
      <EmployeesContainer />
      <Logo />
      <Footer />
    </>
  );
};

export default FirstIndex;
