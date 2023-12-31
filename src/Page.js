import { useEffect, useState } from 'react';
import './App.css'
import './Page.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import 'bootstrap/dist/css/bootstrap.css';
import ProductHome from './component/pagehome'
import data from './component/data';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SidebarContent from './component_interface/SidebarContent';
import PaymentMethod from './component_interface/PaymentMethod';
import {
  Payment, Shippingunits, Customer, ReturnShopee, NavbarProductPage,
  CountriesAndRegion, FollowOn, DownloadShopee, Policy, FooterEnd, SidebarContentList1, SidebarContentList2,
  SidebarContentList3, SidebarContentList4, SidebarContentList5, SidebarContentList6
} from './component_interface/example'
import CustomerCare from './component_interface/CustomerCare';
import NavbarProducts from './component_interface/NavbarProducts';
import CountriesAndRegions from './component_interface/CountriesAndRegions';
import FollowOns from './component_interface/FollowOns';
import DownloadShopees from './component_interface/DownloadShopees';
import Policys from './component_interface/Policys';
import FooterEnds from './component_interface/FooterEnds';
const Page = () => {

  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState({
    location: {
      nuocngoai: {
        checked: false,
        value: ''
      },
      hanoi: {
        checked: false,
        value: ''
      },
      hochiminh: {
        checked: false,
        value: ''
      },
      thainguyen: {
        checked: false,
        value: ''
      }
    }
  });

  // console.log(products);
  const [selectedLocations, setSelectedLocations] = useState([]);
  // console.log(selectedLocations);

  const handleCheckboxChange = (event) => {
    const { name, checked, value } = event.target;

    // setFilter({
    //   ...filter,
    //   location: {
    //     ...filter.location,
    //     [name]: {
    //       checked,
    //       value
    //     }
    //   }
    // });

    if (checked) {
      setSelectedLocations((prevSelectedLocations) => [...prevSelectedLocations, value]);
    } else {
      const newLocations = selectedLocations.filter(e => e !== value)
      setSelectedLocations(newLocations);
    }
  };
  useEffect(() => {
    if (selectedLocations.length > 0) {
      const newPr = data.filter((product) => {
        return selectedLocations.includes(product.item_basic.shop_location)
      });
      setProducts(newPr)
    } else {
      setProducts(data)
    }
  }, [selectedLocations]);
  // Phần sắp xếp theo giá sản phẩm
  const upProducts = () => {
    const sortedProducts = [...products].sort((a, b) => a.item_basic.price - b.item_basic.price);
    setProducts(sortedProducts);
  }
  const downProducts = () => {
    const sortedProducts = [...products].sort((a, b) => b.item_basic.price - a.item_basic.price);
    setProducts(sortedProducts);
  }
  // Search
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    if (searchTerm.length > 0) {
      const filtered = products.filter(product =>
        product.item_basic.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered)
      // setFilteredProducts(filtered);
      setProducts(filtered);
    }
    else {
      setProducts(data)
    }

  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch();
  };
  // Lọc theo giá nhập
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleApplyFilter = () => {
    const filteredProducts = products.filter((product) => {
      return (
        product.item_basic.price / 100000 >= parseInt(minPrice) &&
        product.item_basic.price / 100000 <= parseInt(maxPrice)
      );
    });
    // console.log(filteredProducts)
    setProducts(filteredProducts);
  };

  // Xóa tất cả reload lại trang
  const handleReload = () => {
    window.location.reload()
  }
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
              <li className='space space2' style={{ color: '#fff', display: 'flex', paddingTop: '6px' }}><NotificationsNoneIcon style={{ fontSize: '1.1rem' }} /><div style={{ marginLeft: '.3125rem' }}>Thông Báo</div></li>
              <Link to='' className='space space1 space2' style={{ color: '#fff', display: 'flex', paddingTop: '6px' }}><HelpOutlineIcon style={{ fontSize: '1.1rem' }} /><div style={{ marginLeft: '.3125rem' }}>Hỗ Trợ</div></Link>
              <span className='space space1 space2' style={{ color: '#fff', display: 'flex', paddingTop: '6px' }}><LanguageIcon style={{ fontSize: '1.1rem' }} /><div style={{ marginLeft: '.3125rem' }}>Tiếng việt</div></span>
              <Link to='/signup' className='space space1 space2' style={{ color: '#fff' }}>Đăng Ký</Link>
              <Link to='/login' className='space space1 space2 ' style={{ color: '#fff' }}>Đăng Nhập</Link>

            </ul>
          </nav>
        </div>

        <div className='shopee-searchbar'>
          <div className="shopee-searchbar-input" autoComplete="off" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <Link to='/' style={{ color: '#fff', marginTop: '-10px', textDecoration: 'none', display: 'flex', alignItems: "center" }} >
                <LocalMallIcon style={{ fontSize: '50', marginTop: '-8px' }}>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </LocalMallIcon>
                <span style={{ fontSize: '30px' }}>Shopee</span>
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column ', width: '840px', justifyContent: "flex-start" }}>
              <form style={{ display: 'flex', backgroundColor: '#fff', borderRadius: '2px', height: '2.5rem', padding: '.1875rem', border: 'none', justifyContent: 'space-between' }}>
                <div style={{ padding: '0 .625rem', flex: '1' }}>
                  <input className="input-search" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ marginTop: '6px', width: '500px' }} value={searchTerm}
                    onChange={handleChange} />
                </div>
                <button className='button-search' style={{ border: 'none', outline: 'none' }} onClick={handleSearch}><SearchIcon style={{ color: '#fff' }} /></button>
              </form>
              <div class="" style={{ fontSize: '12px', marginTop: '.1875rem' }}>
                {NavbarProductPage.map((e, i) => {
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
                <div aria-describedby="cart_drawer_target_id" role="tooltip" aria-hidden="false" className="product-shopping" style={{ top: '46px', right: '0px', transformOrigin: '381.1px top' }}>
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
                </div>
              </div>
            </div>
          </div>

        </div>


      </header>


      <div className='product-page'>
        {/* Content */}
        <div className='product-page-contents'>
          <div className='product-page-contents-container'>
            <div className='product-page-contents-container-filter-panel'>
              <div className='page-contents-container-filter-status'>
                <svg style={{ marginTop: '-6px' }} enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon">
                  <g><polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polyline>
                  </g>
                </svg>
                <h2 className="shopee-search-filter-status__text">Bộ lọc tìm kiếm<span class="sr-only"></span></h2>
              </div>
              <SidebarContent
                data={SidebarContentList1}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
              <SidebarContent
                data={SidebarContentList2}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
              {/* <fieldset className="shopee-filter-group shopee-facet-filter">
                <legend className="shopee-filter-group__header">Nơi Bán</legend>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="nuocngoai" value="Nước Ngoài" checked={selectedLocations.includes('Nước Ngoài')} onChange={handleCheckboxChange} />
                    </div>
                    <span className="shopee-checkbox__label">Nước Ngoài</span>
                  </label></div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="hanoi" value="Hà Nội" checked={selectedLocations.includes('Hà Nội')} onChange={handleCheckboxChange} />
                    </div>
                    <span className="shopee-checkbox__label">Hà Nội</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="hochiminh" value="TP. Hồ Chí Minh" checked={selectedLocations.includes('TP. Hồ Chí Minh')} onChange={handleCheckboxChange} />
                    </div>
                    <span className="shopee-checkbox__label">TP.Hồ Chí Minh</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" name="thainguyen" value="Thái Nguyên" checked={selectedLocations.includes('Thái Nguyên')} onChange={handleCheckboxChange} />
                    </div><span className="shopee-checkbox__label">Thái Nguyên</span>
                  </label>
                </div>
                <button aria-expanded="false" className="shopee-filter-group__toggle-btn" aria-label="">Thêm
                  <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-down">
                    <g>
                      <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                    </g>
                  </svg>
                </button>
              </fieldset> */}
              <SidebarContent
                data={SidebarContentList3}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
              <SidebarContent
                data={SidebarContentList4}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
              {/* Tìm sản phẩm theo giá */}
              <fieldset className="shopee-filter-group" style={{ padding: '0 0 1.25rem' }}>
                <legend className="shopee-filter-group__header">Khoảng Giá</legend>
                <div className="">
                  <div className="shopee-price-range-filter__inputs">
                    <input
                      type="text"
                      maxLength="13"
                      className="shopee-price-range-filter__input"
                      placeholder="₫ TỪ"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                    <div className="shopee-price-range-filter__range-line"></div>
                    <input
                      type="text"
                      maxLength="13"
                      className="shopee-price-range-filter__input"
                      placeholder="₫ ĐẾN"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>
                <button
                  className="button-ad"
                  aria-label=""
                  style={{ backgroundColor: 'rgb(238, 77, 45)' }}
                  onClick={handleApplyFilter}
                >
                  Áp dụng
                </button>
              </fieldset>
              <SidebarContent
                data={SidebarContentList5}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
              <SidebarContent
                data={SidebarContentList6}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
              <button class="button-ad mpD9DF" aria-label="" style={{ backgroundColor: 'rgb(238, 77, 45)' }} onClick={handleReload}>
                Xóa tất cả
              </button>
            </div>


            <div style={{ flex: '1', width: '0', minWidth: '0' }}>
              <section style={{ marginBottom: '1.25rem' }}>
                <div style={{ paddingTop: '1.25 rem' }}>
                  <div className="shopee-header-section__header" style={{ display: 'flex', alignItems: 'center', paddingBottom: '0.625rem' }} >
                    <div className="shopee-header-section__header__title">
                      <h1 style={{ fontSize: 'unset', fontWeight: 'unset', margin: 'unset' }}>Shop liên quan đến
                        <span>
                          <span>"</span>
                          <span style={{ color: '#ee4d2d', marginBottom: '1.25rem' }}>dép 0đ</span>
                          <span>"</span></span>
                      </h1>
                    </div>
                    <Link className="shopee-header-section__header-link" tabIndex="-1" href="" style={{ textDecoration: 'none' }}>
                      <button className="shopee-button-no-outline">Thêm kết quả&nbsp;
                        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right" style={{ fontSize: '.625rem', color: '#ee4d2d' }}>
                          <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                        </svg>
                      </button>
                    </Link></div>
                  <div className="shopee-header-section__content">
                    <div className="shopee-search-user-item ">
                      <div aria-hidden="true" className="shopee-search-user-item__leading">
                        <div className="shopee-avatar">
                          <div className="shopee-avatar__placeholder">
                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-headshot">
                              <g>
                                <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit="10"></circle>
                                <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit="10">
                                </path>
                              </g>
                            </svg>
                          </div>
                          <div className="shopee-avatar__img-wrapper">
                            <div className="shopee-avatar__img"></div>
                            <div className="shopee-avatar__img_1">
                              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-headshot">
                                <g>
                                  <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit="10"></circle>
                                  <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit="10"></path>
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

                      {/* Đang làm dở */}
                      <div style={{ display: 'flex' }} >
                        <div className="shopee-search-user-seller-info-item">
                          <div style={{ display: 'inline-block', textAlign: 'left' }}>
                            <div className="shopee-search-user-seller-info-item__header">
                              <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon1" style={{ color: '#ee4d2d', stroke: 'currentcolor' }}>
                                  <g>
                                    <path d="m10 1 4.5 2.5-.5 3h-2v7.5h-9v-7.5h-2l-.5-3 4.6-2.5c.3 1.1 1.3 1.9 2.4 1.9s2.1-.8 2.5-1.9z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path>
                                    <line fill="none" strokeLinecap="round" strokeMiterlimit="10" x1="3" x2="12" y1="11.5" y2="11.5"></line>
                                  </g>
                                </svg>
                              </div>
                              <span style={{ color: '#ee4d2d', fontSize: '1rem', fontWeight: '400' }}>24</span>
                            </div>
                            <div style={{ marginTop: '.5rem', color: 'rgba(0,0,0,.54)', fontSize: '.75rem', textTransform: 'capitalize' }}>Sản phẩm</div>
                          </div>
                        </div>
                        <div className="shopee-search-user-seller-info-item">
                          <div style={{ display: 'inline-block', textAlign: 'left' }}>
                            <div className="shopee-search-user-seller-info-item__header">
                              <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon1 " style={{ color: '#ee4d2d', stroke: 'currentcolor' }}>
                                  <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                </svg>
                              </div>
                              <span style={{ color: '#ee4d2d', fontSize: '1rem', fontWeight: '400' }}>4.9</span></div>
                            <div style={{ marginTop: '.5rem', color: 'rgba(0,0,0,.54)', fontSize: '.75rem', textTransform: 'capitalize' }}>Đánh giá</div></div>
                        </div>
                        <div className="shopee-search-user-seller-info-item">
                          <div style={{ display: 'inline-block', textAlign: 'left' }}>
                            <div className="shopee-search-user-seller-info-item__header">
                              <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon1" style={{ color: '#ee4d2d', stroke: 'currentcolor' }}>
                                  <g>
                                    <polygon fill="none" points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                    <circle cx="4" cy="5.8" r="1" stroke="none"></circle><circle cx="7.5" cy="5.8" r="1" stroke="none"></circle>
                                    <circle cx="11" cy="5.8" r="1" stroke="none"></circle>
                                  </g>
                                </svg>
                              </div>
                              <span style={{ color: '#ee4d2d', fontSize: '1rem', fontWeight: '400' }}>72%</span>
                            </div><div style={{ marginTop: '.5rem', color: 'rgba(0,0,0,.54)', fontSize: '.75rem', textTransform: 'capitalize' }}>tỉ lệ phản hồi</div>
                          </div>
                        </div>
                        <div className="shopee-search-user-seller-info-item">
                          <div style={{ display: 'inline-block', textAlign: 'left' }}>
                            <div className="shopee-search-user-seller-info-item__header">
                              <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon1" style={{ color: '#ee4d2d', stroke: 'currentcolor' }}>
                                  <g>
                                    <polyline fill="none" points="7.2 3.5 7.2 7.8 10.5 7.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polyline>
                                    <circle cx="7.5" cy="7.5" fill="none" r="6.5" strokeMiterlimit="10"></circle>
                                  </g>
                                </svg>
                              </div>
                              <span style={{ color: '#ee4d2d', fontSize: '1rem', fontWeight: '400' }}>trong vài giờ</span>
                            </div>
                            <div style={{ marginTop: '.5rem', color: 'rgba(0,0,0,.54)', fontSize: '.75rem', textTransform: 'capitalize' }}>thời gian phản hồi</div>
                          </div>
                        </div>
                      </div>
                      {/* Đang làm dở */}

                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h1 className='shopee-search-result-header' style={{ margin: '.67em 0' }}>
                  <div style={{}}>
                    <svg viewBox="0 0 18 24" class="shopee-svg-icon icon-hint-bulb">
                      <g transform="translate(-355 -149)">
                        <g transform="translate(355 149)">
                          <g fillRule="nonzero" transform="translate(5.4 19.155556)">
                            <path d="m1.08489412 1.77777778h5.1879153c.51164401 0 .92641344-.39796911.92641344-.88888889s-.41476943-.88888889-.92641344-.88888889h-5.1879153c-.51164402 0-.92641345.39796911-.92641345.88888889s.41476943.88888889.92641345.88888889z"></path>
                            <g transform="translate(1.9 2.666667)">
                              <path d="m .75 1.77777778h2.1c.41421356 0 .75-.39796911.75-.88888889s-.33578644-.88888889-.75-.88888889h-2.1c-.41421356 0-.75.39796911-.75.88888889s.33578644.88888889.75.88888889z"></path>
                            </g>
                          </g>
                          <path d="m8.1 8.77777718v4.66666782c0 .4295545.40294373.7777772.9.7777772s.9-.3482227.9-.7777772v-4.66666782c0-.42955447-.40294373-.77777718-.9-.77777718s-.9.34822271-.9.77777718z" fillRule="nonzero"></path>
                          <path d="m8.1 5.33333333v.88889432c0 .49091978.40294373.88888889.9.88888889s.9-.39796911.9-.88888889v-.88889432c0-.49091977-.40294373-.88888889-.9-.88888889s-.9.39796912-.9.88888889z" fillRule="nonzero"></path>
                          <path d="m8.80092773 0c-4.86181776 0-8.80092773 3.97866667-8.80092773 8.88888889 0 1.69422221.47617651 3.26933331 1.295126 4.61333331l2.50316913 3.9768889c.30201078.4782222.84303623.7697778 1.42482388.7697778h7.17785139c.7077799 0 1.3618277-.368 1.7027479-.9617778l2.3252977-4.0213333c.7411308-1.2888889 1.1728395-2.7786667 1.1728395-4.37688891 0-4.91022222-3.9409628-8.88888889-8.80092777-8.88888889m0 1.77777778c3.82979317 0 6.94810087 3.18933333 6.94810087 7.11111111 0 1.24444441-.3168334 2.43022221-.9393833 3.51466671l-2.3252977 4.0213333c-.0166754.0284444-.0481735.0462222-.0833772.0462222h-7.07224026l-2.43461454-3.8648889c-.68184029-1.12-1.04128871-2.4053333-1.04128871-3.71733331 0-3.92177778 3.11645483-7.11111111 6.94810084-7.11111111"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="shopee-search-result-header__text">Kết quả tìm kiếm cho từ khoá '
                    <span class="shopee-search-result-header__text-highlight" style={{ color: "rgb(238, 77, 45)", fontWeight: '400' }} >dép 0đ</span>'
                  </span>
                </h1>
                <fieldset className='shopee-sort-bar' style={{ border: '0px' }}>
                  <legend style={{ display: 'none' }}></legend>
                  <div className="shopee-sort-bar__label">Sắp xếp theo</div>
                  <div className='shopee-sort-by-options'>
                    <section className="shopee-sort-by-options__option-group">
                      <button aria-label="" aria-pressed="true" className="shopee-sort-by-options__option shopee-sort-by-options__option--selected">
                        <span aria-hidden="true">Liên quan</span>
                      </button>
                      <button aria-label="" aria-pressed="false" className="shopee-sort-by-options__option">
                        <span aria-hidden="true">Mới nhất</span>
                      </button>
                      <button aria-label="" aria-pressed="false" className="shopee-sort-by-options__option">
                        <span aria-hidden="true">Bán chạy</span>
                      </button>
                    </section>

                    <section>
                      <button className='sort-price-select'>
                        <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Giá
                        </Link>
                        <ul class="dropdown-menu">
                          <li><Link class="dropdown-item" href="#" onClick={upProducts}>Giá: Thấp đến Cao</Link></li>
                          <li><Link class="dropdown-item" href="#" onClick={downProducts}>Giá: Cao đến Thấp</Link></li>
                        </ul>
                      </button>
                    </section>
                  </div>
                  <div>

                  </div>
                </fieldset>
                <ul className='shopee-search-item-result__items'>

                  <ProductHome products={products} />

                </ul>
                <div>

                </div>
              </section>
            </div>
          </div>
        </div>
        {/* Footer content  */}
        <div>

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
export default Page;
