import React from 'react';
import { Link } from "react-router-dom";
import './App.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import 'bootstrap/dist/css/bootstrap.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PaymentMethod from './component_interface/PaymentMethod';
import {
  Payment, Shippingunits, Customer, ReturnShopee, NavbarProduct, CountriesAndRegion,
  FollowOn, DownloadShopee, Policy, FooterEnd, SliderOption, ProductsYouLike, BrandOutlet
} from './component_interface/example'
import CustomerCare from './component_interface/CustomerCare';
import NavbarProducts from './component_interface/NavbarProducts';
import CountriesAndRegions from './component_interface/CountriesAndRegions';
import FollowOns from './component_interface/FollowOns';
import DownloadShopees from './component_interface/DownloadShopees';
import Policys from './component_interface/Policys';
import FooterEnds from './component_interface/FooterEnds';
import SliderOptions from './component_interface/SliderOptions';
import ProductsYouLikes from './component_interface/ProductsYouLikes';
import BrandOutlets from './component_interface/BrandOutlets';

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
              <div className='icons-header'>
                <Link className='icons-header1' title='Kết nối Facbook'></Link>
                <Link className='icons-header2' title='Kết nối Instagram'></Link>
              </div>
            </div>
            <div style={{ flex: '1' }}></div>
            <ul className='flex2'>
              <li className='space space2' style={{ color: '#fff',display:'flex',paddingTop:'6px' }}><NotificationsNoneIcon style={{fontSize:'1.1rem'}}/><div style={{marginLeft:'.3125rem'}}>Thông Báo</div></li>
              <Link to='' className='space space1 space2' style={{ color: '#fff',display:'flex',paddingTop:'6px' }}><HelpOutlineIcon style={{fontSize:'1.1rem'}}/><div style={{marginLeft:'.3125rem'}}>Hỗ Trợ</div></Link>
              <span className='space space1 space2' style={{ color: '#fff',display:'flex',paddingTop:'6px' }}><LanguageIcon style={{fontSize:'1.1rem'}}/><div style={{marginLeft:'.3125rem'}}>Tiếng việt</div></span>
              <Link to='/signup' className='space space1 space2' style={{ color: '#fff' }}>Đăng Ký</Link>
              <Link to='/login' className='space space1 space2 ' style={{ color: '#fff' }}>Đăng Nhập</Link>

            </ul>
          </nav>
        </div>

        <div className='shopee-searchbar'>
          <div className="shopee-searchbar-input" autoComplete="off" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <Link to='/' style={{ color: '#fff',marginTop:'-10px', textDecoration: 'none', display: 'flex', alignItems: "center" }} >
                <LocalMallIcon style={{ fontSize: '50',marginTop:'-8px' }}>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </LocalMallIcon>
                <span style={{ fontSize: '30px' }}>Shopee</span>
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column ', width: '840px', justifyContent: "flex-start" }}>
              <form style={{ display: 'flex', backgroundColor: '#fff', borderRadius: '2px', height: '2.5rem', padding: '.1875rem', border: 'none', justifyContent: 'space-between' }}>
                <div style={{ padding: '0 .625rem', flex: '1' }}>
                  <input className="input-search" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ marginTop: '6px', width: '500px' }} />
                </div>
                <button className='button-search' style={{ border: 'none', outline: 'none' }} ><SearchIcon style={{ color: '#fff' }} /></button>
              </form>
              <div class="" style={{ fontSize: '12px', marginTop: '.1875rem' }}>
                {NavbarProduct.map((e, i) => {
                  return <NavbarProducts key={i} method={e} />;
                })}
              </div>


            </div>
            <div >
              <div className='product-shopping-main' style={{ padding: '10px 0' }}>
                {/* <ShoppingCartIcon style={{ color: '#fff', fontSize: '25px' }} /> */}
                <svg style={{ color: '#fff' }} width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 
                       0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 
                       0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                {/* <div aria-describedby="cart_drawer_target_id" role="tooltip" aria-hidden="false" className="product-shopping" style={{ top: '46px', right: '0px', transformOrigin: '381.1px top' }}>
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
          </div>

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
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://cf.shopee.vn/file/vn-50009109-9f7257e7e72f64d37e901191bbc93a1a_xxhdpi" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://cf.shopee.vn/file/vn-50009109-c32c3818f495049bfdaf7d2e60673943_xxhdpi" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://cf.shopee.vn/file/vn-50009109-d8a56cc68d63168c485902f3bbc1a7c6_xxhdpi" className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
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
              {SliderOption.map((e, i) => {
                return <SliderOptions key={i} method={e} />;
              })}
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
                  <svg className='stardust-icon' enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" class="stardust-icon stardust-icon-arrow-right-bold"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                </Link>
              </div>
              <div className='youlike2-1-2'>
                {ProductsYouLike.map((e, i) => {
                  return <ProductsYouLikes key={i} method={e} />;
                })}
              </div>
            </div>

            <div className='youlike2-1' style={{ width: '36.125rem' }}>
              <div className='youlike2-1-1' >
                <span className='youlike2-1-1-1' style={{ color: 'rbg(255,255,255)' }}>HÀNG HIỆU OUTLET</span>
                <Link className='youlike2-1-1-2'>Xem thêm
                  <svg className='stardust-icon' enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" class="stardust-icon stardust-icon-arrow-right-bold"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                </Link>
              </div>
              <div className='youlike2-1-2'>
                {BrandOutlet.map((e, i) => {
                  return <BrandOutlets key={i} method={e} />;
                })}
              </div>
            </div>
          </div>
          {/*  */}
          <div style={{ height: '15px' ,background:'#fff' }}>
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
                  {Customer.map((e, i) => {
                    return <CustomerCare key={i} method={e} />;
                  })}
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-care1-1-1'>
                  VỀ SHOPEE
                </div>
                <ul className='customer-care1-1-2'>
                  {ReturnShopee.map((e, i) => {
                    return <CustomerCare key={i} method={e} />;
                  })}
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-thanhtoan1'>THANH TOÁN</div>
                <ul className='customer-thanhtoan2'>
                  {Payment.map((e, i) => {
                    return <PaymentMethod key={i} method={e} />;
                  })}
                </ul>
                <div className='customer-thanhtoan3'>ĐƠN VỊ VẬN CHUYỂN</div>
                <ul className='customer-thanhtoan2'>
                  {Shippingunits.map((e, i) => {
                    return <PaymentMethod key={i} method={e} />;
                  })}
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-care1-1-1'>THEO DÕI CHÚNG TÔI TRÊN</div>
                <ul className='footer-linkweb'>
                  {FollowOn.map((e, i) => {
                    return <FollowOns key={i} method={e} />;
                  })}
                </ul>
              </div>
              <div className='customer-care1-1'>
                <div className='customer-care1-1-1'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
                <div className='footer-dowload'>
                  <Link className='footer-dowload1'>
                    <img className='footer-dowload1-1' src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472' alt='' />
                  </Link>
                  <div className='footer-dowload2'>
                    {DownloadShopee.map((e, i) => {
                      return <DownloadShopees key={i} method={e} />;
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className='customer-care2'>
              <div className='customer-care2-1-1'>© 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
              <div className='customer-care2-2'>
                <div className='customer-care2-2-1-1'>Quốc gia &amp; Khu vực:</div>
                {CountriesAndRegion.map((e, i) => {
                  return <CountriesAndRegions key={i} method={e} />;
                })}
              </div>

            </div>
          </div>
          {/* Chính sách */}
          <div className='policys'>
            <div className='policy'>
              <div className='list-policy'>
                {Policy.map((e, i) => {
                  return <Policys key={i} method={e} />;
                })}
              </div>
              <div className='img-footer'>
                <Link className='img-footer1 img-footer1-1'></Link>
                <Link className='img-footer1 img-footer1-1'></Link>
                <Link className='img-footer1 img-footer1-2'></Link>
              </div>
              <div style={{ marginBottom: '1.5625rem', display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>Công ty TNHH Shopee</div>
              {FooterEnd.map((e, i) => {
                return <FooterEnds key={i} method={e} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;