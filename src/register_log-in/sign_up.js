import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../App.css'
import './login.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PaymentMethod from '../component_interface/PaymentMethod';
import { Payment, Shippingunits, Customer, ReturnShopee, CountriesAndRegion, FollowOn, DownloadShopee, Policy, FooterEnd } from '../component_interface/example'
import CustomerCare from '../component_interface/CustomerCare';
import CountriesAndRegions from '../component_interface/CountriesAndRegions';
import FollowOns from '../component_interface/FollowOns';
import DownloadShopees from '../component_interface/DownloadShopees';
import Policys from '../component_interface/Policys';
import FooterEnds from '../component_interface/FooterEnds';
const Signup = () => {
    return (
        <>
            <div className="login">
                <div>
                    <div className="login-header">
                        <nav className="login-header-nav">
                            <div className="login-header-nav1">
                                <div className="login-header-nav1-1">
                                    <Link to='/' style={{ color: '#ee4d2d', textDecoration: 'none', display: 'flex', alignItems: "center", marginRight: '18px' }} >
                                        <LocalMallIcon style={{ fontSize: '50' }}>
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </LocalMallIcon>
                                        <span style={{ fontSize: '30px' }}>Shopee</span>
                                    </Link>
                                    <div className="login-header-nav1-1-1">
                                        Đăng ký
                                    </div>
                                </div>
                                <Link className="login-header-nav1-2">
                                    Bạn cần giúp đỡ ?
                                </Link>
                            </div>
                        </nav>
                        <div className="login-content">
                            <div className="login-content1">
                                <img style={{ marginRight: '-410px' }} src="https://down-vn.img.susercontent.com/file/sg-11134004-7rbk9-llop77lrd6q3e9" alt="" />
                                <div className="login-content1-1">
                                    <div className="login-content-space"></div>
                                    <div>
                                        <form>
                                            <div className="login-form">
                                                <div className="login-form-header">
                                                    <div className="login-form-header1">
                                                        <div className="login-form-header1-1">Đăng ký</div>
                                                    </div>
                                                </div>
                                                <div className="login-form2">
                                                    <div className="login-form-username">
                                                        <div className="login-form-username1">
                                                            <input className="login-form-username1-1" type="text" placeholder="Số điện thoại" />
                                                        </div>
                                                        <div className="login-form-username2"></div>
                                                    </div>
                                                    <button className="login-button" disabled>Tiếp theo</button>
                                                    <div style={{ textTransform: 'uppercase' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '14px' }}>
                                                            <div style={{ height: '1px', width: '100%', flex: '1', backgroundColor: '#dbdbdb' }}></div>
                                                            <span style={{ color: '#ccc', padding: '0 16px', textTransform: 'uppercase', fontSize: '.75rem' }}>hoặc</span>
                                                            <div style={{ height: '1px', width: '100%', flex: '1', backgroundColor: '#dbdbdb' }}></div>
                                                        </div>
                                                        <div className="login-other">
                                                            <button className="login-other1">
                                                                <FacebookIcon style={{ color: '#0088ff' }} />
                                                                <div>
                                                                    Facebook
                                                                </div>
                                                            </button>
                                                            <button className="login-other1">
                                                                <GoogleIcon style={{ color: '#0088ff' }} />
                                                                <div>
                                                                    Google
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="login-form3">
                                                    <div className="login-form3-1">
                                                        Bạn mới biết đến Shopee?
                                                        <Link to='/login' style={{ textDecoration: 'none', color: "#ee4d2d", paddingLeft: '5px' }}>Đăng nhập</Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
                    </div>
                </div>
            </div>


        </>
    )
}
export default Signup