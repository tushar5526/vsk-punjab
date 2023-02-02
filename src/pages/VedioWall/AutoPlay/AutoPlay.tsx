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
import timer from "../../../assets/pjb/SectionHeader/timer.png"
import { millisToMinutesAndSeconds } from '../utils';

interface Props {
    duration: any,
    setNewDuration: any
    durationParsed: any
}
const AutoPlay: FC<Props> = ({ duration, setNewDuration, durationParsed }) => {
    const [toogle, setToogle] = useState<any>(0)
    const [durationValue, setDurationValue] = useState<any>("")
    const [playPause, setPlayPause] = useState<boolean>(false)

    const handlePlayPauseChange = () => {
        setPlayPause(!playPause);
    }

    const _toogleCheck = {
        screen1: toogle === 0,
        screen2: toogle === 1,
        screen3: toogle === 2,
        screen4: toogle === 3,
    }
    const toogleScreenAction = {
        PREV: "PREV",
        NEXT: "NEXT",
    }
    const handleToggleScreen = (action?: string) => {
        if (action === toogleScreenAction.NEXT) {
            setToogle((prev: any) => (prev === 3) ? 0 : (prev + 1))
        } else if (action === toogleScreenAction.PREV) {
            setToogle((prev: any) => (prev === 0) ? 3 : (prev - 1))
        } else setToogle((prev: any) => (prev === 3) ? 0 : (prev + 1))
    }

    useEffect(() => {
        if (playPause) {
            const toogleInterval = setInterval(handleToggleScreen, duration)
            return () => clearInterval(toogleInterval)
        }
    }, [duration, playPause])

    return (
        <>
            <CombinedHeader />
            <div className='Autoplay__Container'>
                <Filters />
                <div className="Autoplay__ContainerInput">
                    <Button type='primary'
                        onClick={() => handleToggleScreen(toogleScreenAction.PREV)}>
                        Prev
                    </Button>
                    <Button type='primary'
                        onClick={() => handleToggleScreen(toogleScreenAction.NEXT)}>
                        Next
                    </Button>
                    <Input placeholder='Enter Duration in Seconds' value={durationValue} onChange={(e) => setDurationValue(e.target.value)} />
                    <Button
                        type='primary'
                        onClick={() => {
                            setNewDuration(durationValue * 1000)
                            notification.info({
                                placement: "bottomRight",
                                message: "New Duration Applied"
                            })
                            setPlayPause(true)
                            setDurationValue("")
                        }}>
                        Add
                    </Button>
                    <Button
                        onClick={handlePlayPauseChange}
                        type='primary'
                    >
                        {playPause ? "Pause" : "Play"}
                    </Button>
                    <div className="Autoplay_timerContainer">
                        <img src={timer} alt="timer" />
                    </div>
                    {durationParsed !== 0 && (
                        <span>
                            {durationParsed < 60 ? durationParsed : millisToMinutesAndSeconds(duration)}{durationParsed < 60 ? "sec" : "min"}
                        </span>
                    )}
                </div>
            </div>
            <div style={{ display: _toogleCheck.screen1 ? "block" : "none" }} >
                <Screen1 forAutoPlay={true} withFilter={false} />
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
    duration,
    durationParsed: duration / 1000
})

const mapDispatchToProps = (dispatch: any) => ({
    setNewDuration: (e: any) => dispatch(setDuationForTooglePoc(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(AutoPlay)