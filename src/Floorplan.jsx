import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

const Floorplan = () => {
  return ( 
    <div className='floorplan'>
      <div className='upper-half'>
        <div className='upper-left'>
          <Bedroom bedNum='1'/>
          <Bath size='Full'/>
        </div>
        <LivingRoom />
        <div className='upper-right'>
          <Kitchen />
        </div>
      </div>
      <div className='lower-half'>
        <Bedroom bedNum='2'/>
        <Bath size='Half'/>
        <Bedroom bedNum='3'/>
      </div>
    </div>
  );
}

export default Floorplan;