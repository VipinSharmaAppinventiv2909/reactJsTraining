// import React from "react";
// import "./index.css";
// class Assignment4 extends React.Component {
//   render() {
//     return (
//       <div className={"main_wrapper"}>
//         <div className={"header"}>
//           <div className={"burger_menu"}>
//             <div className={"one"}></div>
//             <div className={"two"}></div>
//             <div className={"three"}></div>
//           </div>
//           <div className={"xcoins"}>
//             <img src="xcoins.jpg" className={"xcoinsImage"} alt="xcoins-icon" />
//             <h1>xcoins</h1>
//           </div>
//           <div className={"shapes"}>
//             <img
//               src="setting.png"
//               className={"settingImage"}
//               alt="setting-icon"
//             />
//             <img
//               src="notification.png"
//               className={"notificationImage"}
//               alt="noti-icon"
//             />
//             <img src="phone.png" className={"UserImage"} alt="userImage" />
//           </div>
//         </div>
//         <div className={"Support_search"}>
//           <h1>Support</h1>
//           <input
//             type="text"
//             placeholder="Search Xcoins Support"
//             className={"input"}
//           />
//         </div>
//         <div className={"content"}>
//           <div className={"Affiliate_Program"}>
//             <h2>Affiliate Program</h2>
//             <p>Are there countries i can't promote?</p>
//             <p>Can you make specific images</p>
//             <p>How does this program work</p>
//             <h3>See All Articles</h3>
//           </div>
//           <div className={"Buy_currency"}>
//             <h2>Buy Currency</h2>
//             <p>What Currencies do we accept?</p>
//             <p>What is the minimum Order Amount?</p>
//             <p>What is a Cash Advance Fee?</p>
//             <p>Ethereum orders and smart contracts</p>
//             <p>Ethereum orderes and smart contracts</p>
//             <h3> Sell All Articles</h3>
//           </div>

//           <div className={"Verification"}>
//             <h2>Verification</h2>
//             <p>ID Verification Documents Submitted</p>
//             <p>How should you take the perfect selfie</p>
//             <p>What Id can you use to sign up...</p>
//             <p>Your application to join Xcoins was...</p>
//             <p>How to make sure your verification...</p>
//             <h3>See All articles</h3>
//           </div>

//           <div className={"Orders"}>
//             <h2>Orders</h2>
//             <p>Resetting your password</p>
//             <p>What does order completed mean?</p>
//             <p>Why has my order failed</p>
//             <p>What does order cancelled mean?</p>
//             <p>Why does it take time to receive my..</p>
//             <h3>See all Articles</h3>
//           </div>
//           <div className="Wallet">
//             <h2>Wallet</h2>
//             <p>What is my wallet Address?</p>
//             <p>What is a destination tag and why..</p>
//             <p>What are cold wallets?</p>
//             <p>What are cold wallets?</p>
//             <p>What are hot wallets?</p>
//             <p>What is a wallet?</p>
//             <h3>See all Articles</h3>
//           </div>
//           <div className="Payment_Methods">
//             <h2>Payment Methods</h2>
//             <p>Accepted credit/debit cards</p>
//             <p>Overview of bank fees-Cash Advance..</p>
//             <h3>See all Articles</h3>
//           </div>
//           <div className={"Other"}>
//             <h2>Other</h2>
//             <p>What are out buisness hours?</p>
//             <p>How can i contact Xcoins?</p>
//             <p>Why have i not received my mail</p>
//             <p>Why can't i access my brand new..</p>
//             <h3>See all Articles</h3>
//           </div>
//           <div className={"Security"}>
//             <h2>Security</h2>
//             <div className={"flexing"}>
//               <p>How can i protect myself from scams</p>
//               <p>Forgotten Your password?</p>
//               <p>Create a strong password</p>
//             </div>
//             <h3>See all articles</h3>
//           </div>
//           <div className="Referal_Program">
//             <h2>Referal Programs</h2>
//             <p>How does the Xcoins affiliate program..</p>
//             <h3>See all Articles</h3>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Assignment4;

import React from "react";
import "./index.css";
import Grid from "./Grid";
import FlexBox from "./FlexBox";
export default function Assignment4() {
  return (
    <div className={"mainWrapper"}>
      {/* <FlexBox /> */}
      <Grid />
    </div>
  );
}
