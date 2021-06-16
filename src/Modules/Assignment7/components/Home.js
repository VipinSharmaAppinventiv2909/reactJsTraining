import React from "react";
import { useHistory } from "react-router";
import users from "./Data";
export default function Home() {
  let history = useHistory();
  // let userFullnames = users.map(function (element) {
  //   return `${element.firstName} ${element.lastName}`;
  // });
  // let idYouWants = Math.floor(Math.random() * 6);
  // let propertYouWant = "firstName";
  // let res = users.filter((item) => {
  //   return (item.id = idYouWants);
  // });
  // let ExactRes = res[0][propertYouWant];
  // console.log(ExactRes);

  const data = users.map((response) => {
    return Object.keys(response);
  });
  console.log(data[0]);
  if (localStorage.getItem("userData") == null) {
    localStorage.setItem("userData", JSON.stringify(users));
  }

  return (
    <div className={"mainWrapper"}>
      <div className={"innerWrapper"}>
        {/* {users.map((response) => {
          return Object.keys{response);

        })} */}

        <input
          type="text"
          placeholder="Search"
          className={"input"}
          id={"inputChange"}
        />
        <button
          onClick={() => {
            history.push("./edit");
          }}
          className={"btn"}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

/*
const [str, setStr] = useState()

function validate()
  {
        const value = 
}
<button onClick = {validate}></button>
*/
