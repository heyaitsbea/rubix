import React from 'react';
import classNames from 'classnames';
import buildArrow from './buildArrow';
import RotateArrows from './RotateArrows';
import ShuffleButton from './ShuffleButton';

export var selected = 0;
export var beginningOfGame = true;

export var slices = [0, 1, 2, 0, 1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 6, 7, 8];
export var forwards = [true, true, true, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false];
export var rotateAxis = ["x", "x", "z", "z", "y", "y"];
export var rotateBln = [false, true, true, false, false, true];
export var actions2;
//export var actionsRotate;
export var changeSelected = 0;


export var toggleThrough = () => {


  document.getElementById("toggle").setAttribute("background-color", "#b3e3c9");

  let controls2 = document.getElementsByTagName("g");
 

  if (beginningOfGame) {
    document.getElementById("note").innerHTML = "Spin slice over x axis";
    document.getElementsByClassName("Arrow")[selected].setAttribute("opacity", 1);
    beginningOfGame = false;
  } else { // not
    selected++;
    
  if (selected != 0) { // if it's not = to 0
   // alert("hi");
    if (18 <= selected && selected < 25) {  // HANDLE CONTROLS 2
    // 18 - 0
    // 19 - 1 
    // 20 - 2
    // 21 - 3
    // 22 - 4
    // 23 - 5
    // 24 - 6
    changeSelected = selected - 18; // 
    if (selected == 18) {
      document.getElementById("note").innerHTML = "Rotate over x axis";
      document.getElementsByClassName("Arrow")[17].setAttribute("opacity", .25);
      document.getElementsByTagName("g")[changeSelected].setAttribute("opacity", 1); // selecting it
    } else if (selected == 24) { // select it
      document.getElementById("note").innerHTML = "Shuffle";
      controls2[5].setAttribute("opacity", .25); // change past one 
      document.getElementsByClassName("ShuffleButton")[0].setAttribute("opacity", 1);
    }else {
      if (selected == 19) {
        document.getElementById("note").innerHTML = "Rotate over x axis";
      } else if (selected == 20 || selected == 21) {
        document.getElementById("note").innerHTML = "Rotate over z axis";
      } else if (selected == 22 || selected == 23) {
        document.getElementById("note").innerHTML = "Rotate over y axis";
      }
      document.getElementsByTagName("g")[changeSelected - 1].setAttribute("opacity", .25);
      document.getElementsByTagName("g")[changeSelected].setAttribute("opacity", 1); // selecting it
    }

    } else { // if it is not in that range
      if (selected == 25) {
        document.getElementById("note").innerHTML = "Spin slice over x axis";
        
       
        changeSelected = 0;
        selected = 0;
        document.getElementsByClassName("ShuffleButton")[0].setAttribute("opacity", .25);
        document.getElementsByClassName("Arrow")[selected].setAttribute("opacity", 1);
      } else {
        document.getElementsByClassName("Arrow")[selected - 1].setAttribute("opacity", .25);
        document.getElementsByClassName("Arrow")[selected].setAttribute("opacity", 1);
        if (selected >= 0 && selected <= 5) {
          document.getElementById("note").innerHTML = "Spin slice over x axis";
        } else if (selected >= 6 && selected <= 11) {
          document.getElementById("note").innerHTML = "Spin slice over y axis";
        } else if (selected >= 12 && selected <= 24) {
          document.getElementById("note").innerHTML = "Spin slice over z axis";
        } else {

        }
      } 
    }
    }   else {
    document.getElementsByClassName("ShuffleButton")[0].setAttribute("opacity", .25);
      // controls2[6].setAttribute("opacity", 1);
    } 
  }

};

export var selectChoice = () => {
 //console.log(document.getElementsByClassName("Arrow")[selected].getAttribute("opacity"));


 //console.log(document.getElementById("zero"));
 
 if (selected >= 0 && selected <= 17) {
  actions2.spinSlice(slices[selected], forwards[selected]);
 } else { // if selected was in it 
  // must be controlling shuffle or the arrows
    changeSelected = selected - 18; // get value of changeselected
  
    //console.log(actions2.rotate(rotateAxis[changeSelected], rotateBln[changeSelected]));   
    if (selected == 24) {
      actions2.randomize();
    } else {
      actions2.rotateCube(rotateAxis[changeSelected], rotateBln[changeSelected]);
    }
 }
   
}

export default ({ actions, disabled }) => {
  const Arrow = buildArrow(actions.spinSlice); // run spinslice

 

actions2 = actions;
  return (
    <section className={classNames('Controls', {
      'disabled': disabled


      
    })}>
      {/* Spin Z forward */} 
      <Arrow id = "zero" slice={0} forward={true} // rightmost top, from bottom to top
      // this code actually placees them around the scene
        style={{ // each arrow has an assigned slice, directino to move in, and where the arrow is
          transform: 'translate(680px, 180px) rotate(-10deg)'
        }
        } />
        
      <Arrow slice={1} forward={true}
        style={{
          transform: 'translate(620px, 120px) rotate(-10deg)'
        }} />
      <Arrow slice={2} forward={true}
        style={{
          transform: 'translate(560px, 70px) rotate(-10deg)'
        }} />

      {/* Spin Z backward */} 
      <Arrow slice={0} forward={false}// bottom left, from bottom up
        style={{ // 
          transform: 'translate(240px, 520px) rotate(130deg)'
        }} />
      <Arrow slice={1} forward={false}
        style={{
          transform: 'translate(200px, 450px) rotate(130deg)'
        }} />
      <Arrow slice={2} forward={false}
        style={{
          transform: 'translate(160px, 380px) rotate(130deg)'
        }} />

      {/* Spin X forward */}
      <Arrow slice={3} forward={true}
        style={{ // bottom right (touching blue) left to right
          transform: 'translate(350px, 540px) rotate(100deg)'
        }} />
      <Arrow slice={4} forward={true}
        style={{
          transform: 'translate(440px, 520px) rotate(100deg)'
        }} />
      <Arrow slice={5} forward={true}
        style={{
          transform: 'translate(530px, 500px) rotate(100deg)'
        }} />

      {/* Spin X backward */}
      <Arrow slice={3} forward={false}
        style={{
          transform: 'translate(270px, 20px) rotate(240deg)'
        }} />
      <Arrow slice={4} forward={false}
        style={{
          transform: 'translate(360px, 25px) rotate(240deg)'
        }} />
      <Arrow slice={5} forward={false}
        style={{
          transform: 'translate(450px, 30px) rotate(240deg)'
        }} />
        
      {/* Spin Y forward */}
      <Arrow slice={6} forward={true} 
        style={{ // right (touching blue),top to bottom
          transform: 'translate(680px, 270px)'
        }} />
      <Arrow slice={7} forward={true}
        style={{
    
          transform: 'translate(640px, 350px)'
        }} />
      <Arrow slice={8} forward={true}
        style={{
          transform: 'translate(600px, 430px)'
        }} />
      
      {/* Spin Y backward */}
      <Arrow slice={6} forward={false}
        style={{ // top left (touching purple), top to bottom
          transform: 'translate(180px, 60px) rotate(220deg)'
        }} />
      <Arrow slice={7} forward={false}
        style={{
          transform: 'translate(160px, 160px) rotate(220deg)'
        }} />
      <Arrow slice={8} forward={false}
        style={{
          transform: 'translate(140px, 260px) rotate(220deg)'
        }} />


      <div style={{ position: 'absolute', top: '35px', left: '65px', transform: 'scale(1.05)' }}>
        <RotateArrows rotate={actions.rotateCube} />
      </div>


      <div style={{ position: 'absolute', top: '450px', left: '40px' }}>
        <ShuffleButton onClick={actions.randomize} />
       
      </div>

      <button id = "toggle" onClick={toggleThrough} 
      // essentially, when you click it at first, one of the arrows will light up
      // when you keep
      >
      toggle
    
      </button>

      <button id = "select" onClick={selectChoice}>
      select
      </button>
      <div > 
      <label id = "note">  </label>
      </div>
     
    </section>
    

  );
};
