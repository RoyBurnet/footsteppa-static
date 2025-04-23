import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play } from "lucide-react";

const liveShows = [
  {
    channel: "UK",
    name: "GREENTEA SELECTA",
    time: "12:00",
    image: "/placeholder.svg",
    slug: "greentea-selecta-27-02-2025-1200",
  },
  {
    channel: "France",
    name: "MABOUL BASMATI",
    time: "12:00",
    image: "/placeholder.svg",
    slug: "maboul-basmati-27-02-2025-1200",
  },
  {
    channel: "Kool FM",
    name: "Kool Kuts",
    time: "12:00",
    image: "/placeholder.svg",
    slug: "kool-kuts-27-02-2025-1200",
  },
  {
    channel: "SWU FM",
    name: "SPICYIVY",
    time: "12:00",
    image: "/placeholder.svg",
    slug: "spicyivy-27-02-2025-1200",
  },
];

const channels = ["Footsteppa UK", "Footsteppa France", "Kool FM", "SWU FM"];

const upcomingShows = [
  {
    time: "12:00",
    name: "GREENTEA SELECTA",
    description: "ONE IN ONE OUT.",
    image: "/placeholder.svg",
    slug: "greentea-selecta-27-02-2025-1200",
  },
  {
    time: "13:00",
    name: "Talina",
    description:
      "Talina on Footsteppa. Lock in live for the lunch show, every Monday - Thursday from 1 till 3pm.",
    image: "/placeholder.svg",
    slug: "talina-27-02-2025-1300",
  },
  {
    time: "15:00",
    name: "Jyoty",
    description:
      "Jyoty Singh AKA Your Real Life Music Filter. Catch Jyoty live every Thursday 3-5PM. Amsterdam via London. Beats and Love.",
    image: "/placeholder.svg",
    slug: "jyoty-27-02-2025-1500",
  },
  {
    time: "17:00",
    name: "LILA with FELIXCW",
    description:
      "To get in the mood for Lila and Felixcw's B2B at EartH for the R360 show this March, they go head to head for an hour, exploring their favourite funky, house and bruk tunes at the moment.",
    image: "/placeholder.svg",
    slug: "lila-with-felixcw-27-02-2025-1700",
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Schedule</h1>

        {/* Live on air section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Live on air</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveShows.map((show, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="flex items-center p-4">
                  <Image
                    src={show.image || "/placeholder.svg"}
                    alt={show.name}
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-400">{show.channel}</p>
                    <p className="font-semibold">{show.time}</p>
                    <p className="text-sm">{show.name}</p>
                  </div>
                  <Badge variant="outline" className="mr-2">
                    ON AIR
                  </Badge>
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming up section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Coming up</h2>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Full schedule →
            </Link>
          </div>
          <div className="flex space-x-4 mb-6">
            {channels.map((channel, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                <Avatar className="h-4 w-4 mr-2">
                  <AvatarFallback>{channel[0]}</AvatarFallback>
                </Avatar>
                {channel}
              </Button>
            ))}
          </div>
          <div className="space-y-4">
            {upcomingShows.map((show, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg"
              >
                <Image
                  src={show.image || "/placeholder.svg"}
                  alt={show.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <p className="font-semibold mr-2">{show.time}</p>
                    <h3 className="text-lg font-bold">{show.name}</h3>
                    {index === 0 && (
                      <Badge variant="outline" className="ml-2">
                        ON AIR
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    {show.description}
                  </p>
                  <Link
                    href={`/episodes/${show.slug}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    View show →
                  </Link>
                </div>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
