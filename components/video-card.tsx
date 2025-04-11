import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  subtitle?: string
  image: string
  channel: string
  tags: string[]
  href: string
}

export function VideoCard({ title, subtitle, image, channel, tags, href }: VideoCardProps) {
  return (
    <div className="video-card group">
      <Link href={href} className="block">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="video-card-image"
          />
          <div className="absolute top-2 left-2 z-10">
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-1">
              <Avatar className="h-5 w-5">
                <AvatarFallback className="text-[10px]">{channel}</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="video-card-overlay">
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-black hover:bg-gray-200"
            >
              <Play className="h-4 w-4 fill-current" />
            </Button>
          </div>
          <div className="video-card-content">
            <h3 className="font-bold text-sm line-clamp-2 mb-1">{title}</h3>
            {subtitle && <p className="text-xs text-gray-400 mb-2">{subtitle}</p>}
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant="outline"
                  className="text-[10px] py-0 h-5 bg-black/50 backdrop-blur-sm border-white/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
