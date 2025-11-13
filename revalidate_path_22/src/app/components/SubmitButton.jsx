import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {

  const {pending, data, method, action} = useFormStatus()
  return (
    <button
    type="submit"
    disabled={pending}
    className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition"
  >
    {pending ? (<span>Loading....</span>) : (<span>Send Message</span>)}
  </button>
  )
}

export default SubmitButton