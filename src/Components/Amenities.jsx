import Marquee from 'react-fast-marquee'
import Cafeteria from "../assets/Amenities/Touchstone/cafeteria.jpg"
import Chess from "../assets/Amenities/Touchstone/chess.jpg"
import Library from "../assets/Amenities/Touchstone/library.jpg"
import Gym from "../assets/Amenities/Touchstone/gym.jpg"
import Snookers from "../assets/Amenities/Touchstone/snookers.jpg"
import TableTennis from "../assets/Amenities/Touchstone/tableTennis.jpg"

function Amenities() {
  return (
    <div>
      <Marquee gradient gradientColor='#e8f7ff' gradientWidth={25} pauseOnHover autoFill className='text-white'>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={Cafeteria} alt="Cafeteria" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Cafeteria</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={Chess} alt="Chess" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Chess</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={Library} alt="Library" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Library</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={Gym} alt="Gym" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Gym</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={Snookers} alt="Snookers" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Snookers</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={TableTennis} alt="TableTennis" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>TableTennis</p>
            </div>
        </div>
      </Marquee>
    </div>
  )
}

export default Amenities