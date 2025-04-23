import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play, Calendar, Clock } from "lucide-react";

// This is a mock function to simulate fetching channel data
function getChannelData(slug: string) {
  const channels = {
    uk: {
      name: "Footsteppa UK",
      description:
        "The original Footsteppa FM channel broadcasting from London since 1994.",
      image: "/placeholder.svg",
      currentShow: {
        name: "Oneman",
        time: "12:00 - 14:00",
        image: "/placeholder.svg",
      },
      schedule: [
        {
          day: "Monday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Jyoty", time: "10:00 - 12:00" },
            { name: "Oneman", time: "12:00 - 14:00" },
            { name: "Eliza Rose", time: "14:00 - 16:00" },
            { name: "Sherelle", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Tuesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Emerald", time: "10:00 - 12:00" },
            { name: "Jossy Mitsu", time: "12:00 - 14:00" },
            { name: "Anz", time: "14:00 - 16:00" },
            { name: "NAINA", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Wednesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Tash LC", time: "10:00 - 12:00" },
            { name: "Scratcha DVA", time: "12:00 - 14:00" },
            { name: "Josey Rebelle", time: "14:00 - 16:00" },
            { name: "Kode9", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Thursday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Novelist", time: "10:00 - 12:00" },
            { name: "Goldie", time: "12:00 - 14:00" },
            { name: "Interplanetary Criminal", time: "14:00 - 16:00" },
            { name: "Yung Singh", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Friday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Greentea Selecta", time: "10:00 - 12:00" },
            { name: "Lil Silva", time: "12:00 - 14:00" },
            { name: "DJ Millz", time: "14:00 - 16:00" },
            { name: "Oneman", time: "16:00 - 18:00" },
          ],
        },
      ],
      recentShows: [
        {
          name: "Sofia Kourtesis",
          date: "27/02/2025",
          image: "/placeholder.svg",
        },
        { name: "Eliza Rose", date: "21/02/2025", image: "/placeholder.svg" },
        { name: "Jyoty", date: "15/02/2025", image: "/placeholder.svg" },
        { name: "Sherelle", date: "08/02/2025", image: "/placeholder.svg" },
        { name: "Oneman", date: "01/02/2025", image: "/placeholder.svg" },
        { name: "Goldie", date: "25/01/2025", image: "/placeholder.svg" },
      ],
    },
    france: {
      name: "Footsteppa France",
      description:
        "Broadcasting from Paris, bringing you the best in French electronic music.",
      image: "/placeholder.svg",
      currentShow: {
        name: "Maboul Basmati",
        time: "12:00 - 14:00",
        image: "/placeholder.svg",
      },
      schedule: [
        {
          day: "Monday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Chloe Sarramea", time: "10:00 - 12:00" },
            { name: "Maboul Basmati", time: "12:00 - 14:00" },
            { name: "Eloq", time: "14:00 - 16:00" },
            { name: "Carin Kelly", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Tuesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Poté", time: "10:00 - 12:00" },
            { name: "Ygal Ohayon", time: "12:00 - 14:00" },
            { name: "Lil Rosy", time: "14:00 - 16:00" },
            { name: "GREG", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Wednesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Otis", time: "10:00 - 12:00" },
            { name: "Lexxi", time: "12:00 - 14:00" },
            { name: "Lila", time: "14:00 - 16:00" },
            { name: "De Grandi", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Thursday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Eclecticist", time: "10:00 - 12:00" },
            { name: "Serenda", time: "12:00 - 14:00" },
            { name: "Hewan Aman", time: "14:00 - 16:00" },
            { name: "Sofia Kourtesis", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Friday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Felix Joy", time: "10:00 - 12:00" },
            { name: "Rompas Reggae Shack", time: "12:00 - 14:00" },
            { name: "A For Alpha", time: "14:00 - 16:00" },
            { name: "Roman Flügel", time: "16:00 - 18:00" },
          ],
        },
      ],
      recentShows: [
        {
          name: "GREG B2B De Grandi",
          date: "27/02/2025",
          image: "/placeholder.svg",
        },
        {
          name: "Maboul Basmati",
          date: "21/02/2025",
          image: "/placeholder.svg",
        },
        { name: "Carin Kelly", date: "17/02/2025", image: "/placeholder.svg" },
        { name: "Poté", date: "22/02/2025", image: "/placeholder.svg" },
        { name: "Ygal Ohayon", date: "22/02/2025", image: "/placeholder.svg" },
        { name: "Lila", date: "27/02/2025", image: "/placeholder.svg" },
      ],
    },
    kool: {
      name: "Kool FM",
      description: "The home of jungle and drum & bass since 1991.",
      image: "/placeholder.svg",
      currentShow: {
        name: "Kool Kuts",
        time: "12:00 - 14:00",
        image: "/placeholder.svg",
      },
      schedule: [
        {
          day: "Monday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Prototype", time: "10:00 - 12:00" },
            { name: "Kool Kuts", time: "12:00 - 14:00" },
            { name: "Born On Road", time: "14:00 - 16:00" },
            { name: "Collette Warren", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Tuesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Oblig", time: "10:00 - 12:00" },
            { name: "Turno", time: "12:00 - 14:00" },
            { name: "DJ Die Presents Gutterfunk", time: "14:00 - 16:00" },
            { name: "Addison Groove", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Wednesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Kool Originals", time: "10:00 - 12:00" },
            { name: "1985 Music", time: "12:00 - 14:00" },
            { name: "Sepia", time: "14:00 - 16:00" },
            { name: "Kasra", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Thursday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Spectral", time: "10:00 - 12:00" },
            { name: "Chamber 45", time: "12:00 - 14:00" },
            { name: "V Recordings", time: "14:00 - 16:00" },
            { name: "Shabba D", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Friday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Alibi", time: "10:00 - 12:00" },
            { name: "L-Side", time: "12:00 - 14:00" },
            { name: "Command Strange", time: "14:00 - 16:00" },
            { name: "MC Lowqui", time: "16:00 - 18:00" },
          ],
        },
      ],
      recentShows: [
        {
          name: "Alibi, L-Side, Level 2 & Command Strange feat. MC Lowqui",
          date: "27/02/2025",
          image: "/placeholder.svg",
        },
        {
          name: "Pola & Bryson",
          date: "21/02/2025",
          image: "/placeholder.svg",
        },
        {
          name: "Kool FM x Fabric Live",
          date: "21/12/2023",
          image: "/placeholder.svg",
        },
        {
          name: "Kool Originals",
          date: "23/02/2025",
          image: "/placeholder.svg",
        },
        { name: "Born On Road", date: "20/02/2025", image: "/placeholder.svg" },
        { name: "DJ Brockie", date: "10/08/2024", image: "/placeholder.svg" },
      ],
    },
    swu: {
      name: "SWU FM",
      description:
        "South West Underground - Bristol's underground music station.",
      image: "/placeholder.svg",
      currentShow: {
        name: "SPICYIVY",
        time: "12:00 - 14:00",
        image: "/placeholder.svg",
      },
      schedule: [
        {
          day: "Monday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Safiye", time: "10:00 - 12:00" },
            { name: "SPICYIVY", time: "12:00 - 14:00" },
            { name: "Addison Groove", time: "14:00 - 16:00" },
            { name: "Sepia", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Tuesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Opr8", time: "10:00 - 12:00" },
            { name: "SSSlip", time: "12:00 - 14:00" },
            { name: "My Nu Leng Presents Wavelengths", time: "14:00 - 16:00" },
            { name: "Chloe Sage", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Wednesday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Medis", time: "10:00 - 12:00" },
            { name: "Toby Ross", time: "12:00 - 14:00" },
            { name: "Surgeons Girl", time: "14:00 - 16:00" },
            { name: "DJ Swisha", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Thursday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Worm Disco Club", time: "10:00 - 12:00" },
            { name: "Otik", time: "12:00 - 14:00" },
            { name: "Sam Binga", time: "14:00 - 16:00" },
            { name: "Foreign Concept", time: "16:00 - 18:00" },
          ],
        },
        {
          day: "Friday",
          shows: [
            { name: "Breakfast Show", time: "07:00 - 10:00" },
            { name: "Rukus", time: "10:00 - 12:00" },
            { name: "Asine", time: "12:00 - 14:00" },
            { name: "Precinct Show with Dogger", time: "14:00 - 16:00" },
            { name: "Night Service", time: "16:00 - 18:00" },
          ],
        },
      ],
      recentShows: [
        {
          name: "Get To Know: Chinese Daughter",
          date: "27/02/2025",
          image: "/placeholder.svg",
        },
        { name: "Oblig", date: "11/02/2025", image: "/placeholder.svg" },
        {
          name: "Surgeons Girl",
          date: "16/02/2025",
          image: "/placeholder.svg",
        },
        { name: "DJ Swisha", date: "20/02/2025", image: "/placeholder.svg" },
        { name: "Otik", date: "01/03/2025", image: "/placeholder.svg" },
        {
          name: "Sam Binga & Foreign Concept",
          date: "16/02/2025",
          image: "/placeholder.svg",
        },
      ],
    },
  };

  return channels[slug as keyof typeof channels];
}

export default function ChannelPage({ params }: { params: { slug: string } }) {
  const channel = getChannelData(params.slug);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src={channel.image || "/placeholder.svg"}
          alt={channel.name}
          width={1920}
          height={300}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto relative h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">{channel.name}</h1>
            <p className="text-xl">{channel.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-8">
        {/* Current Show */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">On Air Now</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4">
                <Image
                  src={channel.currentShow.image || "/placeholder.svg"}
                  alt={channel.currentShow.name}
                  width={300}
                  height={300}
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
              <div className="md:w-3/4">
                <Badge variant="outline" className="mb-2">
                  LIVE
                </Badge>
                <h3 className="text-3xl font-bold mb-2">
                  {channel.currentShow.name}
                </h3>
                <p className="text-gray-400 mb-4">{channel.currentShow.time}</p>
                <Button className="gap-2">
                  <Play className="h-4 w-4" />
                  Listen Live
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Schedule</h2>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Full Schedule
            </Button>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex border-b border-gray-800 mb-4">
              {channel.schedule.map((day, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 font-medium ${index === 0 ? "border-b-2 border-white" : "text-gray-400"}`}
                >
                  {day.day}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {channel.schedule[0].shows.map((show, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold">{show.name}</p>
                      <p className="text-sm text-gray-400">{show.time}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Shows */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Shows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {channel.recentShows.map((show, index) => (
              <Link href="#" key={index} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={show.image || "/placeholder.svg"}
                    alt={show.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 z-10">
                    <Avatar className="h-6 w-6 bg-black">
                      <AvatarFallback>{channel.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full bg-white text-black hover:bg-gray-200"
                    >
                      <Play className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-sm group-hover:underline line-clamp-2">
                  {show.name}
                </h3>
                <p className="text-xs text-gray-400">{show.date}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
