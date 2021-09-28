import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: 5,
    minHeight: 106,
    "&$expanded": {
      minHeight: 76,
      marginBottom: 5,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function Card({ images, coupleName, heading }) {
  // const [expanded, setExpanded] = React.useState("");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  // const links = []

  // images.forEach((name) => links.push({ source: `${name}` }))

  // const setting = {
  //   width: "1000px",
  //   height: ["190px", "300px", "200px"],
  //   layout: [2, 1, 3],
  //   photos: links,
  //   showNumOfRemainingPhotos: true,
  // };

  return (
    <div>
      <a href={`/stories/${heading}`} style={{textDecoration: 'none'}}>
      <div className="main__solo">
        <h3 className="card__heading coupleName">{coupleName}</h3>
      </div>
      </a>
      <div>
      {/* <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        // style={expanded=== "panel1"?{display:"flex", justifyContent: "center"}:null}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{marginLeft: "auto", marginRight: "auto" }}
        >
            <div style={{marginLeft: "auto", marginRight:"auto", display:"flex"}}>
          {expanded === "panel1" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ height: "40px", marginRight: "10px" }}
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ height: "40px", marginRight: "10px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          )}
          <h4 className="coupleName">{coupleName}</h4>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{display:"flex", justifyContent: "center"}}>
          <ReactPhotoCollage {...setting} style />
        </AccordionDetails>
      </Accordion> */}
    </div>
    </div>
  );
}

export default Card;
