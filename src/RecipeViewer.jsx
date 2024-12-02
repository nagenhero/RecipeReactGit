import React from "react";

export const RecipeViewer = ({ userdata, setShowProfile }) => {
  return (
    <div className="profileViewerStyle">
      <img src={userdata.image} />
      <h2>{userdata.name}</h2>
      <h5>{userdata.title}</h5>
      <h4>{userdata.desc}</h4>
{/*       
      <h4>{userdata.ingredients}</h4> */}

      <h3>Ingredients</h3>
      <ol>
        {
          userdata.ingredients.map(item=>{
            return <li>{item}</li>
          })
        }

      </ol>
      <button
        onClick={() => {
          setShowProfile(false);
        }}
      >
        close
      </button>
    </div>
  );
};
