"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Search, ChevronRight } from "lucide-react"

const channels = [
  {
    name: "Rinse UK",
    slug: "uk",
    currentShow: {
      time: "21:00",
      name: "Interplanetary Criminal",
      image: "/placeholder.svg",
    },
    nextShow: {
      time: "23:00",
      name: "ec2a",
    },
  },
  {
    name: "Rinse France",
    slug: "france",
    currentShow: {
      time: "21:00",
      name: "TEMΣT",
      image: "/placeholder.svg",
    },
    nextShow: {
      time: "22:00",
      name: "Mara",
    },
  },
  {
    name: "Kool FM",
    slug: "kool",
    currentShow: {
      time: "20:00",
      name: "Cardinal Sound",
      image: "/placeholder.svg",
    },
    nextShow: {
      time: "22:00",
      name: "OS:MAN",
    },
  },
  {
    name: "SWU FM",
    slug: "swu",
    currentShow: {
      time: "20:00",
      name: "Gemmy",
      image: "/placeholder.svg",
    },
    nextShow: {
      time: "22:00",
      name: "Toby Ross",
    },
  },
]

export function MainNav() {
  const [showSchedule, setShowSchedule] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Rinse FM Logo"
              width={120}
              height={40}
              className="h-10"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/artists" className="nav-link">
              Artists
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowSchedule(true)}
              onMouseLeave={() => setShowSchedule(false)}
            >
              <Link href="/schedule" className="nav-link">
                Schedule
              </Link>
              {showSchedule && (
                <div className="absolute top-full left-0 w-screen bg-black/95 backdrop-blur-md py-6 -ml-[200px]">
                  <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                      {channels.map((channel) => (
                        <div key={channel.slug} className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback>{channel.name[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{channel.name}</span>
                            </div>
                            <Link
                              href={`/channels/${channel.slug}`}
                              className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
                            >
                              View channel
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </div>

                          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
                            <Image
                              src={channel.currentShow.image || "/placeholder.svg"}
                              alt={channel.currentShow.name}
                              layout="fill"
                              objectFit="cover"
                            />
                            <Badge
                              variant="outline"
                              className="absolute top-2 right-2 bg-black/50 border-white/10 text-[10px]"
                            >
                              ON AIR
                            </Badge>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium">{channel.currentShow.time}</p>
                                  <p className="text-sm text-gray-300 truncate">{channel.currentShow.name}</p>
                                </div>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8 rounded-full bg-white text-black hover:bg-gray-200"
                                >
                                  <Play className="h-4 w-4 fill-current" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center text-sm text-gray-400">
                            <span className="text-xs uppercase mr-2">Up next</span>
                            <span>{channel.nextShow.time}</span>
                            <span className="mx-2">·</span>
                            <span className="truncate">{channel.nextShow.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/label" className="nav-link">
              Label
            </Link>
            <Link href="/shop" className="nav-link">
              Shop
            </Link>
            <Link href="/channels" className="nav-link">
              Channels
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="w-[200px] pl-8 bg-secondary/80 border-transparent focus:border-white/20"
            />
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 ring-1 ring-white/20">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Current show" />
              <AvatarFallback>DJ</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-xs font-medium">Oneman</p>
              <p className="text-xs text-gray-400">UK</p>
            </div>
            <Badge variant="outline" className="bg-secondary/80 border-white/10">
              ON AIR
            </Badge>
            <Button size="icon" variant="ghost" className="rounded-full bg-white text-black hover:bg-gray-200">
              <Play className="h-4 w-4 fill-current" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
