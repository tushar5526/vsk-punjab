interface Props { label: string, greenVariant?: boolean, small?: any }


const IframeHeading = ({ label, greenVariant, small = false }: Props) => {
    return (
        <div className={`${greenVariant ? "iframeHeader2" : "iframeHeader"} ${small ? "iframeHeader__Height" : "iframeHeader2__Height"} mb`}>
            <p>{label}</p>
        </div>
    )
}

export default IframeHeading