import React from "react";

export const RecipeCard = ({item,setShowProfile, showProfile,updateProfile, testAttribute})  => {
    const data=item;
    // console.log("200",data);
    
    const cardStyle = {
      width: "250px",
      height: "300px",
      backgroundColor: "grey",
    
      backdropFilter:"blur(4px)",
      color: "black",
      marginTop: "10px",
      padding: "20px",
      borderRadius: "20px",
    //   display: "flex",
    //   flexDirection: "column",
      backdropFilter: "blur(14px)",
      marginTop: "4px",
      color:"white",
      fontSize:"20px"
    };
    const imgStyle={
        width:"100%",
        height:"200px",


    }
    const button1={
        backgroundColor:"green",
        color:"white",
        cursor:"pointer",
        padding:"8px",
        marginLeft:"70px",
        marginTop:"5px",
        
    }
    const wrapper={
        backgroundColor:"yellow",
        height:"700px",
        width:"800px",
    }
    const OpenProfileViewer=()=>
    {
      console.log("300",item);
      

      const testObject = {item};
      console.log("300", testObject);
      
        setShowProfile(true);
        updateProfile(item);
     
    }
  return (
    
    <div style={cardStyle}>
      <img style={imgStyle} src={item.image}></img>
      <div>{item.name}</div>
      <div>{item.title}</div>
      <button  onClick={OpenProfileViewer}style={button1}>View Recipe</button>
    </div>
   
  );
};
