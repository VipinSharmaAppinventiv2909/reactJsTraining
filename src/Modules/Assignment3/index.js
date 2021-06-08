import React from "react";
import "./index.css";
import Litecoin from "../../components/reusableBox/Litecoin";
import Litecoin2 from "../../components/reusableBox/Litecoin2";
import AddImages from "../../components/reusableBox/AddImages";
class Assignment3 extends React.Component {
  render() {
    return (
      <div className={"mainWrapper"}>
        <div className={"headerWrapper"}>
          <div className={"header"}>
            <div className={"imageSet"}>
              <img src="xcoins.jpg" className={"imageSet"} alt="xcoins-image" />
            </div>
            <h1>xcoins</h1>
            <div className={"navbar"}>
              <p>BUY BITCOIN</p>
              <p>SELL BITCOIN</p>
              <p>BLOG</p>
              <p>ABOUT US</p>
            </div>
            <div className={"signUp"}>
              <p>&#9660;</p>
              <button className={"logIn"}>LOGIN</button>
              <button className={"signup"}>SIGNUP</button>
            </div>
          </div>
          <div className={"nextToHeader"}>
            <div className={"section1"}>
              <div className={"section1Heading"}>
                <h1>Buy &amp; sell Dogecoin Online</h1>
                <h2>Add Doge to your crypto wallet</h2>
                <p>Instant, fun, and free from traditional banking system.</p>
                <p>Buy Dogecoin with your debit and credit card today.</p>
              </div>
              <div className={"section1Box"}>
                <h1>Get your crypto now!</h1>
                <div className={"sectionBoxes"}>
                  <button className={"BUY"}>BUY</button>
                  <button className={"SELL"}>SELL</button>
                </div>
                <div className={"USD"}>
                  <img src="download.png" className={"flag"} alt="usa_flag" />
                  <h2>100</h2>
                  {/* <div className = {"vertical"}>
                          |
                      </div> */}
                  <p>USD</p>
                </div>
                <hr className={"inline"}></hr>
                <div className={"bitcoin"}>
                  <img src="bitcoin.png" className={"fi"} alt="bitcoin-image" />
                  <h2>0,00956474</h2>
                  <img
                    src="bitcoin.png"
                    className={"sec"}
                    alt="bitcoin-image"
                  />
                </div>
                <button className={"buyDoge"}>BUYDOGE</button>
              </div>
            </div>
          </div>
        </div>
        <div className={"cards"}>
          <div className="MasterCard">
            <img
              src="Mastercard-logo.png"
              className={"masterCard_image"}
              alt="card-icon"
            />
            <div className="dots">
              <p>&#9679; &#9679; &#9679; &#9679;</p>
              <p className={"dotMargin"}>&#9679; &#9679; &#9679; &#9679;</p>
              <p className={"dotMargin"}>&#9679; &#9679; &#9679; &#9679;</p>
              <p className={"dotMargin"}>4 3 </p>
            </div>
            <div className={"cardDetails"}>
              <div className={"cardHolder"}>
                <h3>Card Holder</h3>
                <p>George Dux</p>
              </div>
              <div className={"ExpiryDate"}>
                <h3>Exp</h3>
                <p>09/15/2o</p>
              </div>
            </div>
          </div>
          <div className="visa">
            <img
              src="Visa-logo.png"
              className={"visa_image"}
              alt="visa-card-icon"
            />
            <div className="dot">
              <p>&#9679; &#9679; &#9679; &#9679;</p>
              <p className={"dotsMargin"}>&#9679; &#9679; &#9679; &#9679;</p>
              <p className={"dotsMargin"}>&#9679; &#9679; &#9679; &#9679;</p>
              <p className={"dotsMargin"}>4 3 2</p>
            </div>
            <div className={"cardsDetail"}>
              <div className={"cardHolders"}>
                <h3>Card Holder</h3>
                <p>George Dux</p>
              </div>
              <div className={"ExpiryDates"}>
                <h3>Expir</h3>
                <p>09/15/20</p>
              </div>
            </div>
          </div>
          <div className="Exchange">
            <h1>Exchange Your Dogecoin Instantly! </h1>
            <p>
              Buy &amp; sell Doge using your visa or Mastercard debit or credit
              card
            </p>
          </div>
        </div>

        <div className={"how_to_buy_litecoin"}>
          <h1>How to Buy Dogecoin</h1>
          <p>Only 3 Simple steps</p>
        </div>

        <div className="litecoin1">
          <Litecoin
            image="tick.png"
            bubble_index={<button className={"setButton1"}>1</button>}
            heading={"Get Verified Quickly"}
            text={
              "Just Sign up upload you verification Documents and open your account"
            }
          />
          <Litecoin
            image="wallet.png"
            bubble_index={<button className={"setButton1"}>2</button>}
            heading={"Buy Dogecoin"}
            text={
              "Select which coins you would like to buy and how much you want to purchase"
            }
          />
          <Litecoin
            image="timer.png"
            bubble_index={<button className={"setButton1"}>3</button>}
            heading={"Receive coins"}
            text={
              "We will send your coins to your wallet within 15 minutes of payment approval"
            }
          />
        </div>
        <div className="createButton">
          <button className={"BuyDogecoin"}>BUY DOGECOIN</button>
        </div>

        <div className={"how_to_sell_dogecoin"}>
          <h1>How to Sell Dogecoin</h1>
          <p>Only 3 Simple steps</p>
        </div>
        <div className="litecoin2">
          <Litecoin2
            image="tick1.png"
            bubble_index={<button className={"setButton"}>1</button>}
            heading={"Get Verified Quickly"}
            text={
              "Just Sign up upload you verification Documents and open your account"
            }
          />

          <Litecoin2
            image="wallet1.png"
            bubble_index={<button className={"setButton"}>2</button>}
            heading={"Sell Dogecoin"}
            text={
              "Select Dogecoin under the sell tab and decide how much you want to sell"
            }
          />
          <Litecoin2
            image="timer1.png"
            bubble_index={<button className={"setButton"}>3</button>}
            heading={"Recieve Cash"}
            text={
              "We will send your coins to your wallet within 15 minutes of payment approval"
            }
          />
        </div>

        <div className="createButton1">
          <button className={"SellDogecoin"}>SELL DOGECOIN</button>
        </div>

        <div className={"whyBuyAndSell"}>
          <img src="phone.png" className={"phoneImage"} alt="phone-image" />
          <div className={"content"}>
            <h1>Why Buy &amp; Sell Dogecoin with Xcoins?</h1>
            <div className={"encrption"}>
              <img src="lock.png" className={"lockImage"} alt="lock-image" />
              <h3>Encryption technology</h3>
            </div>
            <p>
              Xcoins reputation for speed and security will keep you coming
              back. World class encryption technology keeps your data secure and
              your transactions safe.
            </p>
            <div className={"customer"}>
              <img src="customer.png" className={"notifi"} alt="message-logo" />
              <h3>Customer care</h3>
            </div>
            <p>
              If you have any questions about Dogecoin or how to buy &amp; sell
              it, you can contact our 24/7 cutomer support team
            </p>
            <div className={"signu"}>
              <p>Buy &amp; sell Dogecoin today</p>
              <button className={"signup_Button"}>SIGN UP</button>
            </div>
          </div>
        </div>

        <div className={"Dogecoin"}>
          <div className={"Decetralized"}>
            <img
              src="connection.png"
              className={"collectionImage"}
              alt="network-icon"
            />
            <div className={"tick_again"}>
              <img src="tick2.png" className={"tick2Image"} alt="tick-icon" />
              <h2>Decetralized</h2>
            </div>
          </div>

          <div className={"whatIsDogecoin"}>
            <h1>What is Dogecoin?</h1>
            <p>
              Dogecoin (Doge) is a cryptocurrency created by software engineers
              in 2013. It's been stated that it was created jokingly as a homage
              to Bitcoin, but with rexent price surges, it's becoming a much
              more serious investment for crypto-enthusiats
            </p>
          </div>

          <div className={"Peer_to_Peer"}>
            <img src="peer.png" className={"peerImage"} alt="peer-icon" />
            <div className={"tick_again"}>
              <img src="tick2.png" className={"tick2Image"} alt="tick-icon" />
              <h2>Peer-to-Peer</h2>
            </div>
          </div>
        </div>

        <div className={"spendDogecoin"}>
          <h1>Where Can I spend my Dogecoin?</h1>
          <p>
            There are a variety of fashion and clothing shops online accepting
            Dogs as payment. You can also use your Doge to pay for domains and
            hosting, or online casinos.
          </p>
        </div>

        <div className={"SettingUpImages"}>
          <AddImages image="clothing.png" text={"CLOTHING STORES"} />
          <AddImages image="domain.png" text={"DOMAIN & HOSTING"} />
          <AddImages image="casino.png" text={"ONLINE CASINOS"} />
        </div>

        <div className={"main_content"}>
          <img src="coffee.png" className="coffeeImage" alt="coffee-icon" />
          <div className={"IsForMe"}>
            <h1>Is Dogecoin for me?</h1>
            <p>
              Dogecoin, although created for fun, has recently has a large price
              surge. Its growth in popularity also means that more companies are
              accepting it as a form of payment
            </p>
            <div className={"button_content"}>
              <p>Buy &amp; sell Dogecoin today</p>
              <button className={"sellAndBuy"}>SIGN UP</button>
            </div>
          </div>
        </div>

        <div className={"footer"}>
          <div className={"division1"}>
            <div className={"subdivision1"}>
              <div className={"x_coins"}>
                <img
                  src="xcoins.jpg"
                  className={"setXiconImage"}
                  alt="xicon-image"
                />
                <h2>xcoins</h2>
              </div>
              <img src="review.png" className="reviewImage" alt="review-icon" />
              <p>14 East, Level 8, Silema Road, G7R1639, Malta</p>
            </div>
            <div className={"subdivision2"}>
              <h2>COMPANY</h2>
              <p>About us</p>
              <p>Carrers</p>
            </div>
            <div className={"subdivision3"}>
              <h2>SUPPORT</h2>
              <p>Help Center</p>
              <p>Contact</p>
            </div>
            <div className={"subdivision4"}>
              <h2>SOCIAL</h2>
              <p>Blog</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>

          <div className = {"division2"}>
              <div className = {"subdiv1"}>
                  <p>@Xcoins.com</p>
                  <p>Terms of Sevice</p>
                  <p>Privacy Policy</p>
                  <p>Legal Notice</p>
                  <p>site map</p>
              </div>
              <div className = {"subdiv2"}>
                  <p>Xcoins is property of CF Techonologies Ltd-Company #204616970 4 East, Level B, Silema Road</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment3;
