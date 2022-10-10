import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return ( 
    <div className="kitchen">
      <div className="oven-sink">
        <Oven />
        <Sink />
      </div>
      Kitchen
    </ div>
  );
}


export default Kitchen;