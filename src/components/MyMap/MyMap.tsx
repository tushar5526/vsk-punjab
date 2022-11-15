import { Component } from 'react'
import ReactMapGl from "react-map-gl"

interface State {
    viewport: any
}

interface Props {

}

export class MyMap extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            viewport: {
                latitude: 45.4211,
                longitude: -75.6903,
                height: "100%",
                width: "100%",
                zoom: 10,
            }
        }
    }
    render() {
        return (
            <div className='MyMap'>
                <ReactMapGl {...this.state.viewport} >
                    Markers Here
                </ReactMapGl>

            </div>
        )
    }
}

export default MyMap