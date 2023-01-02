import { Button } from "antd";
import { useCallback, useMemo } from "react";
import { CloseOutlined } from "@ant-design/icons";




export const ClearFilter = () => {
    const onClearFilter = () => window.location.reload()
    return (
        <Button
            className="WebHeader2__SelectContainer--select2"
            icon={<CloseOutlined />}
            type="default"
            danger
            onClick={onClearFilter}
        >
            Clear Filters
        </Button>
    )
}

