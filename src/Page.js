import React from 'react';
import Home from './Home';
import './App.css'
import './Page.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { formGroupClasses } from '@mui/material';
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
          <form className="shopee-searchbar-input" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      {/* <Product/> */}
      <div className='product-page'>
        {/* Content */}
        <div className='product-page-contents'>
          <div className='product-page-contents-container'>
            <div className='product-page-contents-container-filter-panel'>
              <div className='page-contents-container-filter-status'>
                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon">
                  <g><polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
                    stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline>
                  </g>
                </svg>
                <h2 className="shopee-search-filter-status__text">Bộ lọc tìm kiếm<span class="sr-only"></span></h2>
              </div>
              <fieldset className="shopee-filter-group shopee-facet-filter">
                <legend className="shopee-filter-group__header">Theo Danh Mục</legend>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035813" />
                    </div>
                    <span className="shopee-checkbox__label">Xăng-đan (51)</span>
                  </label></div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035840" />
                    </div>
                    <span className="shopee-checkbox__label">Xăng-đan Đế Bằng (51)</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035807" />
                    </div>
                    <span className="shopee-checkbox__label">Giày Thể Thao/ Sneakers (44)</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035830" />
                    </div><span className="shopee-checkbox__label">Giày Thể Thao/ Sneaker (44)</span>
                  </label>
                </div>
                <button aria-expanded="false" className="shopee-filter-group__toggle-btn" aria-label="">Thêm
                  <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-down">
                    <g>
                      <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                    </g>
                  </svg>
                </button>
              </fieldset>
              <fieldset className="shopee-filter-group shopee-facet-filter">
                <legend className="shopee-filter-group__header">Theo Danh Mục</legend>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035813" />
                    </div>
                    <span className="shopee-checkbox__label">Xăng-đan (51)</span>
                  </label></div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035840" />
                    </div>
                    <span className="shopee-checkbox__label">Xăng-đan Đế Bằng (51)</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035807" />
                    </div>
                    <span className="shopee-checkbox__label">Giày Thể Thao/ Sneakers (44)</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="" value="11035830" />
                    </div><span className="shopee-checkbox__label">Giày Thể Thao/ Sneaker (44)</span>
                  </label>
                </div>
                <button aria-expanded="false" className="shopee-filter-group__toggle-btn" aria-label="">Thêm
                  <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-down">
                    <g>
                      <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                    </g>
                  </svg>
                </button>
              </fieldset>
            </div>


            <div style={{flex: '1', width: '0', minWidth:'0'}}>
              <section style={{marginBottom:'1.25rem'}}>
                <div style={{paddingTop:'1.25 rem'}}>
                  <div className="shopee-header-section__header" style={{display:'flex',alignItems:'center',paddingBottom:'0.625rem'}} >
                    <div className="shopee-header-section__header__title">
                      <h1 style={{fontSize:'unset' ,fontWeight:'unset',margin:'unset'}}>Shop liên quan đến
                        <span>
                          <span>"</span>
                          <span style={{color:'#ee4d2d',marginBottom:'1.25rem'}}>dép 0đ</span>
                          <span>"</span></span>
                      </h1>
                    </div>
                    <Link className="shopee-header-section__header-link" tabindex="-1" href="" style={{textDecoration:'none'}}>
                      <button className="shopee-button-no-outline">Thêm kết quả&nbsp;
                        <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right" style={{fontSize:'.625rem',color:'#ee4d2d'}}>
                          <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                        </svg>
                      </button>
                    </Link></div>
                    <div className="shopee-header-section__content">
                      <div className="shopee-search-user-item ">
                        <div aria-hidden="true" className="shopee-search-user-item__leading">
                          <div className="shopee-avatar">
                            <div className="shopee-avatar__placeholder">
                              <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-headshot">
                                <g>
                                  <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                                  <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10">
                                  </path>
                                </g>
                              </svg>
                            </div>
                            <div className="shopee-avatar__img-wrapper">
                              <div className="shopee-avatar__img"></div>
                              <div className="shopee-avatar__img_1">
                                <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-headshot">
                                  <g>
                                    <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                                    <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link className="shopee-search-user-item__shop-info" href="">
                          <div className="shopee-search-user-item__nickname">ShoesBao</div>
                          <div className="shopee-search-user-item__username">r5a1glbjrn</div>
                          <div className="shopee-search-user-item__follow-count">
                            <span className="shopee-search-user-item__follow-count-number">68</span>
                            <span> Người theo dõi</span>
                            <span> |</span>
                            <span className="shopee-search-user-item__follow-count-number">1</span><span> Đang Theo</span>
                          </div>
                        </Link>
                      


                      
                    </div>
                  </div>
                </div>
              </section>
              <section>

              </section>
            </div>
          </div>
        </div>
        {/* Footer  */}
        <div>

        </div>
      </div>

    </>
  )
};

export default Page;