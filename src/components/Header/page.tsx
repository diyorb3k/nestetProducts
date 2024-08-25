import Link from "next/link";

const Header = () => {
  return (
    <div className="relative bg-blue-600 z-0 p-1px px-[40px] py-[20px] mx-auto w-full">
      {/* Background qismi */}
      <div className="absolute inset-0 w-full h-full bg-blue-500 filter blur-sm"></div>
      
      {/* Text qismi */}
      <div className="relative z-10 flex container items-center gap-10 justify-between">
        <Link href={"/"}>
          <h3 className="text-[red]">Home</h3>
        </Link>
        <Link href={"/about"}>
          <h3>Contact</h3>
        </Link>
        <Link href={"/"}>
          <h3>Blog</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
