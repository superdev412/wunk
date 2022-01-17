import '../../assets/css/dashboard/Token.css';
import token from '../../assets/img/token.png';

function Token() {
  return(
    <div id="token" className="token-content">
      <div className="token-part">
        <div className="token-left-part">
          <p className="token-title">Tokens</p>
          <br/>
          <p className="token-sm-description">Without changing the original CryptoPunk trait standard, we created Wunks with a varrying array of new and used traits.</p>
          <br/>
          <p className="token-sm-description">Hidden within the 6,000 Wunks are a sparsed collection of Alien, Ape, and Zombie Wunks.</p>
          <br/>
          <p className="token-sm-description">All Wunks are ERC-721 tokens and are stored on the Ethereum blockchain.</p>
          <br/>
          <p className="token-price">Mint Price : 0.025 ETH</p>
          <br/>
          <br/>
          <p className="token-title">Collaborations</p>
          <br/>
          <p className="token-sm-description">If you are interested in collaborating with us, you can reach us via email at collab@wunks.xyz</p>
        </div>
        <div className="token-right-part">
          <img className="token-img" src={token} />
        </div>
      </div>
      
    </div>
  )
}

export default Token;