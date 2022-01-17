import '../../assets/css/dashboard/introduction.css';
import logo from '../../assets/img/logo.png';
import nft from '../../assets/img/nft1.png'

function Introduction() {
  return(
    <div id="home" className="content-intro">
      <img className="logo-img-intro" src={logo} />
      <br />
      <img className="nft-img-intro" src={nft} />
    </div>
  )
}

export default Introduction;