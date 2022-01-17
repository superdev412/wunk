import React, { useState } from 'react';
import '../../assets/css/dashboard/Mint.css';
import nft from '../../assets/img/nft.gif'
import Dashboard from './Dashboard';

function Mint() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const decrease = () => {
    if(count > 0){
      var temp = count - 1
    }else{
      temp = count
    }
    setCount(temp);
    if(temp < 20){
      setFlag(false)
    }
  }
  const increase = () => {
    if(count < 20){
      var temp = count + 1
    }else{
      temp = count
    }
    setCount(temp);
    if(temp == 20){
      setFlag(true)
    }
  }
  return(
    <div id="mint" className="mint-content">
      <div className="mint-container">
        <div className="mint-nft-part">
          <img className="mint-nft-img" src={nft} />
        </div>
        <div className="mint-description-part">
          <div >
            <p className="mint-lg-word"><span style={{color:'#E91E63'}}>MINT</span> YOUR NFTs.</p>
            <p className="mint-sm-word">The Spooky Boys Country Club is a collection of 13,000 unique ERC-721 tokens stored on the Ethereum Blockchain. Non-sequentially minted and provably unique, each NFT comes with a full membership including functioning utility and an ever-growing community.</p>
            <div class="number-control">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="white" height="40" width="40" xmlns="http://www.w3.org/2000/svg" style={{color:'black',cursor:'pointer'}} onClick={decrease}>
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"></path>
              </svg>
              <span id="inputBox" className="mint-sm-word" style={{marginLeft:'20px'}}>{count}</span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="white" height="40" width="40" xmlns="http://www.w3.org/2000/svg" style={{color:'black',marginLeft:'20px',cursor:'pointer'}} onClick={increase}>
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"></path>
              </svg>
            </div>
            {!flag ? <button className="mint-btn">Mint</button> : <button className="mint-btn">Sold Out</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint;