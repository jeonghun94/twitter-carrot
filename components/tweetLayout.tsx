import Head from "next/head";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import useUser from "../lib/client/useUser";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  isHome?: boolean;
}

const Layout = ({ children, isHome }: LayoutProps) => {
  const router = useRouter();
  const locationName = isHome ? "Home" : "Tweet";
  const { user, isLoading } = useUser();
  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  const handleLogout = () => {
    fetch("/api/logout").then(() => (window.location.href = "/"));
  };

  const title = `${locationName} / Twitter`;

  const pathName = router.pathname;

  return (
    <div className="w-full min-h-screen flex">
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://abs.twimg.com/favicons/twitter.2.ico"
          type="image/x-icon"
        />
      </Head>
      <div className="flex flex-col  gap-7 border-r w-[14%]  p-1 py-3  items-center dark:border-r-[#181818]">
        <svg
          onClick={handleHome}
          viewBox="0 0 24 24"
          className="fill-[#1C9BEF] w-7 dark:fill-white"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
        <AiFillHome onClick={handleHome} className="w-7 h-7 cursor-pointer" />
        {/* <IoLogOut
          onClick={handleLogout}
          className="ml-1 w-8 h-8 cursor-pointer"
        /> */}
        {user && (
          <div className="flex text-lg font-semibold justify-center items-center uppercase w-10 h-10 bg-red-500 text-white rounded-full">
            {user.name[0]}
          </div>
        )}
      </div>

      <div className="w-[86%]">
        <div className="mb-3 px-4 py-3 flex">
          {!isHome && (
            <button className="mr-4" onClick={handleBack}>
              <FaArrowLeft />
            </button>
          )}
          <p className="font-semibold text-lg">{locationName}</p>
        </div>

        {isHome && (
          <div className="w-full flex border-b justify-between pb-3 dark:dark:border-b-[#181818]">
            <Link
              href={"/"}
              className="w-full text-center text-sm text-gray-500"
            >
              <span
                className={`${
                  pathName === "/" ? "border-b-2 border-b-[#1C9BEF] pb-3" : ""
                } `}
              >
                For you
              </span>
            </Link>
            <Link
              href={"/following"}
              className="w-full text-center text-sm text-gray-500"
            >
              <span
                className={`${
                  pathName === "/following"
                    ? "border-b-2 border-b-[#1C9BEF] pb-3"
                    : ""
                } `}
              >
                Following
              </span>
            </Link>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Layout;
