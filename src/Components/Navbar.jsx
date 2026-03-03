const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="flex justify-between items-center p-5 bg-blue-300">
            <div className="text-4xl font-bold"> <a href="#">LOGO</a> </div>
            <ul className="flex justify-between gap-20 text-xl ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">About </a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="text-white bg-blue-600 p-3 rounded-2xl font-bold cursor-pointer">Join Now</button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
