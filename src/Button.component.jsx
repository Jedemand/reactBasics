import { withRouter } from "react-router";

const Button = (props) => {
    console.group('Button Component props', props)
    return ( 
        <button onClick={() => props.history.push("/")}>
            Back to Home Page
        </button>
     );
}
 
export default withRouter(Button); 