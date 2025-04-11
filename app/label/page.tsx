import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"

const releases = [
  {
    title: "Oko x Cameron Hayes - Shadow",
    image: "/placeholder.svg",
    date: "01 March 2025",
    tags: ["Electronic", "House"],
    slug: "oko-x-cameron-hayes-shadow",
  },
  {
    title: "Lizz - Mambo Pa Las Gatas",
    image: "/placeholder.svg",
    date: "28 February 2025",
    tags: ["Latin", "Electronic"],
    slug: "lizz-mambo-pa-las-gatas",
  },
  {
    title: "Oko - Higher (feat. Nathan Smoker)",
    image: "/placeholder.svg",
    date: "21 February 2025",
    tags: ["Electronic", "Vocal"],
    slug: "oko-higher-feat-nathan-smoker",
  },
  {
    title: "James Pepper - Energy",
    image: "/placeholder.svg",
    date: "14 February 2025",
    tags: ["Techno", "House"],
    slug: "james-pepper-energy",
  },
  {
    title: "Yves Tomas - Endless",
    image: "/placeholder.svg",
    date: "07 February 2025",
    tags: ["Ambient", "Electronic"],
    slug: "yves-tomas-endless",
  },
  {
    title: "James Pepper - Feel The Generation",
    image: "/placeholder.svg",
    date: "31 January 2025",
    tags: ["House", "Electronic"],
    slug: "james-pepper-feel-the-generation",
  },
  {
    title: "Voltage - 4AM (Don't Wait Up For Me)",
    image: "/placeholder.svg",
    date: "24 January 2025",
    tags: ["Drum & Bass", "Jungle"],
    slug: "voltage-4am-dont-wait-up-for-me",
  },
  {
    title: "AKA Orange - Willow The Whisperer",
    image: "/placeholder.svg",
    date: "17 January 2025",
    tags: ["Experimental", "Electronic"],
    slug: "aka-orange-willow-the-whisperer",
  },
]

export default function LabelPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Rinse Label"
          width={1920}
          height={500}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto relative h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-4">Rinse Recordings</h1>
            <p className="text-xl mb-6">
              Rinse has been at the center of UK underground music for over 30 years, championing new sounds and artists
              from grime to dubstep, UK funky to house and beyond.
            </p>
            <div className="flex gap-4">
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                Latest Releases
              </Button>
              <Button variant="outline">About the Label</Button>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button size="icon" variant="ghost" className="rounded-full">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full">
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Latest Releases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {releases.map((release, index) => (
              <Link href={`/releases/${release.slug}`} key={index} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={release.image || "/placeholder.svg"}
                    alt={release.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <Button size="sm" variant="ghost" className="rounded-full bg-white text-black hover:bg-gray-200">
                      <Play className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-base group-hover:underline">{release.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{release.date}</p>
                <div className="flex flex-wrap gap-2">
                  {release.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              View All Releases
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Link href="#" key={item} className="group">
                <div className="aspect-square relative overflow-hidden rounded-full mb-3">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Artist ${item}`}
                    width={200}
                    height={200}
                    className="transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-center text-sm group-hover:underline">Artist Name</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compilations */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Compilations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Link href="#" key={item} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Compilation ${item}`}
                    width={300}
                    height={300}
                    className="transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <Button size="sm" variant="ghost" className="rounded-full bg-white text-black hover:bg-gray-200">
                      <Play className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-base group-hover:underline">Rinse Compilation Vol. {item}</h3>
                <p className="text-sm text-gray-400">Various Artists</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
