import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  CloudIcon as SoundCloud,
} from "lucide-react";

const channels = [
  {
    name: "Footsteppa UK",
    icon: "/placeholder.svg",
    socials: {
      instagram: "#",
      youtube: "#",
      soundcloud: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Kool FM",
    icon: "/placeholder.svg",
    socials: {
      instagram: "#",
      youtube: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Footsteppa UK",
    icon: "/placeholder.svg",
    socials: {
      instagram: "#",
      youtube: "#",
      soundcloud: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "SWU FM",
    icon: "/placeholder.svg",
    socials: {
      instagram: "#",
      youtube: "#",
      twitter: "#",
      soundcloud: "#",
    },
  },
  {
    name: "Footsteppa France",
    icon: "/placeholder.svg",
    socials: {
      instagram: "#",
      youtube: "#",
      soundcloud: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Explore Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-400">
              Explore
            </h3>
            <div className="space-y-2">
              <Link href="/shows" className="block text-sm hover:text-gray-300">
                Shows
              </Link>
              <Link
                href="/schedule"
                className="block text-sm hover:text-gray-300"
              >
                Schedule
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-4 text-gray-400">
                Download the app
              </h3>
              <div className="flex gap-2">
                <Link href="#" className="block w-32">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="h-10"
                  />
                </Link>
                <Link href="#" className="block w-32">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Channels Section - Left */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-400">
              Channels
            </h3>
            <div className="space-y-6">
              {channels.slice(0, 2).map((channel) => (
                <div key={channel.name} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={channel.icon || "/placeholder.svg"}
                      alt={channel.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  <div className="flex gap-2">
                    {Object.entries(channel.socials).map(([platform, url]) => (
                      <Link key={platform} href={url}>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full"
                        >
                          {platform === "instagram" && (
                            <Instagram className="h-4 w-4" />
                          )}
                          {platform === "youtube" && (
                            <Youtube className="h-4 w-4" />
                          )}
                          {platform === "twitter" && (
                            <Twitter className="h-4 w-4" />
                          )}
                          {platform === "facebook" && (
                            <Facebook className="h-4 w-4" />
                          )}
                          {platform === "soundcloud" && (
                            <SoundCloud className="h-4 w-4" />
                          )}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Channels Section - Right */}
          <div className="md:pt-8">
            <div className="space-y-6">
              {channels.slice(2).map((channel) => (
                <div key={channel.name} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={channel.icon || "/placeholder.svg"}
                      alt={channel.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  <div className="flex gap-2">
                    {Object.entries(channel.socials).map(([platform, url]) => (
                      <Link key={platform} href={url}>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full"
                        >
                          {platform === "instagram" && (
                            <Instagram className="h-4 w-4" />
                          )}
                          {platform === "youtube" && (
                            <Youtube className="h-4 w-4" />
                          )}
                          {platform === "twitter" && (
                            <Twitter className="h-4 w-4" />
                          )}
                          {platform === "facebook" && (
                            <Facebook className="h-4 w-4" />
                          )}
                          {platform === "soundcloud" && (
                            <SoundCloud className="h-4 w-4" />
                          )}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="mt-12 pb-6 border-b border-gray-800">
          <h3 className="text-sm font-semibold mb-4 text-gray-400">Theme</h3>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-sm">
              System
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-gray-400">
              Light
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-gray-400">
              Dark
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <span>© 2025 Footsteppa</span>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
          <div>Site by Footsteppa</div>
        </div>
      </div>
    </footer>
  );
}
