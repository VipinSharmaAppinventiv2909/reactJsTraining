import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTheme } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  makeStyles,
  Switch,
  Drawer,
  Typography,
  Link,
  TextField,
  MobileStepper,
} from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  Twitter,
  Reddit,
  Facebook,
  Language,
  GitHub,
  Telegram,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Message,
  DetailsOutlined,
  Fingerprint,
  AlarmAddOutlined,
  AccessAlarmSharp,
  ThreeDRotation,
  ShoppingCart,
  ContactSupport,
  GetAppOutlined,
  ForumSharp,
  PersonAdd,
  Search,
} from "@material-ui/icons";
const styles = makeStyles({
  mainContainer: {
    width: "100%",
    backgroundColor: "#f4f6f8",

    height: "2400px",
  },
  tableContent: {
    marginTop: "50px",
    marginLeft: "-12px",
  },

  tableheading: {
    width: "700px",
    margin: "0px 0px 15px -18px",
    color: "#373737",
    fontSize: "2px",
  },
  tablecontainer: {
    margin: "0px 0px 110px 110px",
    width: "1220px",
    height: "550px",
    boxShadow: "0 0 2px grey",
  },
  tablehead: {
    fontSize: "22px",
    fontWeight: "normal",
    width: "250px",
  },
  tablehead2: {
    fontSize: "20px",
    fontWeight: "bold",
    width: "350px",
  },
  sellercol: {
    fontSize: "17px",
    color: "blue",
  },
  paymentcol: {
    fontSize: "20px",
  },
  pricecol: {
    fontSize: "22px",
    color: "green",
    fontWeight: "bold",
  },
  limitcol: {
    fontSize: "20px",
  },
  buybutton: {
    backgroundColor: "orange",
    // color:"red",
    padding: "7px 25px",
    marginLeft: "-60px",
    fontSize: "15px",
    fontWeight: "bold",
  },
  showbutton: {
    width: "200px",
    fontWeight: "bold",
    fontSize: "20px",
    marginLeft: "-150px",
  },

  tableheading2: {
    width: "700px",
    margin: "1160px -20px",
    color: "grey",
  },
  tablecontainer2: {
    margin: "1240px 110px",
    width: "1260px",
    height: "550px",
    boxShadow: "0 0 2px grey",
  },
  tableheading3: {
    width: "700px",
    margin: "1820px 40px",
    color: "grey",
  },
  tablecontainer3: {
    margin: "1880px 110px",
    width: "1260px",
    height: "422px",
    boxShadow: "0 0 2px grey",
  },
  distancecol: {
    fontSize: "20px",
  },

  navBar: {
    backgroundColor: "#f4f6f8",
    width: "100%",
  },
  stepper: {
    maxWidth: 685,
    flexGrow: 1,
    marginLeft: "350px",
  },
  myDrawer: {
    width: "100px",
    color: "red",
  },
  downArrow: {
    backgroundColor: "#373737",
    width: "70px",
    height: "60px",
    color: "white",
  },
  toolBar: {
    display: "flex",
    flexDirection: "column",
    //    justifyContent: "center",
    alignItems: "center",

    height: "100%",
    backgroundColor: "#1565c0",
  },
  setIcon: {
    fontSize: "30px",
    color: "white",
    marginTop: "16px",
  },
  header: {
    width: "100%",
    height: "60px",
    backgroundColor: "white",
    boxShadow: " 0 2px 3px -1px rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    position: "fixed",
    zIndex: "999",
    top: "0",
    marginBottom: "0px",
  },
  miniHeader: {
    backgroundColor: "",
  },
  signUp: {
    backgroundColor: "#388538",
    marginRight: "15px",
    color: "#ffffff",
    marginTop: "10px",
  },
  login: {
    backgroundColor: "#1565c0",
    color: "#ffffff",
    marginTop: "10px",
  },
  button: {
    marginLeft: "1050px",
    marginBottom: "10px",
  },
  buyAndSell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px",
    marginLeft: "90px",
  },

  buyBtn: {
    marginRight: "20px",
    width: "600px",
    height: "300px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff",
  },
  buyMonero: {
    marginRight: "30px",
    width: "600px",
    height: "300px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff",
  },
  buyIcon: {
    width: "260px",
    height: "70px",

    color: "#ffffff",
    fontSize: "30px",
  },
  iconSet: {
    fontSize: "50px",
  },
  buyIcon: {
    backgroundColor: "#1565c0",
    color: "#ffffff",
    fontSize: "large",
    width: "260px",
    height: "42px",
    marginTop: "30px",
    marginLeft: "30px",
  },
  sellIcon: {
    color: "#aaaaaa",
    backgroundColor: "#ffffff",
    width: "260px",
    height: "42px",
    marginLeft: "20px",
    marginTop: "30px",
    marginRight: "30px",
  },
  textField: {
    marginTop: "20px",
    marginLeft: "30px",
    width: "260px",
    height: "48px",
  },
  inr: {
    marginLeft: "20px",
    marginTop: "20px",
    marginRight: "30px",
    width: "260px",
    height: "48px",
  },
  inIndia: {
    marginTop: "20px",
    marginLeft: "30px",
    width: "260px",
    height: "48px",
  },
  textAll: {
    marginLeft: "20px",
    marginTop: "20px",
    marginRight: "30px",
    width: "260px",
    height: "48px",
  },
  search: {
    width: "540px",
    height: "42px",
    marginTop: "20px",
    marginLeft: "30px",
    backgroundColor: "#1565c0",
  },
  setTextText: {
    marginTop: "36px",
  },
  setText: {
    textAlign: "center",
    fontSize: "36px",
    color: "#373737",
  },
  signUpMonero: {
    backgroundColor: "#388538",
    color: "#ffffff",
    marginTop: "10px",
    marginLeft: "220px",
    width: "160px",
    height: "45px",
  },
  copyRight: {
    color: "#373737",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "500px",
    marginLeft: "420px",
    marginTop: "18px",
  },
  innerContainerLink: {
    width: "100%",
    marginTop: "80px",
    textAlign: "center",
    alignItems: "center",
  },
  linkSection: {
    display: "flex",
    width: "1000px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    color: "#1565c0",
    marginLeft: "160px",
  },
  socialIcons: {
    marginLeft: "10px",
  },
  linksRow: {
    width: "160px",
    height: "150px",
    display: "flex",
    marginLeft: "0px",
    color: "black",
    flexDirection: "column",
    justifyContent: "start",
  },

  languageBtn: {
    marginTop: "40px",
    color: "#1565c0",
    // backgroundColor: "black",
    fontSize: "20px",
  },
  languageIcon: {
    color: "#1565c0",
    fontSize: "30px",
  },
  headingText3: {
    fontSize: "20px",
    marginLeft: "20px",
    fontWeight: "bold",
    color: "#373737",
    marginTop: "20px",
  },
  headingText2: {
    fontSize: "26px",
    marginLeft: "20px",
    fontWeight: "normal",
    color: "#373737",
    marginTop: "20px",
  },
  paraText: {
    fontSize: "18px",
    marginLeft: "20px",
    fontWeight: "normal",
    color: "black",
    opacity: "0.8",
    marginTop: "20px",
  },
  stepperText: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    width: "700px",
    display: "flex",
    height: "300px",
    marginLeft: "350px",
    marginTop: "60px",
    flexDirection: "column",
  },
  protectText: {
    display: "flex",
    width: "700px",
    height: "350px",
    flexDirection: "column",
    marginLeft: "350px",
    marginTop: "50px",
  },
  heading: {
    fontSize: "24px",
    color: "#373737",
    marginTop: "10px",
  },
  para: {
    fontSize: "17px",
    fontWeight: "normal",
    color: "black",
    opacity: "0.8",
    marginTop: "10px",
  },
  divider: {
    width: "1200px",
    marginLeft: "100px",
    marginTop: "50px",
  },
});
export default function Assignment5() {
  const classes = styles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <div className={classes.mainContainer}>
      {/* <Drawer open = {true} className = {classes.myDrawer}><AccessAlarmSharp color = "primary"/></Drawer> */}
      {/* <AlarmAddOutlined/>
          <AccessAlarmSharp color = "primary"/>
           <Button color = "primary" variant = "text">old</Button>
           <Button color = "secondary" variant = "outlined">NEW</Button>  */}
      <Drawer
        className={classes.myDrawer}
        variant="permanent"
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
        anchor="left"
      >
        <ArrowDownwardOutlined className={classes.downArrow} />

        <div className={classes.toolBar}>
          <AlarmAddOutlined className={classes.setIcon} />
          <AccessAlarmSharp className={classes.setIcon} fontSize="large" />
          <ContactSupport className={classes.setIcon} fontSize="large" />
          <GetAppOutlined className={classes.setIcon} fontSize="large" />
          <ThreeDRotation className={classes.setIcon} fonrSize="large" />
          <Message className={classes.setIcon} fontSize="large" />
          <DetailsOutlined className={classes.setIcon} fontSize="large" />
          <ForumSharp className={classes.setIcon} fontSize="large" />
          <GetAppOutlined className={classes.setIcon} fontSize="large" />
          <AlarmAddOutlined className={classes.setIcon} fontSize="large" />
          <AccessAlarmSharp className={classes.setIcon} fontSize="large" />
        </div>
      </Drawer>

      <div className={classes.header}>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            className={classes.signUp}
            startIcon={<PersonAdd />}
          >
            {" "}
            {"sign up free"}{" "}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.login}
            startIcon={<Fingerprint />}
          >
            {" "}
            {"log in"}{" "}
          </Button>
        </div>
      </div>
      <div className={classes.buyAndSell}>
        <div className={classes.buyBtn}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buyIcon}
            startIcon={<ShoppingCart fontSize="large" />}
          >
            {" "}
            {"BUY"}{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.sellIcon}
            startIcon={<ShoppingCart fontSize="large" />}
          >
            {" "}
            {"SELL"}{" "}
          </Button>
          <TextField
            className={classes.textField}
            label="Amount"
            variant="outlined"
          />
          <TextField className={classes.inr} label="INR" variant="outlined" />
          <TextField
            className={classes.inIndia}
            label="inIndia"
            variant="outlined"
          />
          <TextField
            className={classes.textAll}
            label="All indian offers"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.search}
            startIcon={<Search fontSize="large" />}
          >
            {" "}
            {"Search"}{" "}
          </Button>
        </div>
        <div className={classes.buyMonero}>
          <div className={classes.setTextText}>
            <div className={classes.setText}>Buy Monero.</div>
            <div className={classes.setText}>Sell Monero.</div>
            <div className={classes.setText}>Cash or online.</div>
            <div className={classes.setText}>Anywhere.</div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.signUpMonero}
            startIcon={<PersonAdd />}
          >
            {" "}
            {"sign up free"}{" "}
          </Button>
        </div>
      </div>

      <div className={classes.tableContent}>
        <div className={classes.tableheading}>
          <Typography variant="h3" align="right">
            Buy Monero online in India
          </Typography>
        </div>
        <div className={classes.tablecontainer}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tablehead}>Seller</TableCell>
                  <TableCell className={classes.tablehead2}>
                    Payment Methods
                  </TableCell>
                  <TableCell className={classes.tablehead}>Price/XMR</TableCell>
                  <TableCell className={classes.tablehead2}>Limits</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>appukttam0(529;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    Other online payment
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19566.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    100.00-22000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>jdboi(5114;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    8500.00-50000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chgbyry(4535;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21966.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    1000.00-25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>chandanbits007(54;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    19366.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    2500.00-20000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.sellercol}>
                    <u>appukuttam(5764;100%)</u>
                  </TableCell>
                  <TableCell className={classes.paymentcol}>
                    IMPS Bank Transfer India
                  </TableCell>
                  <TableCell className={classes.pricecol}>
                    21766.77 INR
                  </TableCell>
                  <TableCell className={classes.limitcol}>
                    Up to 25000.00 INR
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buybutton}
                    >
                      BUY
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button color="primary" className={classes.showbutton}>
                      SHOW MORE...
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* <Typography className = {classes.} */}
      <Divider className={classes.divider} />
      <div className={classes.protectText}>
        <Typography className={classes.heading} variant="h3">
          Protect your right to privacy - buy Monero.
        </Typography>
        <Typography className={classes.para} variant="p">
          If you are concerned about the invasion of privacy - the best
          cryptocurrency to invest in is XMR. Monero is an untraceable coin
          developed with privacy by design in mind. Where to buy Monero?
          LocalMonero is the biggest, most trusted and well-established P2P
          Monero exchange in the XMR community. We have no KYC checks - you can
          simply buy Monero anonymously without ID verification with PayPal,
          credit card, gift card, cash by mail or convert bitcoin to Monero -
          our platform supports any payment method.
        </Typography>
        <Typography className={classes.heading} variant="h3">
          Sell Monero to people worldwide or locally - support the community and
          make money with cryptocurrency.
        </Typography>
        <Typography className={classes.para} variant="p">
          LocalMonero is the best place to sell XMR - whether it's your mining
          rewards, Monero price arbitrage, or you simply see the value in
          servicing the community. The escrow system and our secure Monero
          wallet provide you with a robust XMR trading experience - so you can
          convert XMR to USD, EUR, AUD, GBP or any other local currency with
          peace of mind.
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.stepperText}>
        <Typography className={classes.headingText3} variant="h3">
          Latest News
        </Typography>
        <Typography className={classes.headingText2} variant="h2">
          Local Monero/ AgroDesk now allows you to import reputation from
          localBitcoins and/ or Paxful!
        </Typography>
        <Typography className={classes.paraText} variant="p">
          If you have an account on LocalBitcoins or Paxful and you'd like to
          import the reputation you have worked for while trading on these
          platforms, you can now do so! To do it, simply open your settings page
          and navigate to the reputation import tab. Your LocalBitcoins/Paxful
          trades will be added to your total trade count and your other stats
          will be displayed on your user page.{" "}
        </Typography>
      </div>

      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        className={classes.stepper}
        nextButton={
          <Button size="small" onclick={handleNext} disabled={activeStep === 5}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />

      <div className={classes.innerContainerLink}>
        <Typography className={classes.copyRight} variant="p">
          &copy; 2021 Blue Sunday Limited
        </Typography>
        <div className={classes.linkSection}>
          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              About
            </Link>
            <Link href="#" underline={"always"}>
              Terms of service
            </Link>
            <Link href="#" underline={"always"}>
              Fees
            </Link>
            <Link href="#" underline={"always"}>
              Contact us
            </Link>
            <Link href="#" underline={"always"}>
              Law Enforcement Inquiries
            </Link>
          </Typography>

          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              Security bounty
            </Link>
            <Link href="#" underline={"always"}>
              Affiliate
            </Link>
            <Link href="#" underline={"always"}>
              Statistics
            </Link>
            <Link href="#" underline={"always"}>
              API docs
            </Link>
          </Typography>

          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              Local Bitcoins Alternative
            </Link>
            <Link href="#" underline={"always"}>
              Monero News
            </Link>
            <Link href="#" underline={"always"}>
              Knowledge
            </Link>
            <Link href="#" underline={"always"}>
              Monero Block Explorer
            </Link>
          </Typography>

          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              Tor hidden service
            </Link>
            <Link href="#" underline={"always"}>
              I2P
            </Link>
            <Link href="#" underline={"always"}>
              B32 I2P
            </Link>
            <Link href="#" underline={"always"}>
              AgoraDesk
            </Link>
          </Typography>
        </div>
        <Button className={classes.languageBtn}>
          <Language className={classes.languageIcon} />
          {"Change Language"}
        </Button>
      </div>
      <div className={classes.socialLinks}>
        <Button>
          <Twitter className={classes.socialIcons} />
        </Button>
        <Button>
          <Reddit className={classes.socialIcons} />
        </Button>
        <Button>
          <Facebook className={classes.socialIcons} />
        </Button>
        <Button>
          <Telegram className={classes.socialIcons} />
        </Button>
        <Button>
          <GitHub className={classes.socialIcons} />
        </Button>
      </div>
      {/* </div> */}
    </div>
  );
}
