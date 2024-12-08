import Image from "next/image";
import searchScreenCapture from "@/images/01-search.png";
import signInScreenCapture from "@/images/02-sign-in.png";
import signUpScreenCapture from "@/images/03-sign-up.png";
import Link from "next/link";

export default function Practice({ data }: { data: any }) {
  return (
    <>
      <div className="relative bg-white border">
        <p className="p-8 sm:px-10 mt-2 text-sm/6 text-gray-600 ">
          These practices are prepared to attack with this page as a server.
          This page will only show what your form is sending as a request no
          matter if data is in URL (query) or as payload within body.
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative lg:row-span-2 flex h-full flex-col overflow-hidden bg-white border">
          <div className="p-8 sm:px-10">
            <h2 className="mt-2 text-lg font-medium tracking-tight text-gray-950">
              Search form
            </h2>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
              Try to code form in picture without paying attention to styling:
            </p>
            <Image
              className="mt-2"
              src={searchScreenCapture}
              alt="Search form"
            />
            <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc">
              <li>
                Radio buttons should be in the same group (one selected at time)
              </li>
              <li>
                <strong>All</strong> option should be selected by default
              </li>
              <li>Send form using GET</li>
            </ul>

            <Link
              className="inline-block mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="/files/01-search.zip"
            >
              Download practice 1
            </Link>
          </div>
        </div>
        <div className="relative lg:row-span-2 flex h-full flex-col overflow-hidden bg-white border">
          <div className="p-8 sm:px-10">
            <h2 className="mt-2 text-lg font-medium tracking-tight text-gray-950">
              Login form
            </h2>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
              Try to code form in picture without paying attention to styling:
            </p>
            <Image src={signInScreenCapture} alt="Login form" />
            <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc">
              <li>Checkbox should be selected by default</li>
              <li>Send form using POST</li>
            </ul>

            <Link
              className="inline-block mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="/files/02-sign-in.zip"
            >
              Download practice 2
            </Link>
          </div>
        </div>
        <div className="relative lg:row-span-2 flex h-full flex-col overflow-hidden bg-white border">
          <div className="p-8 sm:px-10">
            <h2 className="mt-2 text-lg font-medium tracking-tight text-gray-950">
              Sign up form
            </h2>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
              Try to code form in picture without paying attention to styling:
            </p>
            <Image src={signUpScreenCapture} alt="Sign-up form" />
            <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc">
              <li>
                Dropdown list contains: <strong>Admin</strong> and{" "}
                <strong>User</strong>
              </li>
              <li>Send form using POST</li>
            </ul>

            <Link
              className="inline-block mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="/files/03-sign-up.zip"
            >
              Download practice 3
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
