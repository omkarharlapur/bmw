import { useRef } from "react"
import { useState } from "react"
import "./App.css"

export default function Home(){

    const[cursor,setCursor]=useState({show:false,x:0,y:0,text:""})



    const video1=useRef();
    const video2=useRef();
    const video3=useRef();

    const playVideo=(ref,index)=>{
        
        ref.current.play()
    }
    
    const pauseVideo=(ref)=>{
        ref.current.pause()
    }

    return(
        <div className="hero-container">
            <div className="intro-video">
                <video src="/13103349_1920_1080_60fps.mp4" autoPlay muted></video>
            </div>
            <div className="divider">
                <h1>A GERMAN MACHINE</h1>
            </div>
        {cursor.show && (
            <div className="floating-cursor" style={{left:cursor.x+15,top:cursor.y+15}}>
                {cursor.text}
            </div>
        )}
            <div className="exp-card">
                <video src="/cust.mp4" ref={video1} width="100%" height="auto" muted 
                onMouseEnter={()=>playVideo(video1,1)}
                onMouseLeave={()=>pauseVideo(video1)}
                ></video>
               <video src="/meter.mp4" width="100%" ref={video2} height="auto"  muted
               onMouseEnter={()=>playVideo(video2,2)}
                onMouseLeave={()=>pauseVideo(video2)} ></video>
               <video src="/bentley.mp4" width="100%" ref={video3} height="auto"  muted
               onMouseEnter={()=>playVideo(video3,3)}
                onMouseLeave={()=>pauseVideo(video3)} ></video>
            </div>

        </div>
          
    

    )
}