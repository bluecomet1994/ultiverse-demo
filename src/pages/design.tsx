import StarSvg from "@/components/svg/StarSvg";
import DesignFooter from "@/layouts/DesignFooter";
import DesignNavbar from "@/layouts/DesignNavbar";
import Head from "next/head";
import Image from "next/image";

export default function DesignSystem() {
  return (
    <>
      <Head>
        <title>Ultiverse | Design System</title>
      </Head>

      <main className="flex flex-col w-full h-screen overflow-hidden">
        <DesignNavbar />

        <section className="flex w-full h-full">
          <div className="flex flex-col w-1/3 primary-font">
            <div className="flex justify-center items-center relative w-full h-full font-bold text-7xl">
              <div>
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

              <span className="absolute top-0 right-0 w-0.5 h-full gradient-line-vertical" />
            </div>
          </div>

          <div className="w-3/4">

          </div>
        </section>

        <DesignFooter />

        <style jsx>{`
        `}</style>
      </main>
    </>
  )
}