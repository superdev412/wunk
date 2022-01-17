import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../../assets/css/dashboard/Roadmap.css';
import roadmap from '../../assets/img/roadmap.png'

function Roadmap() {
  const [notify, setNotify] = useState(true);
  useEffect(() => {

    $('#content1').slideDown();

    var len = $("#drop-part").children().length;
    $("#drop-part").children("div").children("div").click(function(){
      var selected_id = this.id;
      var order = selected_id.slice(-1);
      $("#content" + order).slideToggle();
      for(var i = 0; i <= len ; i ++){
        if(i == order){
          continue;
        }
        $("#content" + i).slideUp();
      }
    })
  });
  return(
    <div id="roadmap" className="roadmap-content">
      <p className="roadmap-lg-title">Roadmap.</p>
      <p className="roadmap-sm-word">Our Roadmap outlines some of the future perks Spooky Boys Country Club members will be able to enjoy. Scroll through the course map and look over some of the ideas and concepts we wish to grow and deliver. We are constantly developing here at SBCC, so this map will also develop and evolve as more ideas are created to make our Country Club the top rated club of the Metaverse!</p>
      <div className="roadmap-container">
        <div className="roadmap-img-part">
          <img className="roadmap-img" src={roadmap} />
        </div>
        <div className="roadmap-description-part">
          <div id="drop-part" className="drop-part">
            <div id="part1" className="each-part-faq">
              <div id="div1" className="drop-header-sm">
                <p className="md-description-faq">Welcome</p>
                <div className="vertical-img">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></svg>
                </div>
              </div>
              <br/>
              <div id="content1" style={{marginTop:'0px'}}>
                <p className="sm-description-faq">Welcome to the Club! Spooky Boys official public mint is revealed. The presale dates will be announced as soon as the technical aspects of our project are brought to completion.</p>
              </div>
              <br/>
              <br/>
            </div>

            <div id="part2" className="each-part-faq">
              <div id="div2" className="drop-header-sm">
                <p className="md-description-faq">Spoo-keys airdrop</p>
                <div className="vertical-img">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></svg>
                </div>
              </div>
              <br/>
              <div id="content2" style={{marginTop:'0px',display:'none'}}>
                <p className="sm-description-faq">All project holders will get airdropped a set of Spoo-keys. Also hire slayer.</p>
              </div>
              <br/>
              <br/>
            </div>

            <div id="part3" className="each-part-faq">
              <div id="div3" className="drop-header-sm">
                <p className="md-description-faq">Unlock a mystery</p>
                <div className="vertical-img">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></svg>
                </div>
              </div>
              <br/>
              <div id="content3" style={{marginTop:'0px',display:'none'}}>
                <p className="sm-description-faq">Use your Spoo-keys to unlock a mystery.</p>
              </div>
              <br/>
              <br/>
            </div>

            <div id="part4" className="each-part-faq">
              <div id="div4" className="drop-header-sm">
                <p className="md-description-faq">Token launch</p>
                <div className="vertical-img">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></svg>
                </div>
              </div>
              <br/>
              <div id="content4" style={{marginTop:'0px',display:'none'}}>
                <p className="sm-description-faq">Spooky boys token launch.</p>
              </div>
              <br/>
              <br/>
            </div>

            <div id="part5" className="each-part-faq">
              <div id="div5" className="drop-header-sm">
                <p className="md-description-faq">Staking Launch</p>
                <div className="vertical-img">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></svg>
                </div>
              </div>
              <br/>
              <div id="content5" style={{marginTop:'0px',display:'none'}}>
                <p className="sm-description-faq">Staking will begin Q2 of 2022 to add increased value to all loyal Country Club members who HODL and accumulate tokens.</p>
              </div>
              <br/>
              <br/>
            </div>

            <div id="part6" className="each-part-faq">
              <div id="div6" className="drop-header-bm">
                <p className="md-description-faq">Spooky Boys Survival Game - Beta Version Release</p>
                <div className="vertical-img">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></svg>
                </div>
              </div>
              <br/>
              <div id="content6" style={{marginTop:'0px',display:'none'}}>
                <p className="sm-description-faq">This game is currently being developed and will create more benefits to Country Club members through in-game contests and token accumulation.</p>
              </div>
              <br/>
              <br/>
            </div>

            <div id="part7" className="each-part-faq">
              <div id="div7" className="drop-header-bm">
                <p className="md-description-faq">Spooky Boys Survival Game Launch</p>
                <div className="vertical-img">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path></svg>
                </div>
              </div>
              <br/>
              <div id="content7" style={{marginTop:'0px',display:'none'}}>
                <p className="sm-description-faq">Spooky Szn will be in full swing upon release of one of the best metaversal games!</p>
              </div>
              <br/>
              <br/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Roadmap;