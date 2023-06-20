import Image from "next/image"

const LogoSvg = (props: any) => {
  return (
    <Image
      alt='logo'
      src={'/assets/svg/logo.svg'}
      width={100}
      height={27}
      priority
      {...props}
    />
  )
}

export default LogoSvg;