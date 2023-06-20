import Link from 'next/link'
import { Hidden } from '@mui/material';
import LogoSvg from '@/components/svg/LogoSvg';
export default function DesignNavbar() {
  return (
    <div className="flex justify-center items-center relative w-full h-32">
      <Hidden smDown>
        <h1 className='primary-font-alt font-normal text-xl tracking-super-wide opacity-0 animate-fade-up animate-duration-50 animate-delay-500'>
          <span className="font-thin">UI/UX</span>
          &nbsp;DEMO
        </h1>
      </Hidden>
      <span className="absolute bottom-0 left-0 w-full h-0.5 gradient-line opacity-0 animate-scale animate-duration-50 animate-delay-100" />
      <Link href={'/'}>
        <LogoSvg className="absolute top-1/2 right-4 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-fade animate-duration-50 animate-delay-1000" />
      </Link>
    </div>
  )
}