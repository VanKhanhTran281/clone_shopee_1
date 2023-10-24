import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import data from '../component/data';
import './details.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';

const Details = () => {
    const { itemid } = useParams();
    const item = data.find((det) => det.item_basic.itemid == itemid);

    // Hàm xử lý phần số lượng sản phẩm đặt mua
    const [count, setCount] = useState(1)
    const handleSum = () => {
        setCount(count + 1)
    }
    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    //Hàm xử lý sự kiện đổi màu  
    const [color, setColor] = useState('rgba(0, 0, 0, .09)');
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

    const handleClickbt = (optionIndex) => {
        if (selectedOptionIndex === optionIndex) {
            setSelectedOptionIndex(null);
            setColor('rgba(0, 0, 0, .09)'); // Đặt lại màu viền ban đầu
        } else {
            setSelectedOptionIndex(optionIndex);
            // console.log(optionIndex)
            setColor('red');
        }
    };


    // Xử lý phần mua hàng
    // Không lưu dữ liệu khi tải lại trang
    // const [itemAdded, setItemAdded] = useState(false);
    // const [productName, setProductName] = useState('');
    // const [productPrice, setProductPrice] = useState('');
    // // const [variationName, setVariationName] = useState('');
    // const [variationImage, setVariationImage] = useState('');
    // const handleAddToCart = () => {
    //     setItemAdded(true);
    //     setProductName(item.item_basic.name);
    //     setProductPrice(item.item_basic.price / 100000);
    //     if (item.item_basic.tier_variations && item.item_basic.tier_variations.length > 0) {
    //         const firstVariation = item.item_basic.tier_variations[0];
    //         if (firstVariation.images && firstVariation.images.length > 0) {
    //             const firstImage = firstVariation.images[selectedOptionIndex];
    //             setVariationImage(firstImage);
    //         }
    //     }

    // }
    // // console.log(variationImage)
    // const handleReset = () => {
    //     setItemAdded(false);
    //     setProductName('');
    //     setProductPrice('');
    //     setVariationImage('')
    // };


    // Lưu dữ liệu vào localStorage
    const [prooducts, setProoducts] = useState([]);

    useEffect(() => {
        // Khôi phục dữ liệu từ localStorage khi component được tạo
        const storedProducts = localStorage.getItem('products');

        if (storedProducts) {
            setProoducts(JSON.parse(storedProducts));
        }
    }, []);

    const handleAddToCart = () => {
        const newProduct = {
            itemAdded: true,
            productName: item.item_basic.name,
            productPrice: item.item_basic.price / 100000,
            variationImage: ''
        };

        if (item.item_basic.tier_variations && item.item_basic.tier_variations.length > 0) {
            const firstVariation = item.item_basic.tier_variations[0];
            if (firstVariation.images && firstVariation.images.length > 0) {
                const firstImage = firstVariation.images[selectedOptionIndex];

                // Kiểm tra ảnh trùng lặp
                if (isImageDuplicate(firstImage)) {
                    alert('Ảnh đã tồn tại trong giỏ hàng!');
                    return;
                }

                newProduct.variationImage = firstImage;
            }
        }

        const updatedProducts = [...prooducts, newProduct];
        setProoducts(updatedProducts);

        // Lưu dữ liệu vào localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Hiển thị thông báo thành công
        alert('Thêm sản phẩm vào giỏ hàng thành công!');
    };

    const handleReset = () => {
        setProoducts([]);

        // Xóa dữ liệu từ localStorage
        localStorage.removeItem('products');
    };

    const isImageDuplicate = (image) => {
        return prooducts.some((product) => product.variationImage === image);
    };

    return (
        <>
            <header className='shoppee-top'>
                <div className="main">
                    <nav className='container'>
                        <div className='flex1'>
                            <Link className='space space1 space2' style={{ color: '#fff' }}>Kênh người bán</Link>
                            <Link className='space space1 space2' style={{ color: '#fff' }}>Trở thành người bán Shoppee</Link>
                            <div className='space space1 space2' style={{ color: '#fff' }}>Tải ứng dụng</div>
                            <div className='space space1' style={{ color: '#fff' }}>Kết nối </div>
                            <div className='space1'><FacebookIcon /> <InstagramIcon /></div>
                        </div>
                        <div style={{ flex: '1' }}></div>
                        <ul className='flex2'>
                            <li className='space space2' style={{ color: '#fff' }}><NotificationsNoneIcon />Thông Báo</li>
                            <Link to='/page' className='space space1 space2' style={{ color: '#fff' }}><HelpOutlineIcon />Hỗ Trợ</Link>
                            <span className='space space1 space2' style={{ color: '#fff' }}><LanguageIcon />Tiếng Việt</span>
                            <Link to='/signup' className='space space1 space2' style={{ color: '#fff' }}>Đăng Ký</Link>
                            <Link to='/login' className='space space1 space2' style={{ color: '#fff' }}>Đăng Nhập</Link>

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
                                <button className='button-search' style={{ border: 'none', outline: 'none' }}><SearchIcon style={{ color: '#fff' }} /></button>
                            </div>
                            <div className="" style={{ fontSize: '12px' }}>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Dép 1k</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Áo 1k</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Set Kẹp Tóc</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Dép Nam</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>iPhone 1k</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Điện Thoại Giá Rẻ 1k</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Sét Đồ Nữ</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Áo Khoác 1k Freeship</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Túi Xách Nữ</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Ốp iPhone</Link>
                                <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to='/page'>Giày Nữ</Link>
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
                                        {prooducts.length === 0 ? (
                                            <div className="product-shopping2-1">
                                                <img
                                                    className="product-shopping2-1-1"
                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
                                                    alt=""
                                                />
                                                <div className="product-shopping2-1-2">Chưa có sản phẩm</div>
                                            </div>
                                        ) : (
                                            prooducts.map((product, index) => (
                                                <div className="" style={{ padding: '3.75rem 0' }} key={index}>
                                                    <img style={{ width: '3.25rem', height: '3.25rem' }} className="product-shopping2-1-1" src={`https://down-vn.img.susercontent.com/file/${product.variationImage}`} alt="" />
                                                    <div className="product-shopping2-1-2" style={{ display: 'flex', marginTop: '-52px', marginLeft: '52px' }}>
                                                        <div style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{product.productName}</div>
                                                        <div style={{ color: 'rgb(238, 77, 45)' }}>₫{product.productPrice}</div>
                                                        <button onClick={handleReset}>Hủy</button>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </header>



            {/* {item && (
                <div>
                    <div>{item.item_basic.name}</div>
                    <img alt="JOFANNY dép nam nữ cánh hoa chống trượt quai ngang bánh mì nữ bốn màu tùy chọn đế cao 3cm"
                        className="" style={{}} src={`https://down-vn.img.susercontent.com/file/${item.item_basic.image}`} />
                </div>

            )} */}
            <div className='details-main'>
                <div className='details-main1'>
                    {item && (
                        <div className='details-content'>
                            <div className='details-content1'>
                                <Link className='details-content1-1'>Shopee</Link>
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className='details-content1-2'>
                                    <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                    </path>
                                </svg>
                                <Link className='details-content1-1'>Men Shoes</Link>
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className='details-content1-2'>
                                    <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                    </path>
                                </svg>
                                <Link className='details-content1-1'>Sandals & Flip Flops</Link>
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className='details-content1-2'>
                                    <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                    </path>
                                </svg>
                                <Link className='details-content1-1'>Indoor Slippers</Link>
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className='details-content1-2'>
                                    <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                    </path>
                                </svg>
                                <span className='details-content1-3'>{item.item_basic.name}</span>
                            </div>
                            <section className='details-content2'>
                                {/* <h1 className='details-content2-text'>{item.item_basic.name}</h1> */}
                                <div></div>
                                <section className='details-content2-img'>
                                    {/* <h2 className='details-content2-text'>Product Image Section</h2> */}
                                    <div className='details-img'>
                                        <div className='details-img1'>
                                            <div className='details-img1-1'>
                                                <div className='details-img1-1-1'></div>
                                                <div className='details-img1-1-2'>
                                                    <picture>
                                                        <img alt=""
                                                            className='details-img1-1-2-1' src={`https://down-vn.img.susercontent.com/file/${item.item_basic.image}`} />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Phần slide con  */}
                                        <div className='details-img2'>

                                        </div>
                                    </div>
                                    <div className='details-like'>
                                        <div className='details-share'>
                                            <div style={{ fontSize: '16px', color: '#222' }}>Chia sẻ:</div>
                                            <button style={{ border: 'transparent', marginLeft: '5px', backgroundColor: '#4489ee', position: 'relative', width: '30px', height: '30px', borderRadius: '50%' }}><GitHubIcon style={{ color: '#fff' }} /></button>
                                            <button style={{ border: 'transparent', marginLeft: '5px', backgroundColor: '#365d7a', position: 'relative', width: '30px', height: '30px', borderRadius: '50%' }}><FacebookIcon style={{ color: '#fff' }} /></button>
                                            <button style={{ border: 'transparent', marginLeft: '5px', backgroundColor: 'red', position: 'relative', width: '30px', height: '30px', borderRadius: '50%' }}><PinterestIcon style={{ color: '#fff' }} /></button>
                                            <button style={{ border: 'transparent', marginLeft: '5px', backgroundColor: '#4489ee', position: 'relative', width: '30px', height: '30px', borderRadius: '50%' }}><TwitterIcon style={{ color: '#fff' }} /></button>
                                        </div>
                                        <div className='details-love'>
                                            <button className='details-love1' >
                                                <FavoriteBorderIcon style={{ marginRight: '10px', fontSize: '30px', color: 'red' }} />
                                                <div className='details-love1-1'>Đã thích({item.item_basic.liked_count})</div>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section className='details-content2-pro'>
                                    <div className='details-content2-pro-content'>
                                        <div className='details-pro-content1'>
                                            <div className='details-pro-content1-1'>Yêu thích</div>
                                            <span className='details-pro-content1-2'>{item.item_basic.name}</span>
                                        </div>
                                        <div className='details-pro-content2'>
                                            <button className='details-pro-content2-button1'>
                                                <div className='details-pro-content2-button2-1'>{item.item_basic.item_rating.rating_star}</div>
                                                <div className='details-pro-content2-button2-2'>Đánh giá</div>

                                            </button>
                                            <button className='details-pro-content2-button2'>
                                                <div className='details-pro-content2-button2-1'>{item.item_basic.cmt_count}</div>
                                                <div className='details-pro-content2-button2-2'>Đánh giá</div>
                                            </button>
                                            <div className='details-pro-content2-div'>
                                                <div className='details-pro-content2-div1'>{item.item_basic.historical_sold}</div>
                                                <div className='details-pro-content2-button2-2'>Đã bán</div>
                                            </div>
                                            <button className='details-pro-content2-button3'>Tố cáo</button>
                                        </div>
                                        <div className='details-pro-content3' style={{ marginTop: '10px' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ padding: '15px 20px', background: '#fafafa' }}>
                                                    <section style={{ display: 'flex', alignItems: 'center' }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '625px', flexBasis: '625px', minHeight: '1.875rem' }}>
                                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <div style={{ fontSize: '1.875rem', fontWeight: '500', color: '#ee4d2d' }}>₫{item.item_basic.price / 100000}</div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='details-pro-content4'>
                                            <div className='details-pro-content4-1'>
                                                <div className='details-pro-content4-1-1'></div>
                                                <div className='details-pro-content4-1-2'>
                                                    <div className='details-pro-content4-1-2-1'>
                                                        {item.item_basic.tier_variations &&
                                                            item.item_basic.tier_variations.map((variation, index) => (
                                                                <section className="details-pro-content4-1-2-1-section1" key={index}>
                                                                    <h3 className="details-pro-content4-1-2-1-section1-1">{variation.name}</h3>
                                                                    {variation.options && variation.options.length > 0 && (
                                                                        <div className="details-pro-content4-1-2-1-section1-2">
                                                                            {variation.options.map((option, optionIndex) => (
                                                                                <button
                                                                                    className="details-pro-content4-1-2-1-section1-2-1"
                                                                                    key={optionIndex}
                                                                                    style={{ paddingLeft: '2.5rem', border: optionIndex === selectedOptionIndex ? '1px solid red' : '1px solid rgba(0, 0, 0, .09)', color: optionIndex === selectedOptionIndex ? ' red' : 'black' }}
                                                                                    onClick={() => handleClickbt(optionIndex)}
                                                                                >
                                                                                    {index === 0 && variation.images && variation.images.length > 0 && (
                                                                                        <img
                                                                                            className="details-pro-content4-1-2-1-section1-2-1-1"
                                                                                            src={`https://down-vn.img.susercontent.com/file/${variation.images[optionIndex]}`}
                                                                                            alt={option}
                                                                                        />
                                                                                    )}
                                                                                    {option}
                                                                                </button>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </section>
                                                            ))}
                                                        <section className='details-pro-content4-1-2-1-section2'>
                                                            <h3 className="details-pro-content4-1-2-1-section1-1">Số Lượng</h3>
                                                            <div className='details-pro-content4-1-2-1-section2-2'>
                                                                <div style={{ marginRight: '15px' }}>
                                                                    <div style={{ display: 'flex', alignItems: 'center', background: '#fff' }}>
                                                                        <button className='details-pro-content4-1-2-1-section2-2-button1' onClick={handleRemove}><HorizontalRuleIcon /></button>
                                                                        <button className='details-pro-content4-1-2-1-section2-2-button2'>{count}</button>
                                                                        <button className='details-pro-content4-1-2-1-section2-2-button1' onClick={handleSum}><AddIcon /></button>
                                                                    </div>
                                                                </div>
                                                                <div>{item.item_basic.stock} sản phẩm có sẵn</div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='details-pro-content5' style={{ marginTop: '15px' }}>
                                            <div style={{ paddingLeft: '1.25rem' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <button className='details-pro-content5-button1' onClick={handleAddToCart}>
                                                        <AddShoppingCartIcon />
                                                        <span>thêm vào giỏ hàng</span>
                                                    </button>
                                                    <button className='details-pro-content5-button2'>Mua Ngay</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='details-pro-content6'>
                                            <div className='details-pro-content6-1'>
                                                <Link className='details-pro-content6-1-1'>
                                                    <img className='details-pro-content6-1-1-1' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/83e10a1f95cb083579c089448ef8dd3b.png' alt='' />
                                                    <span className='details-pro-content6-1-1-2'>Shopee Đảm Bảo</span>
                                                    <span className='details-pro-content6-1-1-3'>3 Ngày Trả Hàng/ Hoàn Tiền</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    )}

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
}
export default Details