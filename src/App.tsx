import pb from "./lib/pocketbase.js";

import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

export default function App() {

  console.log(pb.authStore.isValid)
  
  

  return (
    <div className="App">
      <Header />
      <Body />
      <Auth/>
    </div>
  );
}
