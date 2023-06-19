import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link"

const NavbarButton = (props: any) => {
  return (
    <Link href={props.href} className="inline-block h-full pr-8 pl-8">
      <Button className="flex flex-col h-full text-white transition-all hover:text-cyan-300">
        <h1 className="font-bold text-lg text-white">{props.label}</h1>
        <p className="text-white">
          {props.subtitle}
          <Image alt="vector" src={'/assets/svg/arrow-up-right.svg'} width={24} height={24} className="inline" />
        </p>
      </Button>
    </Link>
  )
}

export default NavbarButton;