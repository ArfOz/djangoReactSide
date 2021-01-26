import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignInSide from "./src/Login/SignInSide"
import SignUp from "./src/Register/SignUp"
const App = () => {
    return (
        <div>
         <SignInSide />
         <SignUp />
         
        </div>
    )
}
export default App;