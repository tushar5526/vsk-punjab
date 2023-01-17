import Filters from '../Filters/Filters'
import { FC, useEffect, useState } from 'react';
import Screen1 from '../Screen1';
import Screen2 from '../Screen2';
import Screen3 from '../Screen3/Index';
import Screen4 from '../Screen4';
import CombinedHeader from '../../../components/layouts/CombinedHeader';
import "./index.css"
import { connect } from 'react-redux';
import { Button, Input, notification } from 'antd';
import CombinedFooter from '../../../components/CombinedFooter/CombinedFooter';
import { setDuationForTooglePoc } from '../../../redux/Slider/action';

interface Props {
    duration: any,
    setNewDuration: any
}
const TooglePoc: FC<Props> = ({ duration, setNewDuration }) => {
    const [toogle, setToogle] = useState<any>(0)
    const [durationValue, setDurationValue] = useState<any>("")
    const [playPause, setPlayPause] = useState<boolean>(false)

    const handlePlayPauseChange = () => {
        setPlayPause(!playPause);
        console.log(playPause, "playpause")
    }

    const _toogleCheck = {
        screen1: toogle === 0,
        screen2: toogle === 1,
        screen3: toogle === 2,
        screen4: toogle === 3,
    }

    useEffect(() => {
        if (playPause) {

        } else {
            const toogleInterval = setInterval(() => {
                setToogle((prev: any) => {
                    if (prev === 3) return 0
                    else return prev + 1
                })
            }, duration)
            return () => clearInterval(toogleInterval)
        }
    }, [duration, playPause])

    return (
        <>
            <CombinedHeader />
            <div className='Autoplay__Container'>
                <Filters />
                <div className="Autoplay__ContainerInput">
                    <Input placeholder='Enter Duration in Seconds' value={durationValue} onChange={(e) => setDurationValue(e.target.value)} />
                    <Button
                        type='primary'
                        onClick={() => {
                            setNewDuration(durationValue * 1000)
                            notification.info({
                                placement: "bottomRight",
                                message: "New Duration Applied"
                            })
                            setDurationValue("")
                        }}>
                        Add
                    </Button>
                    <Button
                        onClick={handlePlayPauseChange}
                        type='primary'
                    >
                        {playPause ? "Play" : "Pause"}
                    </Button>
                </div>
            </div>
            <div style={{ display: _toogleCheck.screen1 ? "block" : "none" }} >
                <Screen1 withFilter={false} />
            </div>
            <div style={{ display: _toogleCheck.screen2 ? "block" : "none" }} >
                <Screen2 />
            </div>
            <div style={{ display: _toogleCheck.screen3 ? "block" : "none" }} >
                <Screen3 widthFooter={false} />
            </div>
            <div style={{ display: _toogleCheck.screen4 ? "block" : "none" }}>
                <Screen4 widthFooter={false} />
            </div>
            <CombinedFooter />
        </>
    )
}
const mapStateToProps = ({ slider: { duration } }: any) => ({
    duration
})

const mapDispatchToProps = (dispatch: any) => ({
    setNewDuration: (e: any) => dispatch(setDuationForTooglePoc(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(TooglePoc)