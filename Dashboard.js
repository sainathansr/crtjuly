import Admindashboard from "./Admindashboard";
import Userdashboard from "./Userdashboard";

function Dashboard(props) {
    const { userRole } = props;
    switch(userRole){
        case 'admin':
            return <Admindashboard/>;
        case 'user':
            return <Userdashboard/>;
        default:
            return <div>Error:Invalid user Role</div>;

    }
}

export default Dashboard;