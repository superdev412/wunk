import '../../assets/css/include/header.css';
import logo from '../../assets/img/logo.png'
import nft from'../../assets/img/header-nft.png';
import menuIcon from '../../assets/img/mobile-menu-btn.png';
import closeIcon from '../../assets/img/close.png';
import React, { useState } from 'react';

function Header(props) {
  const [modalflag, setModalflag] = useState(false);
  const closemodal = () => {
    setModalflag(false)
  }
  const showmodal = () => {
    setModalflag(true)
  }
  return (
    <div>
      <div className="mobile-link-part" style={{ display: modalflag ? 'block' : 'none' }}>
        <div className="nav-bar-mobile row">
          <div className="col-lg-6 col-md-4">
          </div>
          <div className="col-lg-6 col-md-8">
            <div>
              <img className="mobile-close-icon" src={closeIcon} onClick={closemodal} />
            </div>
          </div>
        </div>
        <div style={{marginTop:'50px'}}>
          <div className="mobile-link-con">
            <a href="#meta" className="link-btn link-mb" onClick={closemodal}>MetaMorphsMania</a>
          </div>
          <div className="mobile-link-con">
            <a href="#about" className="link-btn link-mb" onClick={closemodal}>About</a>
          </div>
          <div className="mobile-link-con">
            <a href="#team" className="link-btn link-mb" onClick={closemodal}>Team</a>
          </div>
          <div className="mobile-link-con">
            <a href="#faq" className="link-btn link-mb" onClick={closemodal}>FAQ</a>
          </div>
          <div className="mobile-link-con">
            <a href="#roadmap" className="link-btn link-mb" onClick={closemodal}>Roadmap</a>
          </div>
        </div>
      </div>
      <div className="content">
        <div style={{display:'flex'}}>
          <div className="right-nav">
            <img className="logo-img" src={logo}/>
          </div>
          <div className="left-nav">
            <div className="link-part">
              <div className="link-con-sm">
                <a href="#meta" className="link-btn small-link">Home</a>
              </div>
              <div className="link-con-sm">
                <a href="#about" className="link-btn small-link">Roadmap</a>
              </div>
              <div className="link-con-sm">
                <a href="#team"p className="link-btn small-link">Demo</a>
              </div>
              <div className="link-con-bg">
                <a href="#faq" className="link-btn big-link">The&nbsp;Icons</a>
              </div>
              <div className="link-con-bg">
                <a href="#roadmap"p className="link-btn big-link">Tokens</a>
              </div>
              <div className="link-con-bg">
                <a href="#roadmap"p className="link-btn big-link">
                <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.5534 3.17122C27.5096 3.63372 26.3884 3.94622 25.2096 4.08747C26.4259 3.35971 27.3358 2.21431 27.7696 0.864974C26.627 1.54371 25.3763 2.02147 24.0721 2.27747C23.1951 1.34106 22.0335 0.720382 20.7676 0.511817C19.5016 0.303251 18.2023 0.518464 17.0712 1.12404C15.9401 1.72962 15.0406 2.69168 14.5123 3.86085C13.9841 5.03003 13.8566 6.34091 14.1496 7.58997C11.8343 7.47372 9.56918 6.87191 7.50143 5.82361C5.43367 4.7753 3.60945 3.30393 2.14715 1.50497C1.64715 2.36747 1.35965 3.36747 1.35965 4.43247C1.35909 5.39122 1.59519 6.33528 2.047 7.18089C2.4988 8.0265 3.15235 8.74752 3.94965 9.27997C3.02499 9.25055 2.12074 9.0007 1.31215 8.55122V8.62622C1.31206 9.9709 1.77719 11.2742 2.62863 12.315C3.48006 13.3557 4.66536 14.0699 5.9834 14.3362C5.12563 14.5684 4.22632 14.6026 3.3534 14.4362C3.72527 15.5932 4.44964 16.605 5.42511 17.3299C6.40057 18.0548 7.57829 18.4564 8.7934 18.4787C6.73069 20.098 4.18326 20.9763 1.5609 20.9725C1.09637 20.9726 0.632244 20.9455 0.170898 20.8912C2.83274 22.6027 5.93132 23.511 9.0959 23.5075C19.8084 23.5075 25.6646 14.635 25.6646 6.93997C25.6646 6.68997 25.6584 6.43747 25.6471 6.18747C26.7863 5.36369 27.7695 4.34359 28.5509 3.17497L28.5534 3.17122Z" fill="black"></path>
                </svg>
                </a>
              </div>
              <div className="link-con-sm">
                <a href="#roadmap"p className="link-btn big-link">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3959 2.61497C23.4834 1.75247 21.4334 1.11497 19.2896 0.752467C19.2705 0.748802 19.2508 0.751164 19.2331 0.759226C19.2154 0.767289 19.2006 0.780652 19.1909 0.797467C18.9284 1.25872 18.6359 1.85997 18.4309 2.33497C16.1572 1.99526 13.8458 1.99526 11.5721 2.33497C11.3438 1.80854 11.0863 1.29525 10.8009 0.797467C10.7912 0.780445 10.7766 0.766779 10.7589 0.758292C10.7413 0.749805 10.7215 0.746901 10.7021 0.749967C8.55962 1.11247 6.50962 1.74997 4.59587 2.61372C4.57941 2.62062 4.56545 2.6324 4.55587 2.64747C0.665874 8.36622 -0.400376 13.9437 0.123374 19.4512C0.124832 19.4647 0.129019 19.4778 0.13568 19.4896C0.142342 19.5014 0.151339 19.5117 0.162124 19.52C2.43261 21.173 4.96504 22.4322 7.65337 23.245C7.67211 23.2507 7.69216 23.2507 7.71089 23.2449C7.72962 23.2391 7.74617 23.2278 7.75837 23.2125C8.33587 22.4375 8.85087 21.6187 9.29087 20.7587C9.31712 20.7087 9.29212 20.6487 9.23962 20.6287C8.43213 20.3246 7.64973 19.9577 6.89962 19.5312C6.88615 19.5235 6.87479 19.5126 6.86657 19.4994C6.85835 19.4863 6.85353 19.4713 6.85254 19.4558C6.85155 19.4403 6.85442 19.4248 6.86089 19.4107C6.86736 19.3966 6.87724 19.3843 6.88962 19.375C7.04712 19.2587 7.20462 19.1375 7.35462 19.0162C7.36813 19.0053 7.38439 18.9984 7.4016 18.9962C7.41882 18.994 7.43631 18.9966 7.45212 19.0037C12.3609 21.2087 17.6771 21.2087 22.5284 19.0037C22.5442 18.9962 22.5619 18.9932 22.5794 18.9952C22.5968 18.9972 22.6134 19.004 22.6271 19.015C22.7771 19.1375 22.9334 19.2587 23.0921 19.375C23.1046 19.3841 23.1147 19.3962 23.1213 19.4102C23.128 19.4242 23.1311 19.4396 23.1304 19.4551C23.1296 19.4706 23.1251 19.4856 23.1171 19.4989C23.1091 19.5122 23.0979 19.5233 23.0846 19.5312C22.3371 19.9612 21.5596 20.325 20.7434 20.6275C20.7308 20.632 20.7194 20.6392 20.7099 20.6485C20.7003 20.6578 20.6929 20.6691 20.688 20.6815C20.6832 20.6939 20.681 20.7072 20.6817 20.7205C20.6825 20.7339 20.686 20.7469 20.6921 20.7587C21.1421 21.6175 21.6571 22.435 22.2234 23.2112C22.2351 23.2271 22.2515 23.2391 22.2703 23.2453C22.2891 23.2516 22.3094 23.2519 22.3284 23.2462C25.0213 22.4358 27.5579 21.1759 29.8309 19.52C29.842 19.5122 29.8513 19.5022 29.8582 19.4905C29.8651 19.4789 29.8694 19.4659 29.8709 19.4525C30.4959 13.085 28.8234 7.55247 25.4346 2.64997C25.4263 2.63404 25.4126 2.62162 25.3959 2.61497ZM10.0246 16.0975C8.54712 16.0975 7.32837 14.7612 7.32837 13.1225C7.32837 11.4825 8.52337 10.1475 10.0246 10.1475C11.5371 10.1475 12.7446 11.4937 12.7209 13.1225C12.7209 14.7625 11.5259 16.0975 10.0246 16.0975ZM19.9934 16.0975C18.5146 16.0975 17.2971 14.7612 17.2971 13.1225C17.2971 11.4825 18.4909 10.1475 19.9934 10.1475C21.5059 10.1475 22.7134 11.4937 22.6896 13.1225C22.6896 14.7625 21.5071 16.0975 19.9934 16.0975Z" fill="black"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <img className="mobile-menu-icon" src={menuIcon} onClick={showmodal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;