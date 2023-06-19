import Image from "next/image"

const StarSvg = (props: any) => {
  return (
    <Image
      alt="star"
      src={'/assets/svg/star.svg'}
      width={52}
      height={52}
      priority
      {...props}
    />
  )
}

export default StarSvg;