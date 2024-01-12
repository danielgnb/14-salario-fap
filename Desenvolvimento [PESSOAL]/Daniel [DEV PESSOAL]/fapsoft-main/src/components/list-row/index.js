import "./list-row.css";
import Row from "../row/index.jsx";
import WhiteBoard from "../white-board/index.js";

export default function ListRow({ data }) {
  return (
    <WhiteBoard
      Children={data.map((item) => (
        <div className="list-row">
          <Row id={item.id} img={item.img} name={item.name} email={item.email} />
        </div>
      ))}
    />
  );
}
