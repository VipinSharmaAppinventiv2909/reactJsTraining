import React from "react";
import Card from "./component/card";
import Header from "./Header";
import obj from "./utils/images";
export default function FlexBox() {
  return (
    <div>
      <Header
        logo={obj.xcoinsLogo}
        setting={obj.settingIcon}
        notification={obj.notificationIcon}
        picture={obj.picture}
      />
      <h1 className={"supportText"}>Support</h1>
      <div className={"inputSection"}>
        <img src={obj.search} id={"searchIcon"} />
        <input type="text" placeholder={"search xcoin support"} />
      </div>
      <div className={"cardSection"}>
        <Card
          heading={"Buy Currency"}
          data={[
            "What currencies do we accept?",
            "What is the minimum order amount?",
            "What is a Cash Advance Fee?",
            "Ethereum orders and smart contracts",
          ]}
        />
        <Card
          heading={"Buy Currency"}
          data={[
            "What currencies do we accept?",
            "What is the minimum order amount?",
            "What is a Cash Advance Fee?",
            "Ethereum orders and smart contracts",
          ]}
        />
        <Card
          heading={"Buy Currency"}
          data={[
            "What currencies do we accept?",
            "What is the minimum order amount?",
            "What is a Cash Advance Fee?",
            "Ethereum orders and smart contracts",
          ]}
        />
        <Card
          heading={"Buy Currency"}
          data={[
            "What currencies do we accept?",
            "What is the minimum order amount?",
            "What is a Cash Advance Fee?",
            "Ethereum orders and smart contracts",
          ]}
        />
        <Card
          heading={"Buy Currency"}
          data={[
            "What currencies do we accept?",
            "What is the minimum order amount?",
            "What is a Cash Advance Fee?",
            "Ethereum orders and smart contracts",
          ]}
        />
      </div>
    </div>
  );
}
