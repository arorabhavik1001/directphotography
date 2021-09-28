import React, { useState, useEffect } from "react";
import rLogo from "../images/rLogo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../firebase";
import bg from "../images/home2/bg.jpg";
import Card from "./Card";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function Stories({ contents }) {
  const [isMModalOpen, setIsMModalOpen] = useState(false);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      {/* <style>{`body {background-image:url(${bg}); background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;}`}</style> */}
      <div className="mobile-nav">
        {/* <MenuIcon onClick={() => setIsModalOpen(true)} /> */}
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={() => setIsMModalOpen(true)}>{anchor}</Button> */}
            <MenuIcon onClick={() => setIsMModalOpen(true)} />
            <SwipeableDrawer
              anchor={anchor}
              open={isMModalOpen}
              onClose={() => setIsMModalOpen(false)}
            >
              <div className="row" style={{ textAlign: "center" }}>
                <div
                  className="col-lg col-md"
                  style={{ paddingBottom: ".5rem", paddingTop: ".5rem" }}
                >
                  <a
                    href="/"
                    className="text-gray-500 hover:no-underline hover:text-black"
                    style={{ textDecoration: "none" }}
                  >
                    HOME
                  </a>
                </div>

                <div
                  className="col-lg col-md"
                  style={{ paddingBottom: ".5rem" }}
                >
                  <a
                    href="/stories"
                    className="text-gray-500 hover:no-underline hover:text-black"
                    style={{ textDecoration: "none" }}
                  >
                    STORIES
                  </a>
                </div>
                <div
                  className="col-lg col-md"
                  style={{ paddingBottom: ".5rem" }}
                >
                  <a
                    href="/presets"
                    className="text-gray-500 hover:no-underline hover:text-black"
                    style={{ textDecoration: "none" }}
                  >
                    PRESETS
                  </a>
                </div>
                <div
                  className="col-lg col-md"
                  style={{ paddingBottom: ".5rem" }}
                >
                  <a
                    href="/about"
                    className="text-gray-500 hover:no-underline hover:text-black"
                    style={{ textDecoration: "none" }}
                  >
                    ABOUT
                  </a>
                </div>
                <div
                  className="col-lg col-md"
                  style={{ paddingBottom: ".5rem" }}
                >
                  <a
                    href="/booknow"
                    className="text-gray-500 hover:no-underline hover:text-black"
                    style={{ textDecoration: "none" }}
                  >
                    BOOK NOW
                  </a>
                </div>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "gray",
                    height: "2.5rem",
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                  onClick={() => setIsMModalOpen(false)}
                >
                  Close
                </button>
                {/* <Button onClick={() => setIsMModalOpen(false)}>Close</Button> */}
              </div>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      <a href="/">
        <img
          src={rLogo}
          alt="logo"
          style={{
            height: "6.3rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1.5rem",
          }}
          className="m-20 mb-4 sm:mb-5"
        />
      </a>
      <div
        className="row wrap-nav"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/"
            className="text-gray-500 hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            HOME
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/stories"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            STORIES
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/presets"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            PRESETS
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/about"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            ABOUT
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/booknow"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            BOOK NOW
          </a>
        </div>
      </div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Basic Package"></Tab>
          <Tab label="Premium Package" />
        </Tabs>
        <TabPanel value={value} index={0}>
          {contents.map((story) =>
            story.service === "basic" ? (
              <Card
                className="text-center"
                images={story.images}
                coupleName={story.coupleName}
                heading={story.heading}
              />
            ) : null
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {contents.map((story) =>
            story.service === "premium" ? (
              <Card
                className="text-center"
                images={story.images}
                coupleName={story.coupleName}
                heading={story.heading}
              />
            ) : null
          )}
        </TabPanel>
      </Paper>
    </div>
  );
}

export default Stories;
