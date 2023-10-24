import { useEffect, useState } from 'react';
// import Home from './Home';
import './App.css'
import './Page.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import 'bootstrap/dist/css/bootstrap.css';
// import Product from './component/dep';
import ProductHome from './component/pagehome'
import data from './component/data';
import LocalMallIcon from '@mui/icons-material/LocalMall';


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
  const [minPrice,setMinPrice]=useState('')
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
        product.item_basic.price/100000 >= parseInt(minPrice) &&
        product.item_basic.price/100000 <= parseInt(maxPrice)
      );
    });
    // console.log(filteredProducts)
    setProducts(filteredProducts);
  };

  // Xóa tất cả reload lại trang
  const handleReload=()=>{
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
                <input className="input" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" style={{ fontSize: '25px ', width: '840px', borderRadius: '5px' }} value={searchTerm}
                  onChange={handleChange} />
                <button className='button-search' style={{ border: 'none', outline: 'none' }} onClick={handleSearch}><SearchIcon style={{ color: '#fff' }} /></button>
              </div>
              <div class="" style={{ fontSize: '12px' }}>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Dép 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Áo 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Set Kẹp Tóc</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Dép Nam</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>iPhone 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Điện Thoại Giá Rẻ 1k</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Sét Đồ Nữ</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Áo Khoác 1k Freeship</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Túi Xách Nữ</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Ốp iPhone</Link>
                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to=''>Giày Nữ</Link>
              </div>

            </div>
            <div >
              <div className='product-shopping-main' style={{padding:'10px 0'}}>
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
          </form>

        </div>


      </header>


      <div className='product-page'>
        {/* Content */}
        <div className='product-page-contents'>
          <div className='product-page-contents-container'>
            <div className='product-page-contents-container-filter-panel'>
              <div className='page-contents-container-filter-status'>
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon">
                  <g><polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polyline>
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
                  <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-down">
                    <g>
                      <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                    </g>
                  </svg>
                </button>
              </fieldset>
              <fieldset className="shopee-filter-group shopee-facet-filter">
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
              </fieldset>
              <fieldset className="shopee-filter-group shopee-facet-filter">
                <legend className="shopee-filter-group__header">Đơn Vị Vận Chuyển</legend>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Hỏa Tốc</span>
                  </label></div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Nhanh </span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Tiết Kiệm</span>
                  </label>
                </div>
                <button aria-expanded="false" className="shopee-filter-group__toggle-btn" aria-label="">Thêm
                  <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-down">
                    <g>
                      <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                    </g>
                  </svg>
                </button>
              </fieldset>
              <fieldset className="shopee-filter-group ">
                <legend className="shopee-filter-group__header">Thương Hiệu</legend>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Wika</span>
                  </label></div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Vento</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Kokubo</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div><span className="shopee-checkbox__label">GUMEN</span>
                  </label>
                </div>
                <button aria-expanded="false" className="shopee-filter-group__toggle-btn" aria-label="">Thêm
                  <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-down">
                    <g>
                      <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                    </g>
                  </svg>
                </button>
              </fieldset>
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
              <fieldset className="shopee-filter-group ">
                <legend className="shopee-filter-group__header">Loại Shop</legend>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Shopee Mall</span>
                  </label></div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Shop Yêu Thích</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Shop Yêu Thích +</span>
                  </label>
                </div>
              </fieldset>
              <fieldset className="shopee-filter-group ">
                <legend className="shopee-filter-group__header">Tình Trạng</legend>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Đã Sử Dụng</span>
                  </label>
                </div>
                <div className="shopee-filter shopee-checkbox-filter">
                  <label className="shopee-checkbox">
                    <div className="shopee-checkbox__box">
                      <input type="checkbox" />
                    </div>
                    <span className="shopee-checkbox__label">Mới</span>
                  </label>
                </div>
              </fieldset>
              <button class="button-ad mpD9DF" aria-label="" style={{backgroundColor: 'rgb(238, 77, 45)'}} onClick={handleReload}>
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


                      {/* <div className="shopee-search-user-item__statistics">
                        <div className="shopee-search-user-seller-info-item">
                          <div className="shopee-search-user-seller-info-item__wrapper">
                            <div className="shopee-search-user-seller-info-item__header">
                              <div aria-hidden="true" className="shopee-search-user-seller-info-item__icon">
                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-products">
                                  <g>
                                    <path d="m10 1 4.5 2.5-.5 3h-2v7.5h-9v-7.5h-2l-.5-3 4.6-2.5c.3 1.1 1.3 1.9 2.4 1.9s2.1-.8 2.5-1.9z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path>
                                    <line fill="none" strokeLinecap="round" strokeMiterlimit="10" x1="3" x2="12" y1="11.5" y2="11.5"></line>
                                  </g></svg></div>
                              <span className="shopee-search-user-seller-info-item__primary-text">24</span>
                            </div><div className="shopee-search-user-seller-info-item__complement-text">Sản phẩm</div>
                          </div></div><div className="shopee-search-user-seller-info-item"><div className="shopee-search-user-seller-info-item__wrapper">
                            <div className="shopee-search-user-seller-info-item__header">
                              <div aria-hidden="true" className="shopee-search-user-seller-info-item__icon">
                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-rating">
                                  <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                                </svg></div><span className="shopee-search-user-seller-info-item__primary-text">4.9</span></div>
                            <div className="shopee-search-user-seller-info-item__complement-text">Đánh giá</div></div></div>
                        <div className="shopee-search-user-seller-info-item"><div className="shopee-search-user-seller-info-item__wrapper">
                          <div className="shopee-search-user-seller-info-item__header"><div aria-hidden="true" className="shopee-search-user-seller-info-item__icon">
                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon"><g>
                              <polygon fill="none" points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2" strokeLinejoin="round" strokeMiterlimit="10"></polygon>
                              <circle cx="4" cy="5.8" r="1" stroke="none"></circle><circle cx="7.5" cy="5.8" r="1" stroke="none"></circle>
                              <circle cx="11" cy="5.8" r="1" stroke="none"></circle></g></svg></div><span className="shopee-search-user-seller-info-item__primary-text">72%</span>
                          </div><div className="shopee-search-user-seller-info-item__complement-text">tỉ lệ phản hồi</div>
                        </div></div><div className="shopee-search-user-seller-info-item">
                          <div className="shopee-search-user-seller-info-item__wrapper">
                            <div className="shopee-search-user-seller-info-item__header">
                              <div aria-hidden="true" className="shopee-search-user-seller-info-item__icon">
                                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon">
                                  <g>
                                    <polyline fill="none" points="7.2 3.5 7.2 7.8 10.5 7.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polyline>
                                    <circle cx="7.5" cy="7.5" fill="none" r="6.5" strokeMiterlimit="10"></circle>
                                  </g></svg></div><span className="shopee-search-user-seller-info-item__primary-text">trong vài giờ</span>
                            </div><div className="shopee-search-user-seller-info-item__complement-text">thời gian phản hồi</div>
                          </div>
                        </div>
                      </div> */}


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
                      <button aria-label="" aria-pressed="true" className="shopee-sort-by-options__option shopee-sort-by-options__option--selected" style={{ backgroundColor: 'rgb(238, 77, 45)' }}>
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
                  {/* {(() => {
                      if (selectedLocations.includes('11035840')) {
                        return <Product products={products}/>
                      } else {
                        return <ProductHome/>;
                      }
                    })()} */}
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
export default Page;
