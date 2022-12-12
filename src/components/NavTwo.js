const NavTwo = () => {
  return (
    <nav className="w-full shadow-xl left-0 top-0 bg-stone-800 text-indigo-400"> 
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7 ">
            <ul className="font-bold mr-5 md:text-lg text-sm cursor-pointer flex items-center font[Poppins]">
                <li className="px-2 hover:underline">Clothes</li>
                <li className="px-2 hover:underline">Shoes</li>
                <li className="px-2 hover:underline">Dresses</li>
                <li className="px-2 hover:underline">Bags</li>
                <li className="px-2 hover:underline">Accesories</li>
                <li className="px-2 hover:underline">Shopping Cart</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavTwo