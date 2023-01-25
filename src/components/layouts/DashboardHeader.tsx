import { FC } from "react";
import { Button, Image } from 'antd';
import "./index.less";
import bharat_sarkar from "../../assets/pjb/Header/highres/bharat-sarkar.png"
import education from "../../assets/pjb/Header/highres/education-logo.png"
import RightLogo from "../../assets/Profile.svg";
import { useHistory } from 'react-router-dom';
import "./index.css"
import { logout } from '../../utils';
import ROUTE_CONST from '../../Routing/RouteConstants';
import { connect } from 'react-redux/es/exports';
import { toogleUserSession } from "../../redux/user/actions";

interface Props {
  user_in_session?: boolean
  _toogleUserSession?: any,
}
const DashboardHeader: FC<Props> = ({ user_in_session, _toogleUserSession }) => {
  const history = useHistory()
  const _logout = () => {
    logout()
    history.push(ROUTE_CONST.login)
    _toogleUserSession()
  }

  return (
    <div key={+new Date()} className="dashboard-header">

      <div className="combinedHeader">

        <div className="dashboardHeaderImageContainer">
          <div className='combinedHeader__img'>
            <img src={bharat_sarkar} alt="b" />
          </div>
          <div className='combinedHeader__img2'>
            <img className="combinedHeader__img2--dashboard" src={education} alt="education" />
          </div>
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

        <div className="logoutAvatarContainer">

          <div className='combinedHeader__img'>
            <img src={RightLogo} alt="b" />
          </div>
          {localStorage.getItem("user") && (
            <Button
              className="logout-btn"
              onClick={_logout}
            >
              <span>Log Out</span>
            </Button>
          )}
        </div>
      </div>




    </div>
  );
};



const mapStateToProps = ({ session: { user_in_session } }: any) => ({
  user_in_session
})

const mapDispatchToProps = (dispatch: any) => ({
  _toogleUserSession: () => dispatch(toogleUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
