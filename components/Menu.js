import Link from 'next/link'
import React, {useState} from 'react'

let overFlow = 1

const Menu = () => {
  const [imageMenu, setImageMenu] = useState("../static/icons/menu.png")
  const [hideMenu, setHideMenu] = useState("submenu hide")
  
  const handleClick = () => {
    if (overFlow === 1) {
      setImageMenu("../static/icons/close.png")
      setHideMenu("submenu")
      overFlow = 0
    } else{
      setImageMenu("../static/icons/menu.png")
      setHideMenu("submenu hide")
      overFlow = 1
    }
  }

  return (
    <div>
      <Link href="#header" as="/">
        <a title="Topo">
          <img 
          className="logo " 
          src="../static/icons/logo.png" 
          width="100" height="100" 
          alt="Logotipo" 
          />
        </a>
      </Link>
      <nav className="menu" >
        <div className={hideMenu}>
          <a id="menuimg" onClick={handleClick}>
            <img src={imageMenu} alt="Menu" className="rotate"/>
          </a>
          <a className="efeitoGrow" href="#navplaces" onClick={handleClick}>ROTEIROS</a>
          <a className="efeitoGrow" href="#navagency" onClick={handleClick}>AGÊNCIA</a>
          <a className="efeitoGrow" href="#navguide" onClick={handleClick}>GUIA</a>
          <a className="efeitoGrow" href="#navcar" onClick={handleClick}>4X4</a>
          <a className="efeitoGrow" href="#navcontact" onClick={handleClick}>CONTATO</a>
        </div>
      </nav>
    </div>
  )
}

export default Menu
