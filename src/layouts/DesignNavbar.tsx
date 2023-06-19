import Image from "next/image";

export default function DesignNavbar() {
  return (
    <div className="design-navbar-container">
      <h1><span>UI/UX</span> DEMO</h1>
      <span className="absolute bottom-0 left-0 w-full h-0.5 gradient-line" />
      <Image alt='logo' src={'/assets/svg/logo.svg'} width={100} height={27} className="absolute top-1/2 right-4 -translate-x-1/2 -translate-y-1/2" priority />

      <style jsx>{`
        .design-navbar-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100vw;
          height: 120px;
        }

        .design-navbar-container h1 {
          font-family: 'MADE Outer Sans Alt';
          font-weight: 400;
          font-size: 20px;
          letter-spacing: 0.95em;
          animation: light-and-dark 3s ease-in-out infinite;
        }

        .design-navbar-container h1 span {
          font-weight: 100;
        }
      `}</style>
    </div>
  )
}