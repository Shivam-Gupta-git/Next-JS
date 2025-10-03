import Link from "next/link"

const Navbar = async () => {
  return(
   <header className="h-[50px] w-[100%] bg-gray-300 flex flex-row justify-around items-center">
    <div className="text-xl">Logo</div>
    <ul className="flex flex-row gap-5">
      <li>
        <Link href="/" className="text-xl hover:border-b-1 font-light">Home</Link>
      </li>
      <li>
        <Link href="/about" className="text-xl hover:border-b-1 font-light">about</Link>
      </li>
      <li>
        <Link href="/contact" className="text-xl hover:border-b-1 font-light">contact</Link>
      </li>
      <li>
        <Link href="/service" className="text-xl hover:border-b-1 font-light">service</Link>
      </li>
    </ul>

   </header>
  )
}
export default Navbar