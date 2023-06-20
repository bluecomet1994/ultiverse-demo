import Head from "next/head";
import Image from "next/image";
import StarSvg from "@/components/svg/StarSvg";
import DesignFooter from "@/layouts/DesignFooter";
import DesignNavbar from "@/layouts/DesignNavbar";
import { Button } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeIcon from '@mui/icons-material/Code';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CropFreeIcon from '@mui/icons-material/CropFree';
import SettingsIcon from '@mui/icons-material/Settings';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import GroupIcon from '@mui/icons-material/Group';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function DesignSystem() {
  return (
    <>
      <Head>
        <title>Ultiverse | Design System</title>
      </Head>

      <main className="flex flex-col justify-stretch w-full min-h-screen lg:h-screen">
        <DesignNavbar />

        <section className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 primary-font">
            <div className="flex justify-center items-center relative w-full h-full font-bold text-7xl">
              <div className="opacity-0 animate-fade-small-up animate-duration-100 animate-delay-1000">
                <h1 className="relative">
                  DESIGN
                  <StarSvg className="absolute -top-4 -right-4 inline scale-50" />
                </h1>
                <h1 className="stroke-text">
                  SYSTEM
                </h1>

                <h1 className="text-xl mt-20">TYPEFACE SIZE</h1>
                <div className="flex font-sans text-lg font-normal mt-6">
                  <div className="w-full text-gray-400 text-2xl">
                    <h1 className="m-0">H1</h1>
                    <span className="font-light text-gray-500 text-sm">Bold / 24px</span>
                    <h1>H1 Light</h1>
                    <span className="font-light text-gray-500 text-sm">Medium / 24px</span>
                    <h1>H1 Regular</h1>
                    <span className="font-light text-gray-500 text-sm">Medium / 24px</span>
                    <h1>H1 Semibold</h1>
                    <span className="font-light text-gray-500 text-sm">Semibold / 48px</span>
                    <h1>H1 Bold</h1>
                    <span className="font-light text-gray-500 text-sm">Bold / 48px</span>
                  </div>

                  <div className="w-full text-gray-400 text-lg">
                    <h1>Headline 5</h1>
                    <span className="font-light text-gray-500 text-sm">Bold / 16px</span>
                    <h1>H5 Light</h1>
                    <span className="font-light text-gray-500 text-sm">Medium / 16px</span>
                    <h1>H5 Regular</h1>
                    <span className="font-light text-gray-500 text-sm">Medium / 16px</span>
                    <h1>H5 Regular</h1>
                    <span className="font-light text-gray-500 text-sm">Medium / 16px</span>
                    <h1>H5 Semibold</h1>
                    <span className="font-light text-gray-500 text-sm">Semibold / 32px</span>
                    <h1>H5 Bold</h1>
                    
                    <span className="font-light text-gray-500 text-sm">Bold / 32px</span>
                  </div>
                </div>
              </div>

              <span className="absolute top-0 right-0 w-0.5 h-full gradient-line-vertical opacity-0 animate-scale animate-duration-50 animate-delay-300" />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-3/4">
            <div className="flex flex-col lg:flex-row relative w-full h-auto lg:h-1/2 primary-font">
              <div className="flex justify-center items-center w-full h-full opacity-0 animate-fade-small-up animate-duration-100 animate-delay-1500">
                <div>
                  <h1 className="text-xl mb-8">Color Palette</h1>
                  <div className="flex text-font text-gray-400">
                    <div className="flex flex-col items-center">
                      <h1 className="mb-2">Background</h1>
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex flex-col justify-between items-center w-full h-28 p-2">
                          <div className="w-12 h-12 rounded-full primary-bg border-2 border-white"></div>
                          <h1>1</h1>
                          <p>#000000</p>
                        </div>
                        <div className="flex flex-col justify-between items-center w-full h-28 p-2">
                          <div className="w-12 h-12 rounded-full secondary-bg"></div>
                          <h1>2</h1>
                          <p>#3B3738</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center ml-12">
                      <h1 className="mb-2">Accent</h1>
                      <div className="flex flex-col justify-between items-center w-full h-28 p-2">
                        <div className="w-12 h-12 rounded-full accent-bg"></div>
                        <h1>Vl</h1>
                        <p>#00FFE6</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center ml-12">
                      <h1 className="mb-2">Text</h1>
                      <div className="flex flex-col justify-between items-center w-full h-28 p-2">
                        <div className="w-12 h-12 rounded-full bg-white"></div>
                        <h1>P(l)</h1>
                        <p>#FFFFFF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start items-center w-full h-full opacity-0 animate-fade-small-up animate-duration-100 animate-delay-1500">
                <div>
                  <h1 className="text-xl mb-8">Buttons</h1>
                  <button className="relative block terminus-font text-xl w-64 h-20 border-2 border-gray-500">
                    LAUNCH ULTIVERSE
                    <span className="absolute left-2 bottom-2 text-sm text-gray-500">004</span>
                  </button>

                  <Image alt="frame" src={'/assets/svg/btn-frame.svg'} width={340} height={65} className="mt-4" priority />
                </div>
              </div>

              <span className="absolute left-0 bottom-0 w-full h-0.5 gradient-line opacity-0 animate-scale animate-duration-50 animate-delay-500" />
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:h-2/3 p-12 opacity-0 animate-fade-small-right animate-duration-100 animate-delay-2000">
              <div className="w-full sm:w-1/3 h-full">
                <h1 className="text-xl primary-font mb-4">TYPEFACE (OPTION 1)</h1>
                <p className="terminus-font text-lg text-gray-400">HEADER 800</p>
                <p className="notosan-font text-2xl text-gray-300 mt-4 mb-4">NOTO SANS</p>
                <p className="terminus-font text-lg text-gray-400">BODY 400</p>
                <p className="terminus-font text-xl text-gray-400">Terminus (TTF)</p>
              </div>

              <div className="w-full sm:w-1/3 h-full">
                <h1 className="text-xl primary-font mb-4">TYPEFACE (OPTION 2)</h1>
                <p className="terminus-font text-xl text-gray-400">HEADER 800</p>
                <p className="terminus-font text-3xl text-gray-400 mt-3 mb-3">Terminus</p>
                <p className="terminus-font text-lg text-gray-400">BODY 400</p>
                <p className="notosan-font text-xl text-gray-400">NOTO SANS</p>
              </div>
              
              <div className="w-full sm:w-1/3 h-full">
                <h1 className="text-xl primary-font mb-4">ICONS</h1>
                <p className="text-font text-sm text-gray-400">Arrows</p>
                <div className="flex justify-between w-60 mt-2 mb-4">
                  <KeyboardArrowRightIcon />
                  <KeyboardArrowUpIcon />
                  <KeyboardDoubleArrowDownIcon />
                  <KeyboardDoubleArrowLeftIcon />
                  <KeyboardDoubleArrowUpIcon />
                  <KeyboardDoubleArrowRightIcon />
                  <ArrowOutwardIcon />
                  <CodeIcon />
                </div>
                
                <p className="text-font text-sm text-gray-400">Miscellaneous</p>
                <div className="flex justify-between w-44 mt-2 mb-4">
                  <ContentPasteIcon />
                  <ThumbUpOffAltIcon />
                  <SettingsIcon />
                  <CropFreeIcon />
                  <DriveFolderUploadIcon />
                  <GroupIcon />
                </div>
                
                <p className="text-font text-sm text-gray-400">Social</p>
                <div className="flex justify-between w-24 mt-2 mb-4">
                  <InstagramIcon />
                  <FacebookIcon />
                  <SendIcon />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DesignFooter />

        <style jsx>{`
        `}</style>
      </main>
    </>
  )
}