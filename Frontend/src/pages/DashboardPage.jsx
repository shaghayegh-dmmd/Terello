import MainHeader from "../components/Header/MainHeader";
import Clockicon from "@mui/icons-material/AccessTime";
import Viewrecently from "../components/Section/ViewRecently";

function DashboardPage(){
    return(<>
    <MainHeader/>
    <div className="flex justify-center items-center w-full">
        <div className=" flex items-start justify-center w-4/6 bg-white h-full p-5 m-4">
            <div className="w-5/6 h-48 border border-silver rounded-md p-5">
                <div className="flex flex-row items-center">
                    <Clockicon className="text-silverbold"/>
                    <h2 className="text-silverbold p-2">Recently viewed</h2>
                </div>
                <div className="flex flex-wrap mt-3">
                    <Viewrecently/>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default DashboardPage;