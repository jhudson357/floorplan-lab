import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return ( 
    <div className="kitchen">
      Kitchen
      <Oven />
      <Sink />
    </ div>
  );
}


export default Kitchen;