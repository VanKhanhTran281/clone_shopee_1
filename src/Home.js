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
            <form  class="shopee-searchbar-input" autocomplete="off" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Link  style={{ color: '#fff', fontSize: '25px' ,textDecoration: 'none'}} >
                  <SvgIcon style={{ fontSize: '100px', height: '45px' }}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </SvgIcon>Shoppee
                </Link>
              </div>
              <div style={{ display:'flex' ,flexDirection:'column ',justifyContent:"flex-start"}}>
                <div style={{ display:'flex' }}>
                  <input class="input" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ fontSize: '25px ', width: '800px' }}  />
                  <button style={{ backgroundColor:'red' ,border: 'none',outline: 'none' }}><SearchIcon style={{ color: '#fff'  }} /></button>
                </div>
                <div class="" style={{fontSize:'12px'}}>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Dép 1k</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Áo 1k</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Set Kẹp Tóc</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Dép Nam</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>iPhone 1k</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Điện Thoại Giá Rẻ 1k</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Sét Đồ Nữ</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Áo Khoác 1k Freeship</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Túi Xách Nữ</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Ốp iPhone</Link>
                    <Link className='space' style={{ color: '#fff',textDecoration: 'none' }} to='/page'>Giày Nữ</Link>
                </div>

              </div>
              <ShoppingCartIcon style={{ color: '#fff', fontSize: '25px' }} />
            </form>

          </div>


        </header>
        
        
          <div style={{ display:'flex',flexDirection:"column" }}>
            <div style={{ marginTop:'30px' }}>
                <div>
                  <div style={{marginRight:'auto',marginLeft:"auto", width: "1200px"}}>
                    <div style={{lineHeight:"0",display:"flex", minHeight:"235px" ,maxHeight:"235px"}}>
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
                          <img className='img-slider1' src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...'/>
                          <img className='img-slider2' src='https://cf.shopee.vn/file/vn-50009109-fb05767994d3de1374fe6c1e5e2c0747_xhdpi' alt='...'/>
                        </div>
                    </div>
                  </div>



                  <div className='linktab'>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
                          </div>
                          
                        </div>
                        <div className='linktabdiv5'>Khung giờ săn sale</div>
                      </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                      <div className=''>
                        <div className='linktabdiv2'>
                          <div className='linktabdiv3'>
                            <img src='https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' alt='' style={{height:'100%',opacity: '1'}}/>
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
        <div style={{marginTop:'1.25rem'}}>
          <div>
            <div>
              <picture><img src='https://down-vn.img.susercontent.com/file/vn-50009109-2cf552e5d4003f099ad0bd6af2efb8b9' alt=''/></picture>
              <div>
                
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span className='' style={{color:'rbg(255,255,255)'}}>ĐỒ BẠN THÍCH Ở ĐÂY</span>
                  <Link >Xem thêm
                    <svg className='stardust-icon' enable-background="new 0 0 13 21" viewBox="0 0 13 21" role="img" class="stardust-icon stardust-icon-arrow-right-bold"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                  </Link>
                </div>
                <div>

                  <Link>
                    <div><img src='https://down-vn.img.susercontent.com/file/vn-50009109-122faaec270ca3277198c6d0c77bb0fe_tn' alt=''/></div>
                    <div><div class="" style={{color: 'rgb(238, 78, 46)'}}>₫169.000</div></div>
                    <div><div class=""><span class="">-23%</span></div></div>
                  </Link>
                  <Link>
                    <div></div>
                    <div></div>
                    <div></div>
                  </Link>
                  <Link>
                    <div></div>
                    <div></div>
                    <div></div>
                  </Link>
                </div>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
          <div>

          </div>
        </div>



    </>
  )
};

export default Home;