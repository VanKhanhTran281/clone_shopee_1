import React from 'react';
import { Link } from "react-router-dom";
import './App.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import 'bootstrap/dist/css/bootstrap.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';


const Home = () => {
  return (
    <>

      <header className='shoppee-top'>
        <div className="main">
          <nav className='container'>
            <div className='flex1'>
              <Link className='space space1 space2' style={{ color: '#fff' }}>Kênh người bán</Link>
              <Link className='space space1 space2' style={{ color: '#fff' }}>Trở thành người bán Shoppee</Link>
              <div className='space space1 space2' style={{ color: '#fff' }}>Tải ứng dụng</div>
              <div className='space space1 ' style={{ color: '#fff' }}>Kết nối </div>
              <div className='space1'><FacebookIcon /> <InstagramIcon /></div>
            </div>
            <div style={{ flex: '1' }}></div>
            <ul className='flex2'>
              <li className='space space2' style={{ color: '#fff' }}><NotificationsNoneIcon />Thông Báo</li>
              <Link to='' className='space space1 space2' style={{ color: '#fff' }}><HelpOutlineIcon />Hỗ Trợ</Link>
              <span className='space space1 space2' style={{ color: '#fff' }}><LanguageIcon />Tiếng việt</span>
              <Link to='/signup' className='space space1 space2' style={{ color: '#fff' }}>Đăng Ký</Link>
              <Link to='/login' className='space space1 space2 ' style={{ color: '#fff' }}>Đăng Nhập</Link>

            </ul>
          </nav>
        </div>

        <div className='shopee-searchbar'>
          <form className="shopee-searchbar-input" autoComplete="off" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <Link to='/' style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: "center" }} >
                <LocalMallIcon style={{ fontSize: '50' }}>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </LocalMallIcon>
                <span style={{ fontSize: '35px' }}>Shopee</span>
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column ', justifyContent: "flex-start" }}>
              <div style={{ display: 'flex' }}>
                <input className="input" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ fontSize: '25px ', width: '840px', borderRadius: '5px' }} />
                <button className='button-search' style={{ border: 'none', outline: 'none' }} ><SearchIcon style={{ color: '#fff' }} /></button>
              </div>
              <div class="" style={{ fontSize: '12px' }}>
                <Link to='page' className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }}>Dép 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Áo 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Set Kẹp Tóc</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Dép Nam</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>iPhone 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Điện Thoại Giá Rẻ 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Sét Đồ Nữ</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Áo Khoác 1k Freeship</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Túi Xách Nữ</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Ốp iPhone</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='page'>Giày Nữ</Link>
              </div>

            </div>
            <div >
              <div className='product-shopping-main'>
                {/* <ShoppingCartIcon style={{ color: '#fff', fontSize: '25px' }} /> */}
                <svg style={{ color: '#fff' }} width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 
                       0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 
                       0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                {/* <div aria-describedby="cart_drawer_target_id" role="tooltip" aria-hidden="false" className="product-shopping" style={{ top: '92px', right: '233px', transformOrigin: '381.1px top' }}>
                  <div className="product-shopping1" style={{ top: '1px', left: '381.1px', transform: 'translate(-7px, -100%)', borderBottom: '10px solid rgba(0, 0, 0, 0.09)', borderLeft: '0px solid transparent', borderRight: '0px solid transparent' }}>
                    <div className="product-shopping1-1" style={{ borderBottom: '10px solid rgb(255, 255, 255)', borderLeft: '14px solid transparent', borderRight: '14px solid transparent', bottom: '-10px' }}>
                    </div>
                  </div>
                  <div className="product-shopping2">
                    <div className="product-shopping2-1">
                      <img className="product-shopping2-1-1" src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png' alt='' />
                      <div className="product-shopping2-1-2">Chưa có sản phẩm</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </form>

        </div>


      </header>


      <div style={{ display: 'flex', flexDirection: "column" }}>
        <div style={{ marginTop: '30px' }}>
          <div>
            <div style={{ marginRight: 'auto', marginLeft: "auto", width: "1200px" }}>
              <div style={{ lineHeight: "0", display: "flex", minHeight: "235px", maxHeight: "235px" }}>
                <div className='slider'>
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
                </div>

                <div className='img-slider'>
                  <Link className='img-slider1'><div className='img-slider1-1'><img className='img-slider1-1-1' src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...' /></div></Link>
                  <Link className='img-slider2'><div className='img-slider2-1'><img className='img-slider2-1-1' src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...' /></div></Link>
                </div>
              </div>
            </div>



            <div className='linktab'>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className=''>
                  <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                      <img src='https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi' alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                  </div>
                  <div className='linktabdiv5'>Khung giờ săn sale</div>
                </div>
              </Link>


            </div>
          </div>
        </div>
      </div>

      {/* Mục đồ bạn thích */}
      <div style={{ marginRight: 'auto', marginLeft: "auto", width: "1200px" }}>
        <div style={{ marginTop: '1.25rem' }}>
          <div className='youlike1' style={{ position: 'relative' }}>
            <picture><img style={{ height: '60px', display: 'block', width: '100%' }} src='https://down-vn.img.susercontent.com/file/vn-50009109-2cf552e5d4003f099ad0bd6af2efb8b9' alt='' /></picture>
            <div>

            </div>
            <div></div>
          </div>
          <div className='youlike2'>
            <div className='youlike2-1' style={{ width: '36.125rem' }}>
              <div className='youlike2-1-1' >
                <span className='youlike2-1-1-1' style={{ color: 'rbg(255,255,255)' }}>ĐỒ BẠN THÍCH Ở ĐÂY</span>
                <Link className='youlike2-1-1-2'>Xem thêm
                  <svg className='stardust-icon' enable-background="new 0 0 13 21" viewBox="0 0 13 21" role="img" class="stardust-icon stardust-icon-arrow-right-bold"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                </Link>
              </div>
              <div className='youlike2-1-2'>

                <Link className='youlike2-1-2-1'>
                  <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/vn-50009109-122faaec270ca3277198c6d0c77bb0fe_tn' alt='' /></div>
                  <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>₫169.000</div></div>
                  <div className='youlike2-1-2-1-3'><div class="youlike2-1-2-1-3-1"><span class="youlike2-1-2-1-3-1-1">-23%</span></div></div>
                </Link>
                <Link className='youlike2-1-2-1'>
                  <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/vn-50009109-807a1f0a40b4fc6dad3bb7ad5e0e01a5_tn' alt='' /></div>
                  <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>₫83.000</div></div>
                  <div className='youlike2-1-2-1-3'><div class="youlike2-1-2-1-3-1"><span class="youlike2-1-2-1-3-1-1">-14%</span></div></div>
                </Link>
                <Link className='youlike2-1-2-1'>
                  <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/dc69149a669af488b6f6ff05be2b6fbb_tn' alt='' /></div>
                  <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>₫870.000</div></div>
                  <div className='youlike2-1-2-1-3'><div class="youlike2-1-2-1-3-1"><span class="youlike2-1-2-1-3-1-1">-14%</span></div></div>
                </Link>

              </div>
            </div>

            <div className='youlike2-1' style={{ width: '36.125rem' }}>
              <div className='youlike2-1-1' >
                <span className='youlike2-1-1-1' style={{ color: 'rbg(255,255,255)' }}>HÀNG HIỆU OUTLET</span>
                <Link className='youlike2-1-1-2'>Xem thêm
                  <svg className='stardust-icon' enable-background="new 0 0 13 21" viewBox="0 0 13 21" role="img" class="stardust-icon stardust-icon-arrow-right-bold"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                </Link>
              </div>
              <div className='youlike2-1-2'>

                <Link className='youlike2-1-2-1'>
                  <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhwsava28aklad' alt='' /></div>
                  <div className='img-th'><img className='img-tha' src='https://down-vn.img.susercontent.com/file/9113119d5cef3292952e04c24cacc78d_tn' alt='' /></div>
                  <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>GIẢM SÂU GIÁ SỐC</div></div>

                </Link>
                <Link className='youlike2-1-2-1'>
                  <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/c5fb264ed0d4cac36cb9d1f2437e6a92' alt='' /></div>
                  <div className='img-th'><img className='img-tha' src='https://down-vn.img.susercontent.com/file/65b1c46d37b3c9b4a56c8e7fd673838d_tn' alt='' /></div>
                  <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>GIẢM ĐẾN 30%</div></div>

                </Link>
                <Link className='youlike2-1-2-1'>
                  <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/vn-11134207-23020-gkekiwhjm2mv22' alt='' /></div>
                  <div className='img-th'><img className='img-tha' src='https://down-vn.img.susercontent.com/file/vn-11134216-7r98o-llx8zp2z3dnj5b_tn' alt='' /></div>
                  <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>GIẢM ĐẾN 30%</div></div>

                </Link>

              </div>
            </div>
          </div>
          {/*  */}
          <div style={{ height: '15px' }}>
            <picture>
              <img src="https://down-vn.img.susercontent.com/file/vn-50009109-4603c96ddfca3ce30d6a6a3d1d32b9a2" class="PLPphI" style={{ height: '15px' }} alt='' />
            </picture>
          </div>
          {/*  */}
        </div>
        <div style={{ minHeight: '50rem' }}>
          {/* Danh mục */}
          <div className='home-category-list'>
            <div style={{ paddingTop: '0' }} >
              <div className='shopee-header'>
                <div className='shopee-header-title'>Danh mục</div>
              </div>
            </div>
            <div>
              <div className='image-carouse'>
                <div className='image-carouse_item-list-wrapper'>
                  <ul className='image-carouse_item-list' >
                    <li className='image-carouse_item'>

                      <Link className='home-category-list_grid' >
                        <div className='grid1'>
                          <div className='grid2'>
                            <div className='grid3'>
                              <img className='grid4' src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt='' />
                            </div>
                          </div>
                          <div>
                            <div>Thoi trang nam</div>
                          </div>
                        </div>
                      </Link>
                      <Link className='home-category-list_grid' >
                        <div className='grid1'>
                          <div className='grid2'>
                            <div className='grid3'>
                              <img className='grid4' src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt='' />
                            </div>
                          </div>
                          <div>
                            <div>Thoi trang nam</div>
                          </div>
                        </div>
                      </Link>
                      <Link className='home-category-list_grid' >
                        <div className='grid1'>
                          <div className='grid2'>
                            <div className='grid3'>
                              <img className='grid4' src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt='' />
                            </div>
                          </div>
                          <div>
                            <div>Thoi trang nam</div>
                          </div>
                        </div>
                      </Link>


                    </li>
                  </ul>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          {/* Flash sale */}
          <div style={{ display: 'contents' }}>
            <div style={{ paddingTop: '1.25rem' }}>
              <div className='sale-header'>
                <div className='sale-header-1'>
                  <div className='sale-header-1-1'>
                    <img className='img-flash-sale' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e538967ec12cb5caa.png' alt=''></img>
                  </div>
                  <div className='sale-header-1-2'>

                  </div>
                </div>
                <Link>

                </Link>
              </div>
              <div>

              </div>
            </div>
          </div>
          {/*  */}
          {/* Shopee mall */}
          {/* Tìm kiếm hàng đầu */}
          {/* Gợi ý hôm nay */}
        </div>
      </div>


      {/* Footer */}
      <div className='footer' role='contentinfo'>
        {/* Shopee gì cũng có */}
        <div>

        </div>

        {/* Danh mục */}
        <div>

        </div>

        {/* Chăm sóc khách hàng */}
        <div className='footer-navigation'>
          <div className='customer-care'>
            <div className='customer-care1'>
              <div className='customer-care1-1'>
                <div className='customer-care1-1-1'>
                  CHĂM SÓC KHÁCH HÀNG
                </div>
                <ul className='customer-care1-1-2'>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Trung tâm trợ giúp</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Shopee Blog</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Shopee Mall</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Hướng Dẫn Mua Hàng</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Hướng Dẫn Bán Hàng</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Thanh Toán</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Shopee Xu</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Vận Chuyển</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Trả Hàng & Hoàn Tiền</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Chăm Sóc Khách Hàng</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Chính Sách Bảo Hành</span></Link></li>
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-care1-1-1'>
                  VỀ SHOPEE
                </div>
                <ul className='customer-care1-1-2'>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Giới Thiệu Về Shopee Việt Nam</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Tuyển Dụng</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Điều Khoản Shopee</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Chính Sách Bảo Mật</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Chính Hãng</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Kênh Người Bán</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Flash Sales</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Chương Trình Tiếp Thị liên kết Shopee</span></Link></li>
                  <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Liên Hệ Với Truyền Thông</span></Link></li>
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-thanhtoan1'>THANH TOÁN</div>
                <ul className='customer-thanhtoan2'>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492' alt='' />
                    </Link>
                  </li>
                </ul>
                <div className='customer-thanhtoan3'>ĐƠN VỊ VẬN CHUYỂN</div>
                <ul className='customer-thanhtoan2'>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6' alt='' />
                    </Link>
                  </li>
                  <li className='customer-thanhtoan2-1'>
                    <Link className='customer-thanhtoan2-1-1'>
                      <img src='https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd' alt='' />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-care1-1-1'>THEO DÕI CHÚNG TÔI TRÊN</div>
                <ul className='footer-linkweb'>
                  <li className='footer-linkweb1'>
                    <Link className='footer-linkweb1-1'>
                      <img className='footer-linkweb1-1-1' src='https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5' alt='' />
                      <span className='footer-linkweb1-1-2 hoverr'>Facebook</span>
                    </Link>
                  </li>
                  <li className='footer-linkweb1'>
                    <Link className='footer-linkweb1-1'>
                      <img className='footer-linkweb1-1-1' src='https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91' alt='' />
                      <span className='footer-linkweb1-1-2 hoverr'>Instagram</span>
                    </Link>
                  </li>
                  <li className='footer-linkweb1'>
                    <Link className='footer-linkweb1-1'>
                      <img className='footer-linkweb1-1-1' src='https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a' alt='' />
                      <span className='footer-linkweb1-1-2 hoverr'>Linkedln</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-care1-1-1'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
                <div className='footer-dowload'>
                  <Link className='footer-dowload1'>
                    <img className='footer-dowload1-1' src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472' alt='' />
                  </Link>
                  <div className='footer-dowload2'>
                    <Link className='footer-dowload2-1'>
                      <img className='footer-dowload2-1-1' src='https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163' alt='' />
                    </Link>
                    <Link className='footer-dowload2-1'>
                      <img className='footer-dowload2-1-1' src='https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def' alt='' />
                    </Link>
                    <Link className='footer-dowload2-1'>
                      <img className='footer-dowload2-1-1' src='https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0' alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='customer-care2'>
              <div className='customer-care2-1-1'>© 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
              <div className='customer-care2-2'>
                <div className='customer-care2-2-1-1'>Quốc gia &amp; Khu vực:</div>

                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Singapore</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Indonesia</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Đài Loan</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Thái Lan</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Malaysia</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Việt Nam</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Philippines</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Brazil</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>México</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Colombia</Link>
                </div>
                <div className='customer-care2-2-2'>
                  <Link className='customer-care2-2-2-1'>Chile</Link>
                </div>
              </div>

            </div>
          </div>
          {/* Chính sách */}
          <div className='policys'>
            <div className='policy'>
              <div className='list-policy'>
                <div className='list-policy1'>
                  <Link className='list-policy1-1'>
                    <span>Chính sách bảo mật</span>
                  </Link>
                </div>
                <div className='list-policy1'>
                  <Link className='list-policy1-1'>
                    <span>Quy chế hoạt động</span>
                  </Link>
                </div>
                <div className='list-policy1'>
                  <Link className='list-policy1-1'>
                    <span>Chính sách vận chuyển</span>
                  </Link>
                </div>
                <div className='list-policy1'>
                  <Link className='list-policy1-1'>
                    <span>Chính sách trả hàng và hoàn tiền</span>
                  </Link>
                </div>
              </div>
              <div className='img-footer'>
                <Link className='img-footer1'><img className='img-footer1-1' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/3ce17addcf90b8cd3952b8ae0ffc1299.png' alt='' /></Link>
                <Link className='img-footer1'><img className='img-footer1-1' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/3ce17addcf90b8cd3952b8ae0ffc1299.png' alt='' /></Link>
                <Link className='img-footer1'><img className='img-footer1-2' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/3ce17addcf90b8cd3952b8ae0ffc1299.png' alt='' /></Link>
              </div>
              <div style={{ marginBottom: '1.5625rem', display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>Công ty TNHH Shopee</div>
              <div style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem' }} >Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</div>
              <div style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem' }} >Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí -  Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
              <div style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem' }} >Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
              <div style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem' }} >© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
};

export default Home;