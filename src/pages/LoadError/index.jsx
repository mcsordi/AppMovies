function LoadError() {
  return <>
    <div className="flex items-center justify-center flex-col w-full  s">
      <div className="bg-error bg-contain bg-no-repeat
    w-[300px] h-[300px] sm:w-[600px] sm:h-[600px]"></div>
      <h2 className="text-white font-poppins text-2xl">
        Ocorreu um erro inesperado, Favor atualizar a página e tentar novamente</h2>
      <div className="absolute block w-full bottom-0">

      </div>
    </div>

  </>
} export default LoadError
