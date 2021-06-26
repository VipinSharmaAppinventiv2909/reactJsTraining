import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import validation from "../validation";
const { useEffect, useState } = React;
// const fetchRandomData = () => {
//     return(
//         axios.get('https://randomUser.me/api')
//         .then(res => {
//             console.log(res);
//             return res;
//         })
//         .catch(err => {
//           // handle error
//           console..error(err);
//         });
//         // .then(function () {
//         //   // always executed
//         // });
//     );
// }
export default function Home() {
  //const [randomUserDataJSON, setrandomUserDataJSON] = useState(null);
//   const [randomData, setRandomData] = useState([]);
//   const fetchRandomData = async () => {
//     const data = await axios.get("https://reqres.in/api/users?page=3");
//     console.log(data);
//     console.log(data.data.data);
//     setRandomData(data.data.data);
//   };
  let history = useHistory();
   const [counter, setCounter] = useState(0);

//   useEffect(async () => {
//     // fetchRandomData().then((randomData) => {
//     //   setrandomUserDataJSON(randomData);
//     // });

//     fetchRandomData();
//   }, []);
  return (
    <div className={"mainWrapper"}>
       
       
      <div className={"innerWrapper"}>
        {/* {randomData.map((items) => (
          <h1>{items.id}</h1>
        ))} */}
        <h1>Hello you are in home page</h1>
        <p>{counter}</p>
        <button
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Move to dahboard page
        </button>
        <button
          onClick={() => {
            setCounter(counter + 1);
            console.log("foo");
          }}
        >
          Increment Counter by one
        </button>
        {/* <p>{randomUserDataJSON}</p> */}

        {/* <button
          onClick={() => {
            fetchRandomData();
          }}
        >
          Fetch random data
        </button> */}
      </div>
    </div>
  );
}
// export default Home;
