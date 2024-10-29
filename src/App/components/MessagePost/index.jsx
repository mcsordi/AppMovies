import P from "prop-types"
function MessagePost({ statusMessage }) {
  const messageDiv = (color, text) => {
    return <div className={`text-center text-white font-poppins px-6 py-2 ${color}`}
    >{text}</div>
  }
  if (statusMessage == undefined) {
    return
  }
  return (<div className="mt-8 w-full">
    {statusMessage ? messageDiv("bg-teal-600", "Novo filme Adicionado com sucesso") :
      messageDiv("bg-red-600", "Não foi possivel Adicionar o filme ")
    }</div >)
}
MessagePost.propTypes = {
  statusMessage: P.bool
}
export default MessagePost
