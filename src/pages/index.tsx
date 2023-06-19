import Head from 'next/head'
import Image from 'next/image'
import HomeNavbar from '@/layouts/HomeNavbar'
import HomeFooter from '@/layouts/HomeFooter'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ultiverse</title>
      </Head>
      
      <main className="flex flex-col w-full h-screen overflow-hidden">
        <HomeNavbar />

        <section className="flex h-full">
          <div className='flex flex-col w-2/3 sm:w-1/3' style={{animation:"fade .5s"}}>
            <div className='flex justify-start items-center w-full h-full'>
              <div className='content'>
                CO<span className='text-black'>NTEN</span>T
                <div />
              </div>
            </div>

            <div className='flex items-center w-full h-full'>
              <div className='menu'>
                <Image alt='logo' src={'/assets/logo.png'} width={128} height={24} className='pb-2 opacity-0' style={{animation:"fade-left .5s .5s forwards"}} priority />
                <Link href={'/design'}><div style={{opacity:0, animation:"fade-left .5s .6s forwards"}}>1. Design System<span /></div></Link>
                <Link href={'/option1'}><div style={{opacity:0, animation:"fade-left .5s .7s forwards"}}>2. Option 1<span /></div></Link>
                <Link href={'/videomode'}><div style={{opacity:0, animation:"fade-left .5s .8s forwards"}}>3. Video mode<span /></div></Link>
              </div>
            </div>
          </div>

          <div className='flex items-center relative w-2/3'>
            <div className='relative w-full'>
              <div className='absolute -top-60 left-0 sm:left-28 w-full p-4'>
                <Image alt='arrow' src={'/assets/svg/star.svg'} width={50} height={50} className="absolute top-32 left-0 opacity-0 object-contain" style={{animation:"fade .5s 2s forwards"}} priority />
                <Image alt='arrow' src={'/assets/svg/large-arrow.svg'} width={280} height={280} className="absolute top-48 left-24" style={{animation:"fade-left-top-fast 2s"}} priority />
                <Image alt='ploygon' src={'/assets/svg/polygon-group.svg'} width={1100} height={834} style={{animation:"fade-left-top-slow 2s"}} priority />
                <h1 className='title1'>DESIGN<span>DESIGN</span></h1>
                <h1 className='title2'>DEMO<span>DEMO</span></h1>
              </div>
            </div>
          </div>
        </section>

        <HomeFooter />

        <style jsx>{`
          .content {
            font-family: 'MADE Outer Sans Alt';
            font-style: normal;
            font-weight: 900;
            font-size: 58px;
            position: relative;
            width: 220px;
            margin: 4vw;
            word-wrap: break-word;
            animation: hoist-y 3s ease-in-out infinite;
          }

          .content div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00FFE6;
            transform: rotateZ(-30deg) rotateX(60deg) skew(10deg) scale(1.1);
            z-index: -1;
          }

          .menu {
            font-family: 'MADE Outer Sans';
            font-style: normal;
            font-weight: 250;
            font-size: 20px;
            margin: 4vw;
            letter-spacing: 0.05em;
          }

          .menu Image {
            animation: fade-up 2s;
          }

          .menu div {
            position: relative;
            padding: 12px 0;
            cursor: pointer;
          }

          .menu div span {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
            transition: all .2s;
          }

          .menu div:hover span {
            left: -30%;
            width: 160%;
          }

          .title1 {
            position: absolute;
            top: 0;
            left: 0;
            font-family: 'MADE Outer Sans';
            font-weight: 400;
            font-size: 100px;
            background-color: transparent;
            color: white;
            transform: translate(75px,50px) rotateZ(-5deg);
            opacity: 0;
            animation: rotate .5s 2s forwards;
          }

          .title1 span {
            position: absolute;
            top: 8px;
            left: 8px;
            font-family: 'MADE Outer Sans';
            font-weight: 400;
            font-size: 100px;
            color: transparent;
            -webkit-text-stroke: 1px #00FFE6;
            z-index: -1;
          }

          .title2 {
            position: absolute;
            top: 0;
            left: 0;
            font-family: 'MADE Outer Sans';
            font-weight: 400;
            font-size: 100px;
            background-color: transparent;
            color: white;
            transform: translate(-136px,320px) rotateZ(-95deg);
            opacity: 0;
            animation: rotate .5s 2s forwards;
          }

          .title2 span {
            position: absolute;
            top: 8px;
            left: 8px;
            font-family: 'MADE Outer Sans';
            font-weight: 400;
            font-size: 100px;
            color: transparent;
            -webkit-text-stroke: 1px #00FFE6;
            z-index: -1;
          }

          @keyframes rotate {
            from { transform: translate(0,0) rotateZ(0deg); opacity: 0 }
            to { opacity: 1 }
          }
        `}</style>
      </main>
    </>
  )
}
