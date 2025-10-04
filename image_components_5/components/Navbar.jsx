import Link from "next/link"

const Navbar = async () => {
  return(
   <header className="w-[100%] h-[60px] border bg-gray-700 flex flex-row font-roboto justify-around items-center sticky top-0 left-0 ">
    <div className="text-white text-2xl font-bold">Logo</div>
    <div>
      <ul className="flex flex-row gap-7 text-white">
        <li>
          <Link href="/" className="bg-blue-400 px-3 py-2 rounded hover:text-black duration-700">Home</Link>
        </li>
        <li>
          <Link href="/about" className="bg-blue-400 px-3 py-2 rounded hover:text-black duration-700">About</Link>
        </li>
        <li>
          <Link href="/contact" className="bg-blue-400 px-3 py-2 rounded hover:text-black duration-700">Contact</Link>
        </li>
        <li>
          <Link href="/service" className="bg-blue-400 px-3 py-2 rounded hover:text-black duration-700">Service</Link>
        </li>
      </ul>
    </div>
   </header>
  )
}
export default Navbar