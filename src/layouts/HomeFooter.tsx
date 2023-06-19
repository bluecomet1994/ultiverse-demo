import { Hidden, Slide } from '@mui/material'
import Image from 'next/image'

export default function HomeFooter() {
  return (
    <Slide direction='up' in={true} timeout={1000}>
      <div className="footer">
        <Hidden mdDown>
          <div className='first'>
            <h1>YOUR SUCCESS, OUR MISSION</h1>
          </div>
        </Hidden>

        <div className="second flex justify-end items-center w-full border-t-2 pr-8 border-gray-500">
          <span>Designing & Developing the future one pixel at a time</span>
          <Image alt='logo' src={'/assets/svg/logo.svg'} width={100} height={27} priority />
        </div>

        <style jsx>{`
          .footer {
            display: flex;
            position: relative;
            width: 100%;
          }

          .footer .first {
            border-top: 2px solid #888888;
            border-right: 2px solid #888888;
          }

          .footer .first h1 {
            margin: 50px;
            font-family: 'MADE Outer Sans Alt';
            font-weight: bold;
            font-size: 24px;
            width: 470px;
            margin: 35px 50px;
          }

          .footer .second span {
            position: absolute;
            right: 2vw;
            top: 0;
            font-weight: bold;
            position: absolute;
            padding: 16px 24px;
            background: #00FFE6;
            color: black;
            text-transform: uppercase;
            transform: translateY(-50%);
          }
        `}</style>
      </div>
    </Slide>
  )
}