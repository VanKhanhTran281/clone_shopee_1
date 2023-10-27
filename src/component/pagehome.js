import {useEffect,useState} from 'react'
import { BrowserRouter, Routes, Route ,Link,useNavigate} from "react-router-dom";
import './dep.css'

function ProductHome({products}){
  const navigate=useNavigate();
  const handleShowDetails=(itemid)=>{
    navigate(`/details/${itemid}`);
  }
return(
    <>
       {products.map(pro=>(
          <li className="shopee-search-item-result__item" data-sqe="item" key={pro.item_basic.itemid} onClick={()=>handleShowDetails(pro.item_basic.itemid)} >
                    <Link style={{textDecoration: 'none'}} data-sqe="link" href="/JOFANNY-dép-nam-nữ-cánh-hoa-chống-trượt-quai-ngang-bánh-mì-nữ-bốn-màu-tùy-chọn-đế-cao-3cm-i.966414535.20878379471?sp_atk=98f10986-3276-4990-9554-ccd244603a81&amp;xptdk=98f10986-3276-4990-9554-ccd244603a81">
                      <div className="tWpFe2">
                        <div className="VTjd7p whIxGK">
                          <div style={{pointerEvents: 'none'}}>
                            <div className="_7YC893 KUUypF">
                              <img width="invalid-value" height="invalid-value" alt="JOFANNY dép nam nữ cánh hoa chống trượt quai ngang bánh mì nữ bốn màu tùy chọn đế cao 3cm" className="_7DTxhh tWoeMk" style={{objectFit:'contain'}} src={`https://down-vn.img.susercontent.com/file/${pro.item_basic.image}`} />
                              <div className="aLgMTQ">
                                <div className="YeGYFd sKFCYs" style={{ color: 'rgb(242, 82, 32)' }}>
                                  <span className="ICOSOm">Yêu thích</span>
                                </div>
                              </div>
                              <div className="GOgNtl">
                                <div className="NTmuqd _3NQO+7 WVxeBE">
                                  <span aria-label="promotion"></span>
                                  <span > {pro.item_basic.discount}</span>
                                  <span style={{color:'#fff'}}>giảm</span>
                                </div>
                              </div>
                              <div className="IpGwg7">
                                <div className="customized-overlay-image">
                                  <img src="https://down-vn.img.susercontent.com/file/vn-50009109-3a7bc3577ae21ce1b4f08512a08c2175" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="KMyn8J">
                            <div className="dpiR4u" data-sqe="name">
                              <div className="FDn--+">
                                <div aria-hidden="true" className="ie3A+n bM+7UW Cve6sh" style={{textDecoration:'none'}}>
                                {pro.item_basic.name}
                                </div>
                              </div>
                              <div className="FD2XVZ">



                                {/* <div aria-hidden="true" className="djt+SZ">
                                  {pro.item_basic.voucher_info && (
                                  <>{pro.item_basic.voucher_info.label}</>)}
                                </div> */}
                                {/*  */}
                                  {pro.item_basic.voucher_info ? (
                                      <div className="FD2XVZ">
                                        <div aria-hidden="true" className="djt+SZ">
                                          {pro.item_basic.voucher_info.label}
                                        </div>
                                      </div>
                                    ) : null}
                                {/*  */}



                              </div>
                            </div>
                            <div className="hpDKMN">
                              <div className="vioxXd ZZuLsr d5DWld" aria-hidden="true">₫{pro.item_basic.price_max/100000}</div>
                              <div className="vioxXd rVLWG6">
                                <span aria-label="current price"></span>
                                <span className="recFju">₫</span>
                                <span className="ZEgDH9">{pro.item_basic.price/100000}</span>
                              </div>
                            </div>
                            <div className="ZnrnMl">
                              <div className="RS7p+X" data-sqe="rating">
                                <div className="shopee-rating-stars">
                                  <div className="shopee-rating-stars__stars">
                                    <div className="shopee-rating-stars__star-wrapper">
                                      <div className="shopee-rating-stars__lit" style={{width: '100%'}}>
                                        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                          <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                          </polygon>
                                        </svg>
                                      </div>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                          strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                        </polygon>
                                      </svg>
                                    </div>
                                    <div className="shopee-rating-stars__star-wrapper">
                                      <div className="shopee-rating-stars__lit" style={{width:'100%'}}>
                                        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                          <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                          </polygon>
                                        </svg>
                                      </div>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                        </polygon>
                                      </svg>
                                    </div>
                                    {/*  */}
                                    <div className="shopee-rating-stars__star-wrapper">
                                      <div className="shopee-rating-stars__lit" style={{width:'100%'}}>
                                        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                          <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                          </polygon>
                                        </svg>
                                      </div>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                          strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                        </polygon>
                                      </svg>
                                    </div>
                                    {/*  */}
                                    <div className="shopee-rating-stars__star-wrapper">
                                      <div className="shopee-rating-stars__lit" style={{width:'100%'}}>
                                        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                          <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                          </polygon>
                                        </svg>
                                      </div>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                          strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                        </polygon>
                                      </svg>
                                    </div>
                                    {/*  */}
                                    <div className="shopee-rating-stars__star-wrapper">
                                      <div className="shopee-rating-stars__lit" style={{width:'41.7392%'}}>
                                        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid">
                                          <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                          </polygon>
                                        </svg>
                                      </div>
                                      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid">
                                        <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                          strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                        </polygon>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="r6HknA uEPGHT">Đã bán {pro.item_basic.historical_sold}</div>
                            </div>
                            <div className="zGGwiV">
                              <span aria-label="from"></span>
                              {pro.item_basic.shop_location}
                            </div>
                          </div>
                          <div className="shopee-item-card__hover-footer _6o9eaa">Tìm sản phẩm tương tự</div>
                        </div>
                      </div>
                    </Link>
                  </li>
      
      ))}
      
      
    </>
  )


}
export default ProductHome