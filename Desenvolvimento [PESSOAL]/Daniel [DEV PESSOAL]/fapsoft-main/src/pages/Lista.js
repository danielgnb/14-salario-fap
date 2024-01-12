import Content3 from "../components/content3";
import Menu from "../components/menu";
import Navbar from "../components/navbar";
import ListRow from '../components/list-row/index.js';
import { Mock } from '../utils/mock.js';

function Lista() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Content3 />
      <ListRow data={Mock} />
    </div>
  );
}

export default Lista;
