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
        padding: "2px",
        borderRadius: "5px",
        backgroundColor: "whitesmoke",
        border: "1px solid black",
        cursor: "pointer",
        transition: "all 2s ease",
      }}
      onClick={defile}
    >
      <img
        style={{
          width: "30px",
          height: "30px",
          objectFit: "cover",
        }}
        src="./defil2.png"
        alt="defile"
      />
    </div>
  );
}
