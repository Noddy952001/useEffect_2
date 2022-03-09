import { useState , useEffect } from "react"


export const Stopwatch = () => {
    
    const [timer ,  settimer]  = useState(1);

    useEffect(() => {
        const id = setInterval(() =>{

            console.log("interval" , timer)
                settimer((prev) => {
                    
                    if(prev > 29){
                        clearInterval(id)
                        return 0
                    }
                    return prev+1
                })


                
        },1000)
            
        return() => {
            clearInterval(id)
            
            console.log("unwanted")
        };

    },[])

        return <div>Time : {timer} </div>


        
}