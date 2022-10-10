import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

const Floorplan = (props) => {
  return ( 
    <div>
      <Bedroom bedNum='1'/>
      <div>
        <Kitchen />
      </div>
      <Bedroom bedNum='2'/>
      <Bedroom bedNum='3'/>
      {/* <LivingRoom />
      <Bath /> */}
    </div>
  );
}

export default Floorplan;