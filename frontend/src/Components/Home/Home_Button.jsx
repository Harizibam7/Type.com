
export function Home_Button(){
    const Logo = (<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 13H6.01M6 17H6.01M10 13H10.01M14 13H14.01M18 17H18.01M18 13H18.01M16 3V5H8V9M10 17H14M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H5.2C4.07989 9 3.51984 9 3.09202 9.21799C2.71569 9.40973 2.40973 9.71569 2.21799 10.092C2 10.5198 2 11.0799 2 12.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>);
return <div className="w-[80%] h-24 flex text-slate-50 rounded-xl bg-green-600 gap-4 ">
            <div className="flex justify-center p-2">
                {Logo}
            </div>
            <div>
                <h1>Play Online</h1>
                <p>Play with someone at your level</p>
            </div>
        </div>
}