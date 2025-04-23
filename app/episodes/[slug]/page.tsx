import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play, Share } from "lucide-react";

// This is a mock function to simulate fetching episode data
// In a real application, you would fetch this data from an API or database
function getEpisodeData(slug: string) {
  return {
    title: "GREENTEA SELECTA",
    channel: "Footsteppa UK",
    date: "27/02/2025",
    time: "12:00",
    genres: ["Jazz", "Experimental"],
    description: "JAZZ EXPERIMENTAL",
    image: "/placeholder.svg",
    artist: "Greentea Peng",
    moreEpisodes: [
      {
        title: "GREEN FREE",
        date: "23/01/2025",
        time: "12:00",
        genres: ["Electronic", "House", "Breakbeat"],
        image: "/placeholder.svg",
      },
      {
        title: "CELEBRATION OF THE WAXING MOON",
        date: "24/10/2024",
        time: "12:00",
        genres: ["Electronic"],
        image: "/placeholder.svg",
      },
      {
        title: "feat. Birdsong",
        date: "26/09/2024",
        time: "12:00",
        genres: [],
        image: "/placeholder.svg",
      },
      {
        title: "CARNIVAL SPESH",
        date: "22/08/2024",
        time: "12:00",
        genres: ["Dancehall", "Dub", "Reggae"],
        image: "/placeholder.svg",
      },
      {
        title: "SOL ON SOL MUITO SOL",
        date: "31/07/2024",
        time: "12:00",
        genres: ["Disco", "Breakbeat", "Jazz"],
        image: "/placeholder.svg",
      },
    ],
  };
}

export default function EpisodePage({ params }: { params: { slug: string } }) {
  const episode = getEpisodeData(params.slug);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src={episode.image || "/placeholder.svg"}
              alt={episode.title}
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback>{episode.channel[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{episode.channel}</span>
              <Badge variant="outline">ON AIR</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-2">{episode.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-400">
                {episode.date} {episode.time}
              </span>
              <div className="flex gap-2">
                {episode.genres.map((genre, index) => (
                  <Badge key={index} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                Listen
              </Button>
              <Button variant="outline" className="gap-2">
                <Share className="h-4 w-4" />
                Share
              </Button>
            </div>
            <p className="text-gray-400 mb-8">{episode.description}</p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            More from {episode.artist}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {episode.moreEpisodes.map((ep, index) => (
              <Link href="#" key={index} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-2">
                  <Image
                    src={ep.image || "/placeholder.svg"}
                    alt={ep.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-sm group-hover:underline">
                  {ep.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {ep.date} {ep.time}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {ep.genres.map((genre, genreIndex) => (
                    <Badge
                      key={genreIndex}
                      variant="outline"
                      className="text-[10px] py-0"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt={episode.artist}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h2 className="text-4xl font-bold mb-4">{episode.artist}</h2>
              <Button variant="outline">View show</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
