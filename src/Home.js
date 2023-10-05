import React from 'react';
import { Link} from "react-router-dom";
import './App.css'
// import { Link } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
  return (
    <>
      <body>

        <header className='shoppee-top'>
          <div className="main">
            <nav className='container'>
              <div className='flex1'>
                <Link className='space space1' style={{ color: '#fff' }}>Kênh người bán</Link>
                <Link className='space' style={{ color: '#fff' }}>Trở thành người bán Shoppee</Link>
                <div className='space space1' style={{ color: '#fff' }}>Tải ứng dụng</div>
                <div className='space space1' style={{ color: '#fff' }}>Kết nối </div>
                <div className='space1'><FacebookIcon /> <InstagramIcon /></div>
              </div>
              <ul className='flex2'>
                <li className='space' style={{ color: '#fff' }}><NotificationsNoneIcon />Thông báo</li>
                <Link to='/page' className='space' style={{ color: '#fff' }}><HelpOutlineIcon />Hỗ trợ</Link>
                <span className='space' style={{ color: '#fff' }}><LanguageIcon />Tiếng việt</span>
                <Link className='space' style={{ color: '#fff' }}>Đăng kí</Link>
                <Link className='space' style={{ color: '#fff' }}>Đăng nhập</Link>

              </ul>
            </nav>
          </div>

          <div  >
            <form role="search" class="shopee-searchbar-input" autocomplete="off" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Link  style={{ color: '#fff', fontSize: '25px' }} >
                  <SvgIcon style={{ fontSize: '100px', height: '45px' }}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </SvgIcon>Shoppee
                </Link>
              </div>
              <div>
                <div>
                  <input class="input" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ fontSize: '25px ', width: '600px' }} />
                  <SearchIcon style={{ color: '#fff', fontSize: '25px' }} />
                </div>
                <div class="g3CM+o">
                  <div class="DtAmKt" >
                    <Link style={{ color: '#fff' }} to='/page'>Dép 1k</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Áo 1k</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Set Kẹp Tóc</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Dép Nam</Link>
                    <Link style={{ color: '#fff' }} to='/page'>iPhone 1k</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Điện Thoại Giá Rẻ 1k</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Sét Đồ Nữ</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Áo Khoác 1k Freeship</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Túi Xách Nữ</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Ốp iPhone</Link>
                    <Link style={{ color: '#fff' }} to='/page'>Giày Nữ</Link>
                  </div></div>

              </div>
              <ShoppingCartIcon style={{ color: '#fff', fontSize: '25px' }} />
            </form>

          </div>


        </header>
        
        
        <div style={{ display:'flex' }}>
          {/* Slider */}
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://cf.shopee.vn/file/vn-50009109-9f7257e7e72f64d37e901191bbc93a1a_xxhdpi" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cf.shopee.vn/file/vn-50009109-c32c3818f495049bfdaf7d2e60673943_xxhdpi" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cf.shopee.vn/file/vn-50009109-d8a56cc68d63168c485902f3bbc1a7c6_xxhdpi" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* Slider */}

          <div className='img-slider'>
            <img src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...'/>
            <img src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...'/>
          </div>
        </div>
        

        <div>
          <a></a>
        </div>


      </body>

    </>
  )
};

export default Home;