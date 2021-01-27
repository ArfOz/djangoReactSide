import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignInSide from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Blog from "./pages/BlogPage/Blog"




const App = () => {
    return (
        <div>
         {/* <SignInSide /> */}
         <SignUp />
         {/* <Blog /> */}
         
        </div>
    )
}
export default App;