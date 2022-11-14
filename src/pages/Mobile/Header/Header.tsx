import "../index.css"
import HeaderItem from "./HeaderItem"
const Header = () => {

    const tabs = ["Assesment", "Attendance", "Review Meetings", "Visits"]
    return (
        <div className="HeaderMobile mb">
            {tabs.map((item: any, idx: number) => {
                if (idx === 0) {
                    return (
                        <HeaderItem className="Mobile_HeaderButton--active" label={item} />
                    )
                } else {
                    return (
                        <HeaderItem label={item} />
                    )
                }

            })}

        </div>
    )
}




export default Header