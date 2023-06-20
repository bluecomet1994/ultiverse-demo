import { Button } from '@mui/material'

const MenuButton = (props: any) => {
  return (
    <button className='menu-btn terminus-font m-1 animate-popup animate-duration-75'>
      &nbsp;&nbsp;<p className="text-xl">{props.label}</p>
      <span className='absolute top-0 left-0 w-2 h-full' />
      <span className='absolute top-0 left-3 w-0.5 h-full' />
      
      <style jsx>{`
        .menu-btn {
          display: flex;
          justify-content: flex-start;
          position: relative;
          padding: 4px;
          margin-bottom: 12px;
          color: gray;
          transition: all .5s;
        }

        .menu-btn span {
          background: gray;
          transition: all .5s;
        }

        .menu-btn:hover {
          color: #00FFE6;
        }

        .menu-btn:hover span {
          background: #00FFE6;
        }
      `}</style>
    </button>
  )
}

export default MenuButton;