import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

const App = () => {
  return (
    <>
      <Header />
      {notes.map((data) => {
        return (
          <Note key={data.key} title={data.title} content={data.content} />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
