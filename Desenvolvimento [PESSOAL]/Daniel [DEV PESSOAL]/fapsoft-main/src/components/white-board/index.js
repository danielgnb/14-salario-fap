import "./white-board.css";

export default function WhiteBoard({ title, Children }) {
  return (
    <section className="whiteBoard">
      <div className="whiteBoard-content">
        <div>{title}</div>
        <div>{Children}</div>
      </div>
    </section>
  );
}
