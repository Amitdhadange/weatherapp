import React from 'react'

const temprature = ({setCity,stats}) => {
    const handlerCityChange = (e)=>{
        setCity(e.target.value);
    }
  return (
    <>
        <div className='flex justify-between  '> 
            <input type="text" placeholder='Enter City Name' className='p-[5px] bg-gray-400 border border-gray-600 rounded m-2 ml-[7vw] outline-none placeholder-gray-900 text-[bold]' 
            onChange={handlerCityChange} 
            defaultValue="New Delhi"/>

            <div className='mt-4 mr-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 text-transform scale-100 hover:scale-110 trasition-transform duration-300 ease-in-out cursor-pointer ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

            </div>
        </div>

        <div className='mb-2 flex justify-center'>
            {stats.isDay !== 0 ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 text-yellow-300 mt-8"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-slate-200 mt-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}

       </div>
    
    <div className='flex justify-center text-slate-200 text-transform scale-100 hover:scale-110 trasition-transform duration-300 ease-in-out mb-2'>
        <p className='font-semibold text-[55px]'>{stats.temp}
            <span className='text-[3vw] mt-[-2vh]'>°C</span>
        </p>
    </div>

    <div className='flex justify-center items-center text-slate-200  text-[22px] text-transform scale-100 hover:scale-110 trasition-transform duration-300 ease-in-out mb-2'> {stats.condition}
    </div>

    <div className='flex justify-center text-slate-300 text-[15px]'>
    Today {stats.time} | {stats.location}
    </div>
    </>
  )
}

export default temprature