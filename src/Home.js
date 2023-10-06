import React from 'react';
import { Link } from "react-router-dom";
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
          <form class="shopee-searchbar-input" autocomplete="off" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link style={{ color: '#fff', fontSize: '25px', textDecoration: 'none' }} >
                <SvgIcon style={{ fontSize: '100px', height: '45px' }}>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>Shoppee
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column ', justifyContent: "flex-start" }}>
              <div style={{ display: 'flex' }}>
                <input class="input" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ fontSize: '25px ', width: '800px' }} />
                <button style={{ backgroundColor: 'red', border: 'none', outline: 'none' }}><SearchIcon style={{ color: '#fff' }} /></button>
              </div>
              <div class="" style={{ fontSize: '12px' }}>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none' }} to='/page'>Dép 1k</Link>
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
                  <Link className='img-slider1'><img src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...' /></Link>
                  <Link className='img-slider2'><img src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...' /></Link>
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
              <div className='youlike2-1' style={{ width:'36.125rem' }}>
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

              <div className='youlike2-1' style={{ width:'36.125rem' }}>
                <div className='youlike2-1-1' >
                  <span className='youlike2-1-1-1' style={{ color: 'rbg(255,255,255)' }}>HÀNG HIỆU OUTLET</span>
                  <Link className='youlike2-1-1-2'>Xem thêm
                    <svg className='stardust-icon' enable-background="new 0 0 13 21" viewBox="0 0 13 21" role="img" class="stardust-icon stardust-icon-arrow-right-bold"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                  </Link>
                </div>
                <div className='youlike2-1-2'>

                  <Link className='youlike2-1-2-1'>
                    <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhwsava28aklad' alt='' /></div>
                    <div className='img-th'><img className='img-tha' src='https://down-vn.img.susercontent.com/file/9113119d5cef3292952e04c24cacc78d_tn' alt=''/></div>
                    <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>GIẢM SÂU GIÁ SỐC</div></div>
                    
                  </Link>
                  <Link className='youlike2-1-2-1'>
                    <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/c5fb264ed0d4cac36cb9d1f2437e6a92' alt='' /></div>
                    <div className='img-th'><img className='img-tha' src='https://down-vn.img.susercontent.com/file/65b1c46d37b3c9b4a56c8e7fd673838d_tn' alt=''/></div>
                    <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>GIẢM ĐẾN 30%</div></div>
                    
                  </Link>
                  <Link className='youlike2-1-2-1'>
                    <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src='https://down-vn.img.susercontent.com/file/vn-11134207-23020-gkekiwhjm2mv22' alt='' /></div>
                    <div className='img-th'><img className='img-tha' src='https://down-vn.img.susercontent.com/file/vn-11134216-7r98o-llx8zp2z3dnj5b_tn' alt=''/></div>
                    <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>GIẢM ĐẾN 30%</div></div>
                    
                  </Link>
                  
                </div>
              </div>
          </div>
          {/*  */}
          <div style={{height:'15px'}}>
            <picture>
              <img src="https://down-vn.img.susercontent.com/file/vn-50009109-4603c96ddfca3ce30d6a6a3d1d32b9a2" class="PLPphI" style={{height:'15px'}} alt=''/>
            </picture>
          </div>
          {/*  */}
        </div>
        <div style={{ minHeight:'50rem' }}>
          {/* Danh mục */}
            <div className='home-category-list'>
              <div style={{ paddingTop:'0'}} >
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
                                  <img className='grid4' src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt=''/>
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
                                  <img className='grid4' src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt=''/>
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
                                  <img className='grid4' src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt=''/>
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
            <div style={{display:'contents'}}>
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



    </>
  )
};

export default Home;