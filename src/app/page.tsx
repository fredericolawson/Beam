import Link from "next/link";
import { Calendar, Car, Martini, Radar, Ship } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full mb-18">
        <h1 className="text-4xl font-bold">beam</h1>
        <p className="text-lg">Digital Services for Bermuda</p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <Consulting />
        <span className="h-66 my-auto flex-grow w-[4px] bg-accent hidden md:block" />
        <span className="mx-auto w-2/3 my-auto flex-grow h-[4px] bg-accent block md:hidden" />
        <Products />
      </div>
    </div>
  );
}

function Consulting() {
  return (
    <div className="w-full">
      <h2 className="heading-2">Consulting</h2>
      <p>Digital commerce & brand strategy for Bermuda businesses</p>
    </div>
  );
}

function Products() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div>
        <h2 className="heading-2">Technology</h2>
        <ul>
          <LinkItem href="https://taxis.beam.bm/" icon={<Car />}>
            Beam Taxi
          </LinkItem>
        </ul>
      </div>
      <div>
        <h3 className="heading-2">Resources</h3>
        <ul className="flex flex-col gap-2">
          <LinkItem href="https://weather.beam.bm/" icon={<Radar />}>
            Weather
          </LinkItem>
          <LinkItem href="https://bermudaferries.com/" icon={<Ship />}>
            Bermuda Ferries
          </LinkItem>
          <LinkItem href="https://www.whatson.bm/" icon={<Calendar />}>
            What&#39;s On Bermuda
          </LinkItem>
          <LinkItem
            href="https://startup-drinks.com/bermuda"
            icon={<Martini />}
          >
            Startup Drinks
          </LinkItem>
        </ul>
      </div>
    </div>
  );
}

function LinkItem({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="rounded-md bg-background text-primary border border-primary p-2 flex items-center gap-2  hover:text-accent hover:border hover:border-accent transition-all duration-200"
      >
        {icon}
        {children}
      </Link>
    </li>
  );
}
