import React, { useState } from 'react';
import './manuf_options.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillGearFill } from 'react-icons/bs';

function Manuf() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const location = useLocation();
    const { brand, id, city } = location.state || {};
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };
    const navigate = useNavigate();
    
    const handleAddProduct = ()=>{
        navigate('./addProduct');
    }

    const handleAddSeller = ()=>{
        navigate('./addSeller');
    }

    const handleSelltoSeller = ()=>{
        navigate('./selltoseller');
    }
    
    return (
        <div className='manuf-grid-container'>
          <header className='manuf-header'>
            <div className='manuf-menu-icon'>
              <BsJustify className='manuf-icon' onClick={OpenSidebar} />
            </div>
            <div className='manuf-header-left'>
              <BsSearch className='manuf-icon' />
            </div>
            <div className='manuf-header-right'>
              <BsFillBellFill className='manuf-icon' />
              <BsFillEnvelopeFill className='manuf-icon' />
              <BsPersonCircle className='manuf-icon' />
            </div>
          </header>
          <aside id="manuf-sidebar" className={openSidebarToggle ? "manuf-sidebar-responsive" : ""}>
            <div className='manuf-sidebar-title'>
              <div className='manuf-sidebar-brand'>
                <BsCart3 className='manuf-icon-header' /> Manufacturer
              </div>
              <span className='manuf-icon manuf-close-icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='manuf-sidebar-list'>
              <li className='manuf-sidebar-list-item'>
                <a href="">
                  <BsGrid1X2Fill className='manuf-icon' /> Dashboard
                </a>
              </li>
              <li className='manuf-sidebar-list-item'>
                <a href="/">
                  <BsFillGrid3X3GapFill className='manuf-icon' /> Home
                </a>
              </li>
              <li className='manuf-sidebar-list-item'>
                <a href="">
                  <BsFillGearFill className='manuf-icon' /> Setting
                </a>
              </li>
            </ul>
          </aside>
          <main className='manuf-main-container'>
          <div className="manuf-courses-container">
          <div className='manuf-main-title'>
              <h2>Welcome Manufacturer</h2>
            </div>
              <div className="manuf-course">
                <div className="manuf-course-preview">
                  <h2>Your Details</h2>
                </div>
                <section>
                <h2 className="manuf-info">Manufacturer Brand : {brand}</h2>
                <h2 className="manuf-info">Manufacturer ID : {id}</h2>
                <h2 className="manuf-info">Manufacturer city : {city}</h2>
                </section>
              </div>
            </div>
            
            <div className='manuf-main-cards'>
              <div className='manuf-card'>
                <div className='manuf-card-inner'>
                  <h3>ADD PRODUCT</h3>
                  <BsFillArchiveFill className='manuf-card_icon' />
                </div>
                <h4>Add a Product to be sold to the seller</h4>
                <button className="manuf-button-30" role="button" onClick = {handleAddProduct}>ADD PRODUCT</button>
              </div>
              <div className='manuf-card'>
                <div className='manuf-card-inner'>
                  <h3>ADD SELLER</h3>
                  <BsFillGrid3X3GapFill className='manuf-card_icon' />
                </div>
                <h4>Add all the seller details</h4>
                <button className="manuf-button-30" role="button" onClick = {handleAddSeller}>ADD SELLER</button>
              </div>
              <div className='manuf-card'>
                <div className='manuf-card-inner'>
                  <h3>SELL PRODUCT</h3>
                  <BsPeopleFill className='manuf-card_icon' />
                </div>
                <h4>Sell the product to the seller</h4>
                <button className="manuf-button-30" role="button" onClick = {handleSelltoSeller}>SELL</button>
              </div>
            </div>
            
          </main>
        </div>
      );
}
export default Manuf;
