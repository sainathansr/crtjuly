const UserLoggin=(props)=>{
    return <h1>Welcome User</h1>;
}
function GuestLoggin(props){
    return <h1>Please sign up.</h1>;
}
const SignUp=(props)=>{
    const flag=props.isLoggedIn;
    if (flag){
        return <userLoggin/>;
    }
    return <GuestLoggin/>;
}
export default SignUp;