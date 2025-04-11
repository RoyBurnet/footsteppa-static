import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChannelButtonProps {
  name: string
  href: string
  icon?: string
}

export function ChannelButton({ name, href, icon }: ChannelButtonProps) {
  return (
    <Link href={href} className="channel-button">
      <Avatar className="h-10 w-10 ring-1 ring-white/10">
        <AvatarImage src={icon} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <span className="font-medium">{name}</span>
    </Link>
  )
}
