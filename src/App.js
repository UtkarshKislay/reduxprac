import react from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";

import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer/>
      {/* <ItemContainer cake={1} />
      <ItemContainer  />
       <HooksCakeContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
