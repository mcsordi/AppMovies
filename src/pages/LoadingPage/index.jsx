import { ImSpinner8 } from "react-icons/im";
function LoadingPage() {
  return <section className="bg-blacktone">
    <div className="flex w-full h-screen items-center justify-center">
      <ImSpinner8 className="animate-spin text-4xl text-red-600" />
    </div>
  </section>
}
export default LoadingPage
