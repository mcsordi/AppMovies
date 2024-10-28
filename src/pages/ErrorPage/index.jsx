import Footer from "../../App/components/Footer"
import Header from "../../App/components/Header"

function ErrorPage() {
  return <>
    <Header />
    <div className="flex items-center justify-center flex-col w-full  s">
      <div className="bg-error bg-contain bg-no-repeat
      w-[300px] h-[300px] sm:w-[600px] sm:h-[600px]"></div>
      <div className="absolute block w-full bottom-0">
        <Footer />
      </div>
    </div>

  </>
}
export default ErrorPage
