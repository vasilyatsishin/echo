import Cookies from "./components/cookies/Cookies";
import { useSelector } from "react-redux"
import Navbar from "./components/navbar/Navbar";
import styles from "./App.module.css"
import Header from "./components/header/Header";
import Blocks from "./components/blocks/Blocks";

const App = () => {
  const selector = useSelector((state) => (state.mainReducer.cookies))

  return (
    <>
      {selector != true && <Cookies />}
      <Navbar />
      <Header />
      <Blocks />
    </>
  )
}

export default App;
