import { Button } from "antd";


interface Props {
    handleClearFilter: any
}

export const ClearFilter = ({ handleClearFilter }: Props) => {
    return (
        < Button
            className="WebHeader2__SelectContainer--select2 clearFilterButton"
            type="default"
            danger
            onClick={handleClearFilter}
        >
            Clear Filters
        </Button >
    )
}

