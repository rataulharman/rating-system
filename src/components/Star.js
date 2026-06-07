import { FaStar } from "react-icons/fa";

function Star(props) {
  return (
    <FaStar
      size={30}
      color={props.selected ? "gold" : "gray"}
      onClick={props.onClick}
    />
  );
}

export default Star;