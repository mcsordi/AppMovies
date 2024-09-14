import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import ScrollTop from "../../Components/ScrollTop";

function BasePage() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
export default BasePage;
