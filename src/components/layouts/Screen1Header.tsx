import { FC } from "react";
import { Col, Image, Row } from 'antd';
import "./index.less";
import bharatSarkar from "../../assets/pjb/Header/highres/bharat-sarkar.png"
import { NavLink } from 'react-router-dom';
import "./index.css"


const Screen1Header: FC = () => {
    return (
        <div key={+new Date()} className="dashboard-header">
            <div className="combinedHeader">
                <div className='combinedHeader__img'>
                    <img src={bharatSarkar} alt="bharatSarkar" />
                </div>
                <div className='combinedHeader__title'>
                    <div
                        className="header_text_1"
                    >
                        ਪੰਜਾਬ ਵਿਦਿਆ ਸਮੀਕਸ਼ਾ ਕੇਂਦਰ ਏਕੀਕ੍ਰਿਤ ਡੈਸ਼ਬੋਰਡ
                    </div>
                    <div
                        className="header_text_2"
                    >
                        ਸਕੂਲ ਸਿੱਖਿਆ ਵਿਭਾਗ, ਪੰਜਾਬ
                    </div>
                </div>
            </div>


        </div>
    );
};




export default Screen1Header;
