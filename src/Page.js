import React from 'react';
import Home from './Home';
import './App.css'
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import {  formGroupClasses } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './component/dep';

const Page = () => {
    return (
      
    
    <>
          <header className='shoppee-top'>
        <div className="main">
          <nav className='container'>
            <div className='flex1'>
              <Link className='space space1' style={{ color: '#fff' }}>Kênh người bán</Link>
              <Link className='space space1' style={{ color: '#fff' }}>Trở thành người bán Shoppee</Link>
              <div className='space space1' style={{ color: '#fff' }}>Tải ứng dụng</div>
              <div className='space space1' style={{ color: '#fff' }}>Kết nối </div>
              <div className='space1'><FacebookIcon /> <InstagramIcon /></div>
            </div>
            <ul className='flex2'>
              <li className='space' style={{ color: '#fff' }}><NotificationsNoneIcon />Thông báo</li>
              <Link to='/page' className='space space1' style={{ color: '#fff' }}><HelpOutlineIcon />Hỗ trợ</Link>
              <span className='space space1' style={{ color: '#fff' }}><LanguageIcon />Tiếng việt</span>
              <Link className='space space1' style={{ color: '#fff' }}>Đăng kí</Link>
              <Link className='space space1' style={{ color: '#fff' }}>Đăng nhập</Link>

            </ul>
          </nav>
        </div>

        <div  >
          <form className="shopee-searchbar-input"  style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link to='/' style={{ color: '#fff', fontSize: '25px', textDecoration: 'none' }} >
                <SvgIcon style={{ fontSize: '100px', height: '45px' }}>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>Shoppee
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column ', justifyContent: "flex-start" }}>
              <div style={{ display: 'flex' }}>
                <input className="input" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ fontSize: '25px ', width: '800px' }} />
                <button style={{ backgroundColor: 'red', border: 'none', outline: 'none' }}><SearchIcon style={{ color: '#fff' }} /></button>
              </div>
              <div className="" style={{ fontSize: '12px' }}>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/'>Dép 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Áo 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Set Kẹp Tóc</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Dép Nam</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>iPhone 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Điện Thoại Giá Rẻ 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Sét Đồ Nữ</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Áo Khoác 1k Freeship</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Túi Xách Nữ</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Ốp iPhone</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Giày Nữ</Link>
              </div>

            </div>
            <ShoppingCartIcon style={{ color: '#fff', fontSize: '25px' }} />
          </form>

        </div>


      </header>
      <Product/>

    </>
    )
  };
  
  export default Page;