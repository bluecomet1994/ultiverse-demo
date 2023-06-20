import { Hidden } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import DiscordIcon from '@mui/icons-material/SportsEsports';
import TelegramIcon from '@mui/icons-material/Telegram';
import SocialIcon from '@mui/icons-material/Language';

export default function DesignFooter() {
  return (
    <div className="footer animate-fade animate-duration-100">
        <Hidden mdDown>
          <div className='first w-1/3'>
            <h1>CLIENT DESIGN DEMO</h1>
            <p>Designed by REFINE STUDIO for ULTIVERSE.IO</p>
            <div className='text-cyan-300 flex justify-between w-32 mt-4'>
              <TwitterIcon />
              <DiscordIcon />
              <TelegramIcon />
              <SocialIcon />
            </div>
            <button>UNIVERSAL GUIDE</button>
          </div>
        </Hidden>

        <div className="second flex justify-start items-center w-3/4 border-t-2 pr-8 border-gray-500">
          <span>Designing & Developing the future one pixel at a time</span>
          <h1>YOUR SUCCESS, OUR MISSION</h1>
        </div>

        <style jsx>{`
          .footer {
            display: flex;
            position: relative;
            width: 100%;
          }

          .footer .first {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-top: 2px solid #888888;
            border-right: 2px solid #888888;
            padding-left: 32px;
          }

          .footer .first button {
            font-family: 'MADE Outer Sans';
            font-weight: light;
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px 30px;
            border-radius: 99px;
            box-shadow: inset 0 0 28px #00FFE6;
            background: black;
            transform: scale(0);
            animation: popup .5s 1s forwards;
          }

          .footer .second h1 {
            font-family: 'MADE Outer Sans Alt';
            font-weight: bold;
            font-size: 24px;
            width: 470px;
            margin: 40px 50px;
            color: #AAAAAA;
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
  )
}