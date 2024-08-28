import Keyboard from '../../assets/images/Key-removebg.png'
import { Home_Button } from './Home_Button'
export function Home_Main(){
    return <div className='w-full h-full flex bg-slate-700'>
            
            <div className='w-[50%] h-full flex flex-col justify-center pl-20 gap-10'>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex flex-col justify-center'>
                        <h1 className='text-6xl font-bold text-slate-50'>Play Type Online</h1>
                        <h1 className='text-6xl font-bold text-slate-50'>on the #1 Site!</h1>
                    </div>
                    <div className='flex gap-40'>
                        <p>14,614,249 Games Today</p>
                        <p>180,172 Playing Now</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-10'>
                    <Home_Button/>
                    <Home_Button/>
                </div>
            </div>
            <div className='w-[50%] h-full flex justify-center items-center'>
                <img src={Keyboard} className='w-full h-[70%] cursor-none object-cover' />
            </div>
             
    </div>
}