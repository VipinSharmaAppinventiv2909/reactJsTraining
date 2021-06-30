import React from "react";
import ReactDOM from "react-dom";
import Assignment12 from "./Modules/Assignment12";
import reportWebVitals from "./reportWebVitals";
import store from "./Modules/Assignment11/components/store";
import { Provider } from "react-redux";
import StoreProvider, {
  initialState,
} from "./Modules/Assignment12/storeProvider";
import dataReducer from "./Modules/Assignment12/dataReducer";
// store.subscribe() =>  console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <StoreProvider initialStateFromProps={initialState} reducer={dataReducer}>
      <Assignment12 />
      Hello
    </StoreProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
