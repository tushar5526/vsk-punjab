import { FC } from "react";
import "./index.less";
import "./index.css"
import education from "../../assets/pjb/Header/highres/education-logo.png"

const Screen2Header: FC = () => {

    return (
        <div key={+new Date()} style={{
            padding: "20px 0"
        }} className="dashboard-header">
            <div className="screen2Header">
                <div className='combinedHeader__img'>
                    <img src={education} alt="education" />
                </div>
            </div>
        </div >
    );
};






export default Screen2Header;
