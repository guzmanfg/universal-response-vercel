import Navbar from "@/components/navbar";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="py-12">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl">{children}</div>
      </div>
    </>
  );
}
