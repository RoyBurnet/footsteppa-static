import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { VideoCard } from "@/components/video-card";
import { ChannelButton } from "@/components/channel-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Live from Antidoto Club"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="container mx-auto relative h-full flex items-center pt-20">
          <div className="max-w-3xl">
            <p className="text-xl mb-2 text-gray-300">LIVE FROM</p>
            <h1 className="text-7xl font-bold tracking-tight mb-4">
              ANTIDOTO
              <br />
              [CLUB]
            </h1>
            <Button className="rounded-full px-8 py-6 text-lg mt-4 bg-white text-black hover:bg-gray-200">
              CLICK HERE TO WATCH NOW
            </Button>
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

      {/* Channels Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ChannelButton name="Footsteppa UK" href="/channels/uk" />
            <ChannelButton name="Footsteppa France" href="/channels/france" />
            <ChannelButton name="Kool FM" href="/channels/kool" />
            <ChannelButton name="SWU FM" href="/channels/swu" />
          </div>
        </div>
      </section>

      {/* Must Watch Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6">Must Watch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <VideoCard
              title="Carin Kelly"
              image="/placeholder.svg"
              channel="FR"
              tags={["Techno", "Bass", "House"]}
              href="/episodes/carin-kelly"
            />
            <VideoCard
              title="GЯEG Live From Antidoto Club 2025"
              image="/placeholder.svg"
              channel="UK"
              tags={["Latin", "Bass"]}
              href="/episodes/greg-antidoto-club"
            />
            <VideoCard
              title="2much invite Mika Heggemann"
              image="/placeholder.svg"
              channel="FR"
              tags={["Dance", "Trance", "Techno"]}
              href="/episodes/2much-mika-heggemann"
            />
            <VideoCard
              title="Oblig with Kozzie, Subten, TKO & Jus Rival"
              image="/placeholder.svg"
              channel="UK"
              tags={["Grime", "Drill", "Techno"]}
              href="/episodes/oblig-kozzie-subten"
            />
            <VideoCard
              title="Goldie feat. Medic Live from Love Saves The Day 2024"
              image="/placeholder.svg"
              channel="UK"
              tags={["Drum & Bass", "Jungle"]}
              href="/episodes/goldie-medic-love-saves"
            />
            <VideoCard
              title="Bou feat. Blivz 247, Harry Shotta & Inja"
              image="/placeholder.svg"
              channel="Kool"
              tags={["Jump Up", "Drum & Bass"]}
              href="/episodes/bou-blivz-harry-shotta"
            />
          </div>
        </div>
      </section>

      {/* Radio Highlights Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6">Radio Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <VideoCard
                key={index}
                title={`Radio Show ${index + 1}`}
                subtitle="Live Broadcast"
                image="/placeholder.svg"
                channel="UK"
                tags={["Electronic", "House"]}
                href={`/episodes/radio-show-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
