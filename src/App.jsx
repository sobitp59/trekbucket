import React from "react";

import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import ItemsContextProvider from "./contexts/ItemsContextProvider";

const App = () => {
  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
};

export default App;
