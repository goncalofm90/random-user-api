import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Counter from "./components/Counter";
import Menu from "./components/Menu";
import SpinnerLogo from "./components/SpinnerLogo";
import UserList from "./components/UserList";

function App() {
  const [cardData, setCardData] = useState([]);
  //if you want more items visible, change 10 to whatever number you want
  const [visible, setVisible] = useState(10);
  const [loading, setLoading] = useState(true);
  const [personCount, setPersonCount] = useState(10);

  //I'm going to render up to 100 so you see the loading functionality but you can
  //add more if you like, just change results to whatever number.
  const allCardData = async () => {
    setTimeout(async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?results=100"
      );
      setCardData(response.data.results);
      setLoading(false);
    }, 2000);
  };

  const loadFemale = () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?gender=female&results=100"
      );
      setCardData(response.data.results);
      setLoading(false);
      setVisible(10);
      setPersonCount(10);
    }, 2000);
  };

  const loadMale = () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?gender=male&results=100"
      );
      setCardData(response.data.results);
      setLoading(false);
      setVisible(10);
      setPersonCount(10);
    }, 2000);
  };

  const loadRandom = () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await axios.get("https://randomuser.me/api/");
      setCardData(response.data.results);
      setLoading(false);
      setVisible(1);
    }, 2000);
  };

  //again, if you want more or less items visible, change 10 to whatever number you want
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(visible + 10);
      setPersonCount(visible + 10);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    allCardData();
  }, []);

  return (
    <div className="App">
      <Counter personCount={personCount} visible={visible} />
      <Menu
        loading={loading}
        visible={visible}
        loadRandom={loadRandom}
        loadMale={loadMale}
        loadFemale={loadFemale}
        loadMore={loadMore}
      />
      <SpinnerLogo loading={loading} />
      <UserList cardData={cardData} visible={visible} />
    </div>
  );
}

export default App;
