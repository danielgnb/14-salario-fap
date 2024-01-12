import Content from "../components/content";
import Menu from "../components/menu";
import Navbar from "../components/navbar";

function Dashboard() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Content />
    </div>
  );
}

export default Dashboard;
