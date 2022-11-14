interface HeaderProps {
    label: string
    className?: string
}
const HeaderItem = ({ label, className }: HeaderProps) => {
    return (
        <button className={`Mobile_HeaderButton ${className}`}>
            {label}
        </button>
    )
}

export default HeaderItem