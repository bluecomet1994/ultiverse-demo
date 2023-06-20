import ModeNavbar from "@/layouts/ModeNavbar";
import Head from "next/head";
import Image from "next/image";
import { Hidden } from '@mui/material';

export default function VideoMode() {
  return (
    <>
      <Head>
        <title>Ultiverse | Video Mode</title>
      </Head>

      <main className="flex flex-col w-full h-screen overflow-hidden">
        <ModeNavbar progress={3} />

        <section className="flex justify-center items-center relative w-full h-full overflow-hidden opacity-0 animate-scale animate-duration-100">
          <Image alt="outline1" src={'/assets/video-border1.png'} width={1400} height={400} className="" priority />
          
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2" style={{width:1280,height:550}}>
            <Hidden mdDown>
              <Image alt="background" src={'/assets/video-preview.png'} width={1280} height={700} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" priority />
            </Hidden>
            
            <Hidden mdUp>
              <Image alt="background" src={'/assets/video-preview.png'} width={600} height={300} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" priority />
            </Hidden>
            <Image alt="outline2" src={'/assets/video-border2.png'} width={1280} height={700} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" priority />
            <span className="video-effect" />
            <Image alt="box" src={'/assets/box.png'} width={28} height={28} className="absolute bottom-4 left-12" priority />
            <Image alt="cursor" src={'/assets/cursor.png'} width={108} height={108} className="absolute bottom-4 right-12" priority />
          </div>
        </section>

        <footer className="flex items-center w-full h-28 pr-8 pl-8 opacity-0 animate-fade-up animate-duration-50">
          <Image alt="lines" src={'/assets/lines.png'} width={36} height={36} priority />
          <p className="p-4 w-full text-center">UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.</p>
        </footer>

        <style jsx>{`
          .video-effect {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            height: 60%;
            background: #00FFE6;
            mix-blend-mode: overlay;
            filter: blur(10px);
            transform: translate(-50%,-50%);
          }
        `}</style>
      </main>
    </>
  )
}