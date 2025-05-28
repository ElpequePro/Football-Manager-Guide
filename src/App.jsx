import AttackingMidfielder from "./components/Positions/AttackingMidfielder";
import Defender from "./components/Positions/Defender";
import DefensiveMidfielder from "./components/Positions/DefensiveMidfielder";
import FullBack from "./components/Positions/FullBack";
import Goalkeeper from "./components/Positions/Goalkeeper";
import Midfielder from "./components/Positions/Midfielder";
import Striker from "./components/Positions/Striker";
import WideMidfielder from "./components/Positions/WideMidfielder";
import Winger from "./components/Positions/Winger";
import WingBack from "./components/Positions/WingBack";

function App() {

  return (
    <>
      {/** Defensive positions */}
      <Goalkeeper />
      <Defender />
      <FullBack />
      <WingBack />
      {/** Midfielder positions */}
      <DefensiveMidfielder />
      <Midfielder />
      <WideMidfielder />
      <AttackingMidfielder />
      {/** Offensive positions */}
      <Winger />
      <Striker />
    </>
  );
}

export default App;
