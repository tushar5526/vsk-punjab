import download_image from "../../../assets/download.svg"
import "./Download.css"

interface Props {
    medium?: boolean
    large?: boolean
}
const Download = ({ medium, large }: Props) => {
    return (
        <div className='CutomIcon'>
            <img className={`CostomIcon__Image ${large ? "CostomIcon__Image--large" : medium ? "CostomIcon__Image--medium" : "CostomIcon__Image--small"}`} src={download_image} alt="download" />
        </div>
    )
}

export default Download