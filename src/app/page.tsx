import Link from "next/link";
import { Calendar, Car, Martini, MoveRight, Radar, Ship } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-center items-center flex-1">
      <div className="flex flex-col md:flex-row border-b w-full flex-1">
        <Consulting />
        <Technology />
      </div>
      <Resources />
    </div>
  );
}

function Consulting() {
  return (
    <div className="w-full border-b md:border-b-0 md:border-r flex flex-col justify-center items-center gap-8 p-12 flex-1">
      <div className="max-w-lg flex flex-col gap-4">
        <h2 className="heading-2">Consulting Services</h2>
        <p>
          Delivering thoughtful digital commerce, marketing and brand strategy
          to local businesses and associations.
        </p>
        <Link href="/consulting" className="underline-spaced">
          <MoveRight size={48} strokeWidth={1} className="text-accent" />
        </Link>
      </div>
    </div>
  );
}

function Technology() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 p-12 flex-1">
      <div className="max-w-lg flex flex-col gap-4">
        <h2 className="heading-2">Technology</h2>
        <p>
          Developing and implementing proprietary technology for consumer facing
          buisinesses.
        </p>
        <a href="https://taxis.beam.bm/" className="underline-spaced">
          <MoveRight size={48} strokeWidth={1} className="text-accent" />
        </a>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="max-w-lg p-12 flex-1">
      <h3 className="heading-2 text-center">Resources</h3>
      <ul className="flex flex-col gap-2">
        <LinkItem
          href="https://taxis.beam.bm/"
          icon={<Car className="text-accent" size={28} />}
        >
          Beam Taxi
        </LinkItem>
        <LinkItem
          href="https://www.whatson.bm/"
          icon={<Calendar className="text-accent" size={28} />}
        >
          What&#39;s On Bermuda
        </LinkItem>
        <LinkItem
          href="https://weather.beam.bm/"
          icon={<Radar className="text-accent" size={28} />}
        >
          Weather
        </LinkItem>
        <LinkItem
          href="https://bermudaferries.com/"
          icon={<Ship className="text-accent" size={28} />}
        >
          Bermuda Ferries
        </LinkItem>
        <LinkItem
          href="https://startup-drinks.com/bermuda"
          icon={<Martini className="text-accent" size={28} />}
        >
          Startup Drinks
        </LinkItem>
      </ul>
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
        className="rounded-md bg-background p-2 flex items-center gap-2 hover:text-accent transition-all duration-200 underline-spaced"
      >
        {icon}
        {children}
      </Link>
    </li>
  );
}
