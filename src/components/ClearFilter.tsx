import { Button } from "antd";
import { useCallback, useMemo } from "react";
import { CloseOutlined } from "@ant-design/icons";


interface Props {
    handleClearFilter: any
}

export const ClearFilter = ({ handleClearFilter }: Props) => {
    return (
        < Button
            className="WebHeader2__SelectContainer--select2"
            icon={< CloseOutlined />}
            type="default"
            danger
            onClick={handleClearFilter}
        >
            Clear Filters
        </Button >
    )
}

