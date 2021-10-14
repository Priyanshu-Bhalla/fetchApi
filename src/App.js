import './App.css';
// import Star from './components/Star';
// import Button from './components/Button';
//  import { useState } from 'react';
import Apifetch from './components/Apifetch';
// import Form from './components/Form';
// import Func from './components/Func';
// import Div from './components/Div';
// import Map from './components/Map';
// import Effect from './components/Effect';
// import Calc from './components/Calc';
// import Parent from './components/Parent';
// import Memo from './components/Memo';
// import FocusInput from './components/FocusInput';

// import Livecycle from './components/Livecycle';

function App() {
  // const arr =[0,1,2,3,4];
// const [rating, setRating] = useState(0)
// const [hoverRating, setHoverRating] = useState(0);


  // const arr1 =[1,2,3,4,5];
  // const myColor = [
  //   {
  //     title:"Title1",
  //     height:"200px",
  //     width:"200px",
  //     backgroundColor:"purple",
  //     id:1
  //   },
  //   {
  //     title:"Title2",
  //     height:"200px",
  //     width:"200px",
  //     backgroundColor:"pink",
  //     id:2
  //   },
  //   {
  //     title:"Title3",
  //     height:"200px",
  //     width:"200px",
  //     backgroundColor:"yellow",
  //     id:3
  //   },
  //   {
  //     title:"Title4",
  //     height:"200px",
  //     width:"200px",
  //     backgroundColor:"green",
  //     id:4
  //   },
  //   {
  //     title:"Title5",
  //     height:"200px",
  //     width:"200px",
  //     backgroundColor:"blue",
  //     id:5
  //   },
  // ]
  //  const [mystyle, setMystyle] = useState({
  //    backgroundColor:'purple',
  //    height:'100px',
  //    width:'100px'
  //  });
  
  return (
    <div className="App">
      {/* {arr1.map((x)=>{ return console.log(x)})} */}
      {/* <div className="array">
    {myColor.map((element) =>{
     return <div key={element.id}>
       <Div title={element.title} backgroundColor={element.backgroundColor} height={element.height} width={element.width}/>
      </div>
    })}
      </div>
  
      <Form title="title"/>
      <Func mystyle={mystyle}/> */}
      {/* <Map/> */}
      {/* <Effect/> */}
      {/* <Calc/> */}
      {/* <Parent/> */}
      {/* <Memo/> */}
      {/* <FocusInput/> */}
      {/* <Livecycle/> */}
      {/* {arr.map((star,i) => {
          return <Star key={i} starId={i} rating={hoverRating || rating}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => {setRating(i);console.log("clicked")}}/>

      })} */}
      <Apifetch/>
     
    </div>
  );
}

export default App;
