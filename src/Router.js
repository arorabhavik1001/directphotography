import React, { useState, useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Splash from "./Components/Splash";
import Book from "./Components/Book";
import ComingSoon from "./Components/ComingSoon";
import About from "./Components/About";
import Stories from "./Components/Stories";
import StoriesSolo from "./Components/StoriesSolo";
import { db } from "./firebase";

const Router = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    db.collection("basic-stories").onSnapshot((snapshot) =>
      setStories(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <BrowserRouter>
      {/* <Route exact path="/" component={Splash} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/booknow" component={Book} />
      <Route exact path="/presets" component={ComingSoon} />
      <Route exact path="/about" component={About} />
      <Route exact path="/stories" component={ComingSoon} />
      {/* <Route
        exact
        path="/stories"
        render={(props) => <Stories {...props} contents={stories} />}
      /> */}
      {/* {stories.map((story) => (
        <Route
          key={story.heading}
          exact
          path={`/stories/${story.heading}`}
          render={(props) => <StoriesSolo {...props} contents={story} />}
        />
      ))} */}
    </BrowserRouter>
  );
};

export default Router;
