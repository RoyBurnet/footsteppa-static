import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const channels = [
  { name: "Rinse UK", slug: "uk" },
  { name: "Rinse France", slug: "france" },
  { name: "Kool FM", slug: "kool" },
  { name: "SWU FM", slug: "swu" },
]

const tags = [
  "Amapiano",
  "Ambient",
  "Bass",
  "Breakbeat",
  "Broken Beat",
  "Dancefloor",
  "Dancehall",
  "Disco",
  "Drum & Bass",
  "Dub",
  "Dubstep",
  "Electro",
  "Electronic",
  "Experimental",
  "Footwork",
  "Funk",
  "Garage",
  "Grime",
  "Hardcore",
  "Hip-Hop",
  "House",
  "Jazz",
  "Jungle",
  "Latin",
]

const artists = [
  {
    name: "[IVY]",
    description: "A dedicated space for DNB/Turbo House and 4x4.",
    image: "/placeholder.svg",
    tags: ["Jungle"],
  },
  {
    name: "[re]sources",
    description: "[re]sources est un label parisien piloté par le DJ et producteur Tommy Kid.",
    image: "/placeholder.svg",
    tags: ["Bass", "Funky", "Dubstep", "Footwork", "Garage"],
  },
  {
    name: "@ouicestpaul",
    description: "",
    image: "/placeholder.svg",
    tags: ["House"],
  },
  {
    name: "0079",
    description: "",
    image: "/placeholder.svg",
    tags: ["Dubstep", "Experimental", "Multigenre"],
  },
]

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">Artists</h1>
        </div>

        {/* Filters */}
        <div className="space-y-8 mb-12">
          {/* Channel Filter */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4">Filter by channel</h2>
            <div className="flex flex-wrap gap-3">
              {channels.map((channel) => (
                <Button key={channel.slug} variant="outline" className="rounded-full border-gray-800 hover:bg-gray-800">
                  <Avatar className="h-5 w-5 mr-2">
                    <AvatarFallback className="text-xs bg-gray-800">{channel.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{channel.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4">Filter by tag</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full px-3 py-1 text-sm border-gray-800 hover:bg-gray-800 cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Letter Filter */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4">Filter by letter</h2>
            <div className="flex flex-wrap gap-2">
              {[..."abcdefghijklmnopqrstuvwxyz#"].map((letter) => (
                <Button
                  key={letter}
                  variant="ghost"
                  className="h-8 w-8 p-0 text-sm text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-900/80 transition-colors"
            >
              <div className="aspect-square relative">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>
                {artist.description && <p className="text-sm text-gray-400 mb-3 line-clamp-2">{artist.description}</p>}
                <div className="flex flex-wrap gap-2">
                  {artist.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
