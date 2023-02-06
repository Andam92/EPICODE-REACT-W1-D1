const ButtonComponent = (props) => (
  <button style={{ backgroundColor: props.bgColor, color: props.color }}>
    {props.text}
  </button>
);

export default ButtonComponent;
