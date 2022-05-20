import "./styles.css";
import Themeprovider from "./Themeprovider";
import Multitheme from "./Multitheme";
import Header from "./Header";

export default function App() {
  return (
    <Themeprovider>
      <div className="App">
        <Multitheme />
        <Header />
      </div>
    </Themeprovider>
  );
}
