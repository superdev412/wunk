import '../../assets/css/dashboard/Icon.css';
import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';

function Icon() {
  return(
    <div id="icon" className="icon-content">
      <p className="icon-title">The Icons</p>
      <p className="icon-sm-word">By using the same art style as the original CryptoPunks, we have curated some of the most influential women icons from our human history. From Anne Frank, to Amelia Earhart, all the way to Catherine the Great, we give you, The Icons. Only 8 Icons are available for random mint.</p>
      <div>
        <div className="icon-part">
          <div>
            <img className="icon-img" src={icon1} />
          </div>
          <div>
            <img className="icon-img icon-space"src={icon2} />
          </div>
          <div>
            <img className="icon-img icon-space" src={icon3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Icon;