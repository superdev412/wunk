import Header from "../include/header";
import Introduction from "./introducion";
import Footer from "../include/footer";
import Mint from "./Mint";
import Roadmap from "./Roadmap";
import Icon from "./Icon";
import Token from "./Token";

function Dashboard() {
  return (
    <div>
      <Header />
      <Introduction />
      <Mint />
      <Roadmap />
      <Icon />
      <Token />
      <Footer />
    </div>
  );
}
export default Dashboard