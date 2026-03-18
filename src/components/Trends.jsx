import trend1 from "../assets/trend1.webp"
import Trend2 from "../assets/Trend2.webp"
import Trend3 from "../assets/Trend3.webp"
import Trend4 from "../assets/Trend4.webp"
import Trend5 from "../assets/Trend5.webp"
import Trend6 from "../assets/Trend6.webp"
import Trend7 from "../assets/Trend7.webp"
import Trend8 from "../assets/Trend8.webp"

function Trends() {
    const movies = [        
        {
           id: 1,
           url: trend1, 
        },
        {
           id: 2,
           url: Trend2, 
        },
        {
           id: 3,
           url: Trend3, 
        },
        {
          id: 4,
          url: Trend4, 
        },
        {
           id: 5,
           url: Trend5, 
        },
        {
           id: 6,
           url: Trend6, 
        },
        {
           id: 7,
           url: Trend7, 
        },
        {
          id: 8,
          url: Trend8, 
        },
    ];

  return (
    <div className='py-10'>
       <div className='font-bold text-2xl'>Trending now</div>
        <div className="flex gap-10 overflow-scroll hide-scrollbar">
        {movies.map((movie,index)=> {
            return (
        <div key={index} className="pt-5 relative">
           <img className="rounded-2xl min-w-[200px]" src={movie.url} alt=""/>
           <div className="text-9xl font-bold absolute bottom-0 left-[-25] text-stroke-white">
            {movie.id}
           </div>
        </div>        
        )
           })}             
        </div>
    </div>
    
  );
};

export default Trends