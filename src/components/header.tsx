import Link from "next/link";

export function Header() {
  return (
    <header className="relative flex justify-between md:justify-center items-center p-8 border-b ">
      <Logo />
      <div className="absolute right-4 inset-y-0 flex items-center">
        <Contact />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex flex-col md:items-center gap-2">
      <h1 className="text-5xl tracking-wide">beam</h1>
      <p className="text-md text-accent tracking-widest uppercase px-1">
        bermuda
      </p>
    </Link>
  );
}

function Contact() {
  return (
    <a
      href="mailto:freddie@beam.bm,hartley@beam.bm?subject=Inquiry"
      className="cta"
    >
      Contact
    </a>
  );
}
