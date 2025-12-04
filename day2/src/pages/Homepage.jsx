import React, { useRef, useState } from 'react'
import { HideToggle } from '../components/HideToggle';


const Homepage = () => {

    const styling = {
        fontSize: '30px',
        background: 'black',
        color: 'white',
        padding: '20px',
    }
    const [data, setData] = useState(0);
    const [inputdata, setInputData] = useState('');

    function function1() {
        alert("button clicked");
    }

    function function2() {
        alert("cursor came on green  button");
    }
    function function3(e) {
        setInputData(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("form submit kardu kya ");
    }
    function handleIncrease(){
        setData(data + 1)
    }
    function handleDecrease(){
        if(data > 0){
            setData( data - 1)
        } else{
            alert("Already 0");
            setData(0)
        }
    }

    const intervalId = useRef(null) ; 

    const setDown = ()=>{
        // if (intervalId.current) return ; 
         intervalId.current = setInterval(()=>{
            setData(data => data + 1);
        }, 150)
    }
    const  clearDown1 = ()=> {
        clearInterval(intervalId.current);
        intervalId.current = null;
    }
   
    
    return (
        <div className='ml-10'>
            {/* counter app  */}
            <div className='border-1 p-5 w-[500px] '>
                <div className='mt-5 text-2xl mb-5 ml-20'> value : {data} </div>
                <div className='flex gap-10'>
                    <button 
                        onClick={handleIncrease}
                        onMouseDown={setDown}
                        onMouseUp={clearDown1}
                        onMouseLeave={clearDown1}
                    
                    style={styling}>Increase</button>
                    <button onClick={handleDecrease} style={styling}>Decrease</button>
                </div>
            </div>


            <div className='border-1 p-5 w-[800px] mt-2  '>
                {/* events  */}
                <button onClick={function1} className='mt-3 text-3xl '>  Onclick event</button> <br />
                <button onMouseOver={function2} className='mt-3 text-3xl bg-[green] text-white p-2 hover: cursor-pointer '>  Mouse over event</button>
                
                {/* submit event  */}
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter text' className='border-1 rounded-sm mt-2' />
                <button type='submit' className=' ml-5 bg-black p-2 text-white text-xl mt-2'> submit</button>
            </form>
            </div>

             {/* two way binding  */}
           <div  className='border-1 p-5 w-[800px] mt-2  '>
                <div className='flex gap-5 p-2 text-xl '>  Two way binding : 
                    <input type="text" value={inputdata} placeholder='onChange Event' onChange={function3} className='border-1' />
                    <p className='text-xl'>You Typed :  {inputdata}</p>
                </div>
           </div>
            <HideToggle/>
        
        </div>

    )
}


export default React.memo(Homepage)