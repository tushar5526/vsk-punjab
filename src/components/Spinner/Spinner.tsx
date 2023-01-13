import { Spin } from 'antd'
import "./Spinner.css"
import { FC } from 'react';

interface Props {
    big?: any
}
const Spinner: FC<Props> = ({ big }) => {
    return (
        <div className={`MapToolTipContainer__Spinner--${big ? "big" : "small"}`}>
            <Spin size="large" className="loader" />
        </div>
    )
}

export default Spinner