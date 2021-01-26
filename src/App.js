import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignInSide from "./src/Login/SignInSide"
import SignUp from "./src/Register/SignUp"
import Blog from "./src/BlogPage/Blog"




const App = () => {
    return (
        <div>
         <SignInSide />
         <SignUp />
         <Blog />
         
        </div>
    )
}
export default App;