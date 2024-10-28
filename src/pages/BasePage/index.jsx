import { Outlet } from "react-router-dom"
import Header from "../../App/components/Header"
import Footer from "../../App/components/Footer"
import Container from "../../App/components/Container"
function BasePage() {
  return <>
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  </>
}
export default BasePage
