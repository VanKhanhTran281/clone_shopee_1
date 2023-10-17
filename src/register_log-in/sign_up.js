import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../App.css'
import './login.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
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
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Trung tâm trợ giúp</span></Link></li>
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Shopee Blog</span></Link></li>
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Shopee Mall</span></Link></li>
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Hướng Dẫn Mua Hàng</span></Link></li>
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Hướng Dẫn Bán Hàng</span></Link></li>
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Thanh Toán</span></Link></li>
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Shopee Xu</span></Link></li>
                                                <li className='customer-care1-1-2-1'><Link className='customer-care1-1-2-1-1'><span className='customer-care1-1-2-1-1-1 hoverr'>Vận CHUYỂN</span></Link></li>
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
                    </div>
                </div>
            </div>


        </>
    )
}
export default Signup