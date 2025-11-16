import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between py-4 px-8 shadow-sm bg-white">
        {/* Logo */}
        <div className="text-xl font-bold">logo</div>  

        {/* Login and Sign up at right corner */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-black px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Login
          </Link>
          <div className="h-6 w-px bg-gray-300"></div>
          <Link to="/signup" className="text-black px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Sign up
          </Link>
        </div>
      </nav>
      <main className="px-8 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
