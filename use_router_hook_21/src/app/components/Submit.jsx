import { useFormStatus } from "react-dom"


function Submit() {
  const {pending, data, method, action} = useFormStatus()
  return (
    <button type="submit"
    disabled={pending}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
    {pending ? (<span>Loading...</span>) : (<span>Send Message</span>)}
   </button>
  )
}

export default Submit