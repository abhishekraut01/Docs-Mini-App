import Card from './Card'
import data from "../assets/Data.json";
import { useRef } from 'react';

const ForeGround = () => {
    const ref = useRef()
  return (
    <div ref = {ref} className=" fixed gap-5 flex z-[3] left-0 top-0 w-full h-screen bg-transparent flex-wrap p-8" >
        {
            data.map((doc , index)=>{
                return <Card key={index} documents={doc} reference = {ref}/> 
            })
        }
    </div>
  )
}

export default ForeGround