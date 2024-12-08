import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-white border p-8 sm:px-10 mt-2">
      <p className=" text-sm/6 text-gray-600 ">
        This is a sandbox for web development practicing. It's a reasonably
        simple app to show how data is received from servers (backend code) when
        a request was done (typically from a form).
      </p>

      <div className="px-4 py-3 sm:flex sm:px-6 inline-flex w-full justify-center ">
        <Link
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          href="/practice"
        >
          Getting Started with Universal Response
        </Link>
        <Link
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm shadow-sm hover:bg-gray-50 sm:ml-3 sm:w-auto border"
          href="https://github.com/guzmanfg/universal-response-vercel"
          target="_blank"
        >
          Source on GitHub
        </Link>
      </div>
    </div>
  );
}
