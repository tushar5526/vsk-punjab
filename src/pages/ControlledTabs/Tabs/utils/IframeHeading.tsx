interface Props { label: string, greenVariant?: boolean }


const IframeHeading = ({ label, greenVariant }: Props) => {
    return (
        <div className={`${greenVariant ? "iframeHeader2" : "iframeHeader"} mb`}>
            <p>{label}</p>
        </div>
    )
}
export default IframeHeading