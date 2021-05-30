import "./skeleton-loader.scss";

export default function SkeletonLoader(props) {
  const { width, height, circle, count, style: customStyle } = props;
  const style = {};

  /** list of loaders in case the `count` props has been passed */
  const loaderItems = [];

  /** Logic to create multiple loaders in case of `count` */
  for (let i = 0; i < count; i++) {
    if (height !== null) {
      style.height = height;
    }

    if (width !== null) {
      style.width = width;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "50%";
    }

    const el = (
      <span
        style={{
          ...style,
          ...customStyle,
        }}
        className="loader"
      ></span>
    );

    loaderItems.push(el);
  }

  return <span>{loaderItems}</span>;
}

SkeletonLoader.defaultProps = {
  width: null,
  height: null,
  circle: false,
  count: 1,
};
