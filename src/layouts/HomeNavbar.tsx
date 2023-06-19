import { useState } from 'react';
import { Slide, Hidden, Button, Drawer } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import NavbarButton from "@/components/NavbarButton";

export default function HomeNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Slide direction="down" in={true} timeout={1000}>
      <div className="navbar">
        <Hidden xlDown>
          <div className="title">
            <h1><span>UI/UX</span> DEMO</h1>
          </div>
        </Hidden>

        <div className="container flex justify-between items-center w-full border-b-2 border-gray-500">
          <Hidden mdDown>
            <h1>Our Expertise</h1>
          </Hidden>

          <Hidden mdUp>
            <Button className="w-12 h-12 text-gray-500 mr-4" onClick={() => setOpen(true)}><MenuIcon /></Button>
            <Drawer open={open} anchor={'top'} onClose={() => setOpen(false)}>
              <div className="flex flex-col items-center bg-gray-700">
                <NavbarButton label="UI/UX DESIGN" subtitle="WEB2/WEB3" href={"#"} />
                <NavbarButton label="WEB DEVELOPMENT" subtitle="WEB2/WEB3" href={"#"} />
                <NavbarButton label="BLOCKCHAIN" subtitle="WEB2/WEB3" href={"#"} />
                <NavbarButton label="FINTECH" subtitle="WEB2/WEB3" href={"#"} />
                <NavbarButton label="ECOMMERCE" subtitle="WEB2/WEB3" href={"#"} />
              </div>
            </Drawer>
          </Hidden>

          <Hidden mdDown>
            <div>
              <NavbarButton label="UI/UX DESIGN" subtitle="WEB2/WEB3" href={"#"} />
              <NavbarButton label="WEB DEVELOPMENT" subtitle="WEB2/WEB3" href={"#"} />
              <NavbarButton label="BLOCKCHAIN" subtitle="WEB2/WEB3" href={"#"} />
              <NavbarButton label="FINTECH" subtitle="WEB2/WEB3" href={"#"} />
              <NavbarButton label="ECOMMERCE" subtitle="WEB2/WEB3" href={"#"} />
            </div>
          </Hidden>
        </div>

        <style jsx>{`
          .navbar {
            display: flex;
            width: 100;
            background: url(assets/svg/watermark.svg);
            background-size: contain;
          }

          .navbar .title {
            border-right: 2px solid #888888;
            border-bottom: 2px solid #888888;
          }

          .navbar .title h1 {
            width: 470px;
            height: 25px;
            margin: 40px 50px;
            font-family: 'MADE Outer Sans Alt';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            letter-spacing: 0.95em;
            color: #AAAAAA;
            text-align: center;
            animation: light-and-dark 3s ease-in-out infinite;
          }

          .navbar .container h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            padding: 40px;
            letter-spacing: 0.168px;
            text-transform: uppercase;
            color: #00FFE6;
          }
        `}</style>
      </div>
    </Slide>
  )
}