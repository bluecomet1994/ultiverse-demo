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
          <div className='flex flex-col w-2/3 sm:w-1/3 animate-fade animate-duration-50'>
            <div className='flex justify-start items-center w-full h-full'>
              <div className='content'>
                CO<span className='text-black'>NTEN</span>T
                <div />
              </div>
            </div>

            <div className='flex items-center w-full h-full'>
              <div className='menu'>
                <Image alt='logo' src={'/assets/logo.png'} width={128} height={24} className='pb-2 opacity-0 animate-fade-left animate-duration-50 animate-delay-500' priority />
                <Link href={'/design'}><div className='opacity-0 animate-fade-left animate-duration-50 animate-delay-600'>1. Design System<span /></div></Link>
                <Link href={'/option1'}><div className='opacity-0 animate-fade-left animate-duration-50 animate-delay-700'>2. Option 1<span /></div></Link>
                <Link href={'/videomode'}><div className='opacity-0 animate-fade-left animate-duration-50 animate-delay-800'>3. Video mode<span /></div></Link>
              </div>
            </div>
          </div>

          <div className='flex items-center relative w-2/3'>
            <div className='relative w-full'>
              <div className='absolute -top-60 left-0 sm:left-28 w-full p-4'>
                <Image alt='star' src={'/assets/svg/star.svg'} width={50} height={50} className="absolute top-32 left-0 opacity-0 object-contain animate-fade animate-duration-50 animate-delay-2000" priority />
                <Image alt='arrow' src={'/assets/svg/large-arrow.svg'} width={280} height={280} className="absolute top-48 left-24 animate-fade-left-top-fast animate-duration-200" priority />
                <Image alt='ploygon' src={'/assets/svg/polygon-group.svg'} width={1100} height={834} className='animate-fade-left-top-slow animate-duration-200' priority />
                <div className="absolute top-0 left-0 -rotate-6">
                  <h1 className='primary-font font-normal text-8xl text-white absolute top-0 left-0 bg-transparent opacity-0 translate-x-16 translate-y-24 animate-rotate-to-origin animate-duration-50 animate-delay-2000'>
                    DESIGN
                    <span className='primary-font font-normal stroke-text-active absolute top-2 left-2 -z-10'>DESIGN</span>
                  </h1>
                  <h1 className='primary-font font-normal text-8xl text-white absolute top-0 left-0 m-4 bg-transparent opacity-0 -translate-x-48 translate-y-80 -rotate-90 animate-rotate-to-origin animate-duration-50 animate-delay-2000'>
                    DEMO
                    <span className='primary-font font-normal stroke-text-active absolute top-2 left-2 -z-10'>DEMO</span>
                  </h1>
                </div>
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
        `}</style>
      </main>
    </>
  )
}
