import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Share } from "lucide-react"

// This is a mock function to simulate fetching show data
// In a real application, you would fetch this data from an API or database
function getShowData(slug: string) {
  return {
    name: "[IVY]",
    description: "A dedicated space for DNB/Turbo House and 4x4.",
    genres: ["Jungle"],
    image: "/placeholder.svg",
    recentEpisodes: [
      { title: "[IVY]", date: "18/11/2023", time: "19:00", genres: ["Jungle"], image: "/placeholder.svg" },
      { title: "End of Summer Mix", date: "14/09/2023", time: "19:00", genres: ["Jungle"], image: "/placeholder.svg" },
      { title: "Boomtown Set 2023", date: "17/08/2023", time: "19:00", genres: ["Jungle"], image: "/placeholder.svg" },
      { title: "[IVY]", date: "13/07/2023", time: "19:00", genres: ["Jungle"], image: "/placeholder.svg" },
      {
        title: "[IVY]",
        date: "15/06/2023",
        time: "19:00",
        genres: ["Drum & Bass", "Hardcore", "Dancehall"],
        image: "/placeholder.svg",
      },
      { title: "[IVY]", date: "20/05/2023", time: "15:00", genres: ["Jungle"], image: "/placeholder.svg" },
      { title: "[IVY]", date: "27/04/2023", time: "19:00", genres: ["Jungle"], image: "/placeholder.svg" },
    ],
  }
}

export default function ShowPage({ params }: { params: { slug: string } }) {
  const show = getShowData(params.slug)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={show.image || "/placeholder.svg"}
          alt={show.name}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-6xl font-bold mb-2">{show.name}</h1>
          <p className="text-xl mb-4">{show.description}</p>
          <div className="flex items-center gap-4">
            {show.genres.map((genre, index) => (
              <Badge key={index} variant="secondary">
                {genre}
              </Badge>
            ))}
            <Button variant="outline" size="sm" className="gap-2">
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Recent episodes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {show.recentEpisodes.map((episode, index) => (
            <Link href="#" key={index} className="group">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-2">
                <Image
                  src={episode.image || "/placeholder.svg"}
                  alt={episode.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <Avatar className="h-6 w-6 bg-black">
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <h3 className="font-semibold text-sm group-hover:underline">{episode.title}</h3>
              <p className="text-xs text-gray-400">
                {episode.date} {episode.time}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {episode.genres.map((genre, genreIndex) => (
                  <Badge key={genreIndex} variant="outline" className="text-[10px] py-0">
                    {genre}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
