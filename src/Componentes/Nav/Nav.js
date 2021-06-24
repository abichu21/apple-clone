import React from 'react'
import Cart from '../../Assets/images/icons/cart-sm.png'
import Logo from '../../Assets/images/icons/logo-sm.png'
import Search from '../../Assets/images/icons/search-icon-sm.png'
import "bootstrap/dist/css/bootstrap.min.css"


function Nav() {
    return (
        <div>
            <header>
                <div className="nav-wrapper fixed-top">
                    <div className="container">
                        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target=".navbar-collapse">
                                ☰
                    </button>
                            <a className="navbar-brand mx-auto" href="/"><img src={Logo} /></a>

                            <div className="navbar-collapse collapse">
                                <ul className="navbar-nav nav-justified w-100 nav-fill">
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/iphones">iphone</a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/search/"><img
                                        src={Search} /></a></li>
                                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/cart/"><img
                                        src={Cart} /></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav












































// import React from 'react'
// import Cart from '../../Assets/images/icons/"images/icons/cart-sm.png'
// import logo from '../../Assets/images/icons/logo-sm.png'
// import Search from './../Assets/images/icons/search-icon-sm.png'

// function Nav() {
//     return (
//     <div>
//             <header>
//                 <div className="nav-wrapper fixed-top">
//                     <div className="container">
//                         <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//                             <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
//                                 data-target=".navbar-collapse">
//                                 ☰
//                     </button>
//                             <a className="navbar-brand mx-auto" href="#"><img Src={Logo} /></a>

//                             <div className="navbar-collapse collapse">
//                                 <ul className="navbar-nav nav-justified w-100 nav-fill">
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/search/"><img
//                                         Src={Search} /></a></li>
//                                     <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/cart/"><img
//                                         Src={Cart} /></a></li>
//                                 </ul>
//                             </div>
//                         </nav>
//                     </div>
//                     </header>
//     </div>

//     )
// };

// export default Nav
