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

export const RecipeGallery = () => {

    const recipe = [
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
    const wrapper = {
      // backgroundColor: "yellow",
      // height:"100vh",
      display:"flex",
      gap:"15px",
      flexWrap:"wrap",
    };
    const head={
      textAlign:"center",
     
      marginBottom:"55px",
    }
 const [showProfile, setShowProfile] = useState(false);

 const TESTVARIABLE = "TESTING";
 const [selectedProfile, setSelectedProfile] = useState({
   name: "",
   title: "",
   image: "",
 });

 console.log(TESTVARIABLE);
 

  return (
    <div>
      <h1 style={head}>View our Recipes</h1>
      <div style={wrapper}>
        {TESTVARIABLE}

        {recipe.map(
          (d) => (

            <div>
              <RecipeCard
                item={d}
                testAttribute="TESTING"
                setShowProfile={setShowProfile}
                showProfile={showProfile}
                updateProfile={setSelectedProfile}
              />
              </div>
          )
          // console.log("200",{item})
        )}
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
