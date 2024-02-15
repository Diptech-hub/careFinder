import DropdownMenu from "./dropDown";

function Header() {
  return (
    <div>
      <div className="flex flex-row justify-between mx-10 mt-5">
        <strong className="text-2xl text-teal-500">CareFinder</strong>
        <div className="flex flex-row  gap-10 items-center">
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
        <DropdownMenu />
      </div>
      <div className="mt-20">
        <h1 className="text-center text-4xl">
          Find your nearest Health Care provider <br/> in just a few <span className="text-teal-500">clicks!</span></h1>
        <p className="flex justify-center text-sm mt-4">
          We're here to help you simplify the process and connect you with the
          care you need...
        </p>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Header;
