import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return ( 
    <div>
      <div className="oven-sink">
          <Oven />
          <Sink />

      </div>
      <div className="kitchen">
        Kitchen
      </div>
    </ div>
  );
}


export default Kitchen;