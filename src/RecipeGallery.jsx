import React from "react";
import { RecipeCard } from "./RecipeCard";
import aa from "./assets/bolo.jpg";
import bb from "./assets/bhat.png";
import cc from "./assets/momo.jpg";
import a1 from "./assets/a1.jpg";
import a2 from "./assets/a2.avif";
import a3 from "./assets/a3.webp";
import a4 from "./assets/a4.webp";
import a5 from "./assets/a5.jpeg";
import { useState } from "react";
import { RecipeViewer } from "./RecipeViewer";
// import { Button } from "bootstrap";


 const orginalProfile = [
   {
     name: "Bolognese",
     title: "Pasta",
     image: aa,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
   {
     name: "Thakali set",
     title: "Nepali",
     image: bb,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
   {
     name: " Chicken Momo",
     title: "Dumpling",
     image: cc,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
   {
     name: " Chicken Momo",
     title: "Dumpling",
     image: a1,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
   {
     name: " Chicken Momo",
     title: "Dumpling",
     image: a2,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
   {
     name: " Chicken Momo",
     title: "Dumpling",
     image: a3,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
   {
     name: " Chicken Momo",
     title: "Dumpling",

     image: a4,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
   {
     name: " Chicken Momo",
     title: "Dumpling",
     image: a5,
     desc: "The dough requires just three ingredients and comes together quickl",
     ingredients: ["cheese", "onion", "garlic", "tomatoo"],
   },
 ];
    
export const RecipeGallery = () => {
  const[profiles,SetProfile]=useState(orginalProfile);

   
    const wrapper = {

      // backgroundColor: "yellow",
      // height:"100vh",
      display:"flex",
      gap:"15px",
      flexWrap:"wrap",
      justifyContent:"center",
      backgroundColor:"black",
    };
    const head={
      textAlign:"center",
     
      marginBottom:"55px",
    }
 const [showProfile, setShowProfile] = useState(false);


 const [selectedProfile, setSelectedProfile] = useState({
   name: "",
   title: "",
   image: "",
 });
const[searchVariable,setSearchVariable]=useState("");
const handleOnChange=(e)=>
{
  setSearchVariable(e.target.value);
   searchTrigger();

}
const searchTrigger=()=>
{
  // alert(searchVariable);
  const filtered_profile= orginalProfile.filter((item)=>
    item.name.toLocaleLowerCase().includes(searchVariable.toLowerCase())
  
  )
  SetProfile(filtered_profile);
  
  
}

 const search={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginBottom:"5px",

 }

  return (
    <div className="gallery">
      <h1 style={head}>View our Recipes</h1>
      <div className="inputForm" style={search}>
        <input
          type="text"
          name="search"
          value={searchVariable}
          onChange={handleOnChange}
        />
        <button className="bg-danger" onClick={searchTrigger}> <i class="fa-solid fa-magnifying-glass">Search</i>
       </button>

          
      </div>
      <div style={wrapper}>
        {profiles.map((d) => (
          <div>
            {d.name}
            {d.title}
            <RecipeCard
              item={d}
              testAttribute="TESTING"
              setShowProfile={setShowProfile}
              showProfile={showProfile}
              updateProfile={setSelectedProfile}
            />
          </div>
        ))}
      </div>
      {showProfile ? (
        <RecipeViewer
          userdata={selectedProfile}
          //   alertfunc={parentFunction}
          setShowProfile={setShowProfile}
        />
      ) : (
        ""
      )}
    </div>
  );
};
