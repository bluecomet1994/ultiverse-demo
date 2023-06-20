import Image from "next/image"
import TwitterIcon from '@mui/icons-material/Twitter';
import DiscordIcon from '@mui/icons-material/SportsEsports';
import Link from "next/link";

export default function ModeNavbar(props: any) {
  return (
    <div className="flex flex-col md:flex-row w-full h-28 pl-4 pr-4 opacity-0 animate-fade-down animate-duration-50">
      <div className="flex items-center w-full m-4">
        <Link href={'/'}>
          <Image alt="logo" src={'/assets/svg/vector.svg'} width={40} height={45} className="pr-4" priority />
        </Link>
        <div className="flex relative w-full h-16" style={{background:"rgba(255,255,255,0.1)"}}>
          <span style={{background:'#00FFE6',width:`${props.progress}%`,animation:'progress-anim 1s'}} />
          <span className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-800" />
        </div>
      </div>

      <div className="flex items-center w-full">
        <div className="flex justify-center items-center relative w-4/12 h-16">
          ABOUT
          <span className="absolute bottom-0 left-0 text-gray-500 text-sm">001</span>
        </div>

        <div className="flex justify-center items-center relative w-2/12 h-16">
          <DiscordIcon />
          <span className="absolute bottom-0 left-0 text-gray-500 text-sm">002</span>
        </div>
        
        <div className="flex justify-center items-center relative w-2/12 h-16">
          <TwitterIcon />
          <span className="absolute bottom-0 left-0 text-gray-500 text-sm">003</span>
        </div>
        
        <div className="flex justify-center items-center relative w-4/12 h-16">
          LAUNCH ULTIVERSE
          <span className="absolute bottom-0 left-0 text-gray-500 text-sm">004</span>
        </div>
        
        <div className="flex flex-col justify-center items-center w-2/12 h-16">
          <span className="w-12 h-0.5 m-5 bg-gray-500" />
        </div>
      </div>
    </div>
  )
}