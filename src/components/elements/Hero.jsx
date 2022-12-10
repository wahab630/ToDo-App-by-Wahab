import React from 'react'
import { useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
 const [activity,setActivity]= useState("");
 const [listData , setListData]= useState("");

 function addActivity(){
  //  setListData([...listData ,activity])
  //  console.log(listData)
  setListData((listData)=>{
    const updatedList =[...listData,activity]
    console.log(updatedList);
    setActivity("");
    return updatedList
  })
 }
 function removeData(){
  setListData([])
 }
 function removeActivity(i){
  const updatedListData =listData.filter((elem,id)=>{
    return  i!=id;
  })
     setListData(updatedListData);
 }
  return (
    <>
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='hero-h'>ToDo list</div>
            <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add</button>
            <p><FaAngleDoubleDown size={25}/></p>
            {
              listData!=[] && listData.map((data,i)=>{
                return(
                  <>
                  <p key={i}>
                    <div className='list-data'>{data}</div>
                  <button className='btn' onClick={()=>removeActivity(i)}>remove(-)</button>
                  </p>
                  </>
                )
              })
            }
            {
              listData.length>=1  && 
            <button onClick={removeData}>Remove all</button>
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero