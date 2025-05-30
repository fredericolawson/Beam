import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Consulting() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-12 justify-center flex-1">
      <h1 className="heading-1">Consulting</h1>
      <p className="text-lg">
        Thoughtful digital commerce, marketing and brand strategy to local
        businesses and associations in Bermuda.
      </p>
      <a
        href="mailto:hartley@beam.bm?subject=Inquiry"
        className="cta-link underline-spaced"
      >
        Get in touch
      </a>
      <Link
        href="/"
        className=" font-heading uppercase text-accent rounded-sm py-3  mt-auto flex items-center gap-2"
      >
        <MoveLeft size={24} strokeWidth={1} className="text-accent" />
        Back
      </Link>
    </div>
  );
}
