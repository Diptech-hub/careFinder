import DropdownMenu from "./dropDown";

function Header() {
  return (
    <div className="flex flex-row justify-between mx-10 mt-5">
      <strong className="text-2xl text-teal-500">CareFinder</strong>
      <div className="flex flex-row  gap-10 items-center">
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
        <DropdownMenu/>
    </div>
  );
}

export default Header;
