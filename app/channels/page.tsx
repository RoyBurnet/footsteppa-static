import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Play } from "lucide-react"

const channels = [
  {
    name: "Rinse UK",
    description: "The original Rinse FM channel broadcasting from London since 1994.",
    image: "/placeholder.svg",
    slug: "uk",
    currentShow: {
      name: "Oneman",
      time: "12:00 - 14:00",
    },
    upcomingShows: [
      { name: "Jyoty", time: "14:00 - 16:00" },
      { name: "Eliza Rose", time: "16:00 - 18:00" },
      { name: "Sherelle", time: "18:00 - 20:00" },
    ],
  },
  {
    name: "Rinse France",
    description: "Broadcasting from Paris, bringing you the best in French electronic music.",
    image: "/placeholder.svg",
    slug: "france",
    currentShow: {
      name: "Maboul Basmati",
      time: "12:00 - 14:00",
    },
    upcomingShows: [
      { name: "Eloq", time: "14:00 - 16:00" },
      { name: "Carin Kelly", time: "16:00 - 18:00" },
      { name: "Ygal Ohayon", time: "18:00 - 20:00" },
    ],
  },
  {
    name: "Kool FM",
    description: "The home of jungle and drum & bass since 1991.",
    image: "/placeholder.svg",
    slug: "kool",
    currentShow: {
      name: "Kool Kuts",
      time: "12:00 - 14:00",
    },
    upcomingShows: [
      { name: "Born On Road", time: "14:00 - 16:00" },
      { name: "Collette Warren", time: "16:00 - 18:00" },
      { name: "Turno", time: "18:00 - 20:00" },
    ],
  },
  {
    name: "SWU FM",
    description: "South West Underground - Bristol's underground music station.",
    image: "/placeholder.svg",
    slug: "swu",
    currentShow: {
      name: "SPICYIVY",
      time: "12:00 - 14:00",
    },
    upcomingShows: [
      { name: "Addison Groove", time: "14:00 - 16:00" },
      { name: "Sepia", time: "16:00 - 18:00" },
      { name: "Surgeons Girl", time: "18:00 - 20:00" },
    ],
  },
]

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Channels</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {channels.map((channel) => (
            <div key={channel.slug} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={channel.image || "/placeholder.svg"} alt={channel.name} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-2xl font-bold">{channel.name}</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400 mb-4">{channel.description}</p>

                {/* Current Show */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">On Air Now</h3>
                  <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{channel.currentShow.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{channel.currentShow.name}</p>
                        <p className="text-sm text-gray-400">{channel.currentShow.time}</p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Upcoming Shows */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Coming Up</h3>
                  <div className="space-y-2">
                    {channel.upcomingShows.map((show, index) => (
                      <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-800 rounded-lg">
                        <div>
                          <p className="font-medium">{show.name}</p>
                          <p className="text-sm text-gray-400">{show.time}</p>
                        </div>
                        <Badge variant="outline">UPCOMING</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <Link href={`/channels/${channel.slug}`}>
                    <Button variant="outline" className="w-full">
                      View Channel
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
