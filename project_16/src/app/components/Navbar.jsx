import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-[100%] h-[60px] border flex flex-row sticky top-0 left-0 bg-blue-400 border-blue-500 shadow-sm shadow-gray-300 z-100">
      <div className="w-[50%] flex items-center px-5">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <div className="w-[50%] flex items-center text-white text-[18px] font-bold">
        <ul className="flex flex-row gap-10">
          <li>
            <Link href="/" className="hover:border-b-2 duration-100 hover:text-gray-100">Home</Link>
          </li>
          <li>
            <Link href="/doctorList" className="hover:border-b-2 duration-100 hover:text-gray-100">DoctorsList</Link>
          </li>
          <li>
            <Link href="/about" className="hover:border-b-2 duration-100 hover:text-gray-100">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:border-b-2 duration-100 hover:text-gray-100">Contact</Link>
          </li>
          <li>
            <Link href="/feedback" className="hover:border-b-2 duration-100 hover:text-gray-100">Feedback</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar