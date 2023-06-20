import MenuButton from "@/components/MenuButton";
import ModeNavbar from "@/layouts/ModeNavbar";
import Head from "next/head";
import Image from "next/image";
import { Hidden } from '@mui/material';
export default function Option1() {
  return (
    <>
      <Head>
        <title>Ultiverse | Option 1</title>
      </Head>

      <main className="terminus-font flex flex-col w-full h-screen overflow-hidden">
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <Image alt="background1" src={'/assets/about-bg.png'} width={1000} height={750} className="opacity-0 animate-shrink animate-duration-500" priority />
          <Image alt="background2" src={'/assets/ellipse001.png'} width={1000} height={500} className="absolute top-2/3 left-1/2 -translate-x-1/2 animate-fade-center-up animate-duration-200" priority />
          <span className="bg-light" />
          <span className="bg-spot" />
        </div>

        <ModeNavbar progress={15} />

        <section className="flex w-full h-full">
          <div className="flex relative w-full md:w-2/3">
            <div className="flex flex-col relative mt-20 ml-8">
              <MenuButton label="MAP" />
              <MenuButton label="MISSIONS" />
              <MenuButton label="CHARACTERS" />
              <MenuButton label="LOADOUTS" />
              <MenuButton label="EVENTS" />

              <Image alt="cursor" src={'/assets/cursor.png'} width={108} height={108} className="absolute top-8 left-56 opacity-0 animate-fade-left-top-fast animate-duration-200 animate-delay-1000" priority />
            </div>

            <div className="flex flex-col items-center absolute bottom-0 right-0 w-full mb-8 opacity-0 animate-fade-small-up animate-duration-100 animate-delay-2000">
              <span className="absolute top-4 left-32 text-gray-500">001</span>
              <Image alt="immersive" src={'/assets/immersive.png'} width={712} height={158} className="m-4 -translate-x-32" priority />
              <Image alt="metauerse" src={'/assets/metauerse.png'} width={720} height={148} className="m-4 translate-x-32" priority />
            </div>
          </div>

          <Hidden mdDown>
            <div className="flex justify-center items-end w-1/3">
              <div className="relative opacity-0 animate-fade-small-left animate-duration-100 animate-delay-2000">
                <Image alt="mask" src={'/assets/mask.png'} width={480} height={560} priority />
                <Image alt="mask" src={'/assets/box.png'} width={28} height={28} className="absolute bottom-4 right-4" priority />
                <span className="absolute top-1/2 left-1/2 w-28 h-28 cursor-pointer rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </Hidden>
        </section>

        <footer className="flex items-center w-full h-28 pr-8 pl-8 opacity-0 animate-fade-up animate-duration-50">
          <Image alt="lines" src={'/assets/lines.png'} width={36} height={36} priority />
          <p className="p-4">UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO<br />CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.</p>
        </footer>

        <style jsx>{`
          .bg-light {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400px;
            height: 400px;
            background: radial-gradient(#00FFE6, rgba(0,0,0,0));
            mix-blend-mode: overlay;
            filter: blur(128px);
            transform: translate(-50%,-50%);
          }

          .bg-spot {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 128px;
            height: 128px;
            border-radius: 50%;
            background: #00FFE6;
            mix-blend-mode: overlay;
            filter: blur(20px);
            transform: translate(-50%,-50%);
          }

          .video-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 72px;
            height: 72px;
            cursor: pointer;
            border-radius: 50%;
            transform: translate(-50%,-50%);
          }
        `}</style>
      </main>
    </>
  )
}