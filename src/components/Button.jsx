export default function Button() {
  const defile = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="image"
      style={{
        position: "fixed",
        top: "350px",
        right: "0px",
        backgroundColor: "red",
        border: "1px solid black",
        cursor: "pointer",
        transition: "all 2s ease",
      }}
      onClick={defile}
    >
      <img
        style={{
          width: "35px",
          height: "35px",
          objectFit: "cover",
        }}
        src="./defil2.png"
        alt="defile"
      />
    </div>
  );
}
