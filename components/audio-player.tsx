"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Play, Minimize2, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const channels = [
  { name: "Rinse UK", slug: "uk" },
  { name: "Rinse France", slug: "france" },
  { name: "Kool FM", slug: "kool" },
  { name: "SWU FM", slug: "swu" },
]

interface AudioPlayerProps {
  className?: string
}

export function AudioPlayer({ className }: AudioPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentChannel, setCurrentChannel] = useState(channels[0])

  const currentShow = {
    name: "Interplanetary Criminal",
    time: "21:00",
    image: "/placeholder.svg",
  }

  return (
    <>
      {/* Minimized Player */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-sm z-50 flex items-center px-4",
          !isExpanded && "border-b border-white/10",
          isExpanded && "hidden",
          className,
        )}
      >
        <div className="flex items-center flex-1 gap-3">
          <Image
            src={currentShow.image || "/placeholder.svg"}
            alt={currentShow.name}
            width={40}
            height={40}
            className="rounded"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {currentChannel.name} {currentShow.time}
            </span>
            <Badge variant="outline" className="h-5 text-[10px] uppercase bg-black/50 border-white/10">
              On Air
            </Badge>
          </div>
          <span className="font-medium">{currentShow.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Play className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setIsExpanded(true)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Expanded Player */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col">
          <div className="absolute top-4 right-4">
            <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setIsExpanded(false)}>
              <Minimize2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden">
              <Image
                src={currentShow.image || "/placeholder.svg"}
                alt={currentShow.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{currentChannel.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-2xl font-bold mb-2">{currentShow.name}</h2>
                <Badge variant="outline" className="bg-black/50 border-white/10">
                  ON AIR
                </Badge>
              </div>
              <Button
                size="icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white text-black hover:bg-gray-200"
              >
                <Play className="h-8 w-8 fill-current" />
              </Button>
            </div>
          </div>

          {/* Channel Selector */}
          <div className="p-4 flex justify-center gap-2">
            {channels.map((channel) => (
              <Button
                key={channel.slug}
                variant="ghost"
                className={cn("rounded-full", channel.slug === currentChannel.slug && "bg-white/10")}
                onClick={() => setCurrentChannel(channel)}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{channel.name[0]}</AvatarFallback>
                </Avatar>
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
