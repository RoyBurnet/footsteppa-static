import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Share, Download, ExternalLink } from "lucide-react";

// This is a mock function to simulate fetching release data
function getReleaseData(slug: string) {
  return {
    title: "Mambo Pa Las Gatas",
    artist: "Lizz",
    releaseDate: "28 February 2025",
    image: "/placeholder.svg",
    description:
      "Lizz returns with a Latin-infused electronic banger that's set to dominate dancefloors this summer. 'Mambo Pa Las Gatas' combines traditional Latin rhythms with contemporary electronic production for an irresistible groove.",
    tracks: [
      { title: "Mambo Pa Las Gatas (Original Mix)", duration: "5:23" },
      { title: "Mambo Pa Las Gatas (Club Mix)", duration: "6:47" },
      { title: "Mambo Pa Las Gatas (Radio Edit)", duration: "3:21" },
      { title: "Mambo Pa Las Gatas (Instrumental)", duration: "5:20" },
    ],
    platforms: [
      { name: "Spotify", url: "#" },
      { name: "Apple Music", url: "#" },
      { name: "Beatport", url: "#" },
      { name: "Bandcamp", url: "#" },
    ],
    relatedReleases: [
      {
        title: "Chau Bebe w/ Bea Pelea & Pipo Beatz",
        artist: "Lizz",
        image: "/placeholder.svg",
      },
      {
        title: "Shadow",
        artist: "Oko x Cameron Hayes",
        image: "/placeholder.svg",
      },
      {
        title: "Higher (feat. Nathan Smoker)",
        artist: "Oko",
        image: "/placeholder.svg",
      },
      { title: "Energy", artist: "James Pepper", image: "/placeholder.svg" },
    ],
  };
}

export default function ReleasePage({ params }: { params: { slug: string } }) {
  const release = getReleaseData(params.slug);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src={release.image || "/placeholder.svg"}
              alt={`${release.artist} - ${release.title}`}
              width={500}
              height={500}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <div className="mb-2">
              <Link
                href="/label"
                className="text-sm text-gray-400 hover:text-white"
              >
                Footsteppa Recordings
              </Link>
            </div>
            <h1 className="text-4xl font-bold mb-1">{release.title}</h1>
            <h2 className="text-2xl text-gray-300 mb-4">{release.artist}</h2>
            <p className="text-gray-400 mb-6">
              Released: {release.releaseDate}
            </p>

            <div className="flex gap-4 mb-8">
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                Play
              </Button>
              <Button variant="outline" className="gap-2">
                <Share className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>

            <p className="text-gray-300 mb-8">{release.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Tracklist</h3>
              <div className="space-y-2">
                {release.tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-900 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full h-8 w-8"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <span>{track.title}</span>
                    </div>
                    <span className="text-gray-400">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Available On</h3>
              <div className="flex flex-wrap gap-3">
                {release.platforms.map((platform, index) => (
                  <Link href={platform.url} key={index}>
                    <Button variant="outline" className="gap-2">
                      {platform.name}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">More Releases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {release.relatedReleases.map((item, index) => (
              <Link href="#" key={index} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.artist} - ${item.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full bg-white text-black hover:bg-gray-200"
                    >
                      <Play className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-base group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.artist}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
