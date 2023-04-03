
function Footer() {
    return (
        <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo_main">
              <div className="footer_logo"><a href="index.html"><img src="images/footer-logo.png"/></a></div>
              <div className="social_icon">
                <ul>
                    <li><a href="#"><img src="images/fb-icon.png"/></a></li>
                    <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
                    <li><a href="#"><img src="images/linkedin-icon.png"/></a></li>
                    <li><a href="#"><img src="images/instagram-icon.png"/></a></li>
                    <li><a href="#"><img src="images/youtub-icon.png"/></a></li>
                </ul>
              </div>
          </div>
          <div className="footer_section_2">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <h4 className="adderss_text">About</h4>
                    <p className="ipsum_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h4 className="adderss_text">Menu</h4>
                    <div className="footer_menu">
                      <ul>
                          <li><a href="index.html">Home</a></li>
                          <li><a href="computers.html">Computers</a></li>
                          <li><a href="Mans_clothes.html">Mans Clothes</a></li>
                          <li><a href="womans_clothes.html">Womans Clothes</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h4 className="adderss_text">Useful Link</h4>
                    <div className="footer_menu">
                      <ul>
                          <li><a href="#">Adipiscing</a></li>
                          <li><a href="#">Elit, sed do</a></li>
                          <li><a href="#">Eiusmod</a></li>
                          <li><a href="#">Tempor</a></li>
                          <li><a href="#">incididunt</a></li>
                      </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h4 className="adderss_text">Contact</h4>
                    <div className="call_text"><img src="images/map-icon.png"/><span className="paddlin_left_0"><a href="#">London 145 United Kingdom</a></span></div>
                    <div className="call_text"><img src="images/call-icon.png"/><span className="paddlin_left_0"><a href="#">+7586656566</a></span></div>
                    <div className="call_text"><img src="images/mail-icon.png"/><span className="paddlin_left_0"><a href="#">volim@gmail.com</a></span></div>
                </div>
              </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default Footer;
  