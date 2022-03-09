// import { useState , useEffect } from "react"


// export const Stopwatch = () => {
    
//     const [timer ,  settimer]  = useState(0);
//     const [stop ,  setstop]  = useState("false");



//     useEffect(() => {
//         const id = setInterval(() =>{

//             console.log("interval" , timer)
//             //     settimer((prev) => {
                    
//             //         if(prev > 29){
//             //             clearInterval(id)
//             //             return 0
//             //         }
//             //         return prev+1
//             //     })


//             settimer((timer) => {
//                 if(stop !== false){
//                     return timer + 1
//                 }else {
//                     return timer
//                 }
//             })


//         },1000)
            
//         return() => {
//             clearInterval(id)
            
//             console.log("unwanted")
//         };

//     },[stop])

        
//         return <div>Time : {timer}  <button onClick={() => setstop(!stop)} >
            
//             {stop ? "Stop" : "Resume"}
            
//             </button> </div>


        
// }