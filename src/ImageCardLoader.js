import SkeletonLoader from "./SkeletonLoader";

const CardStyle = {
  width: 400,
  boxShadow: "0px 0px 3px 0px #f5f5f5",
  backgroundColor: "#fff",
  padding: "20px 20px 60px 20px",
};

export default function ImageCardLoader() {
  return (
    <div style={CardStyle}>
      <SkeletonLoader width={260} height={180} />
      <SkeletonLoader count={2} style={{ marginTop: 5 }} />
      <SkeletonLoader style={{ marginTop: 5 }} width={"60%"} />
    </div>
  );
}
