import Link from "next/link"

const Navbar = async () => {
  return(
  <header className="w-[100%] h-[60px] bg-amber-600 flex flex-row justify-around items-center">
    <div className="text-xl font-bold">Logo</div>
    <ul className="flex flex-row gap-5 text-white">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/service">Service</Link>
      </li>
    </ul>
  </header>
  )
}
export default Navbar