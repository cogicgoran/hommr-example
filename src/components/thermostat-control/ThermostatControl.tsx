import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import ThermostatStepButton from "./ThermostatStepButton";
import IconAuto from "../icons/IconAuto";
import IconFire from "../icons/IconFire";
import IconSnowflake from "../icons/IconSnowflake";
import { Select } from "@chakra-ui/react";
import ThermostatPresetCard from "./ThermostatPresetCard";

const exampleData = [
    {
        room: 'Living Room',
        temp: 21
    },
    {
        room: 'Bedroom',
        temp: 19
    }
]


function ThermostatControl() {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [roomName, setRoomName] = useState<string>();
    const [currentTemperature, setCurrentTemperature] = useState<number | null>(null);
    const [roomsData, setRoomsData] = useState<Array<{ room: string, temp: number }>>([]);
    const [thermostatMode, setThermostatMode] = useState<'auto' | 'cool' | 'heat' | null>(null);

    useEffect(() => {
        async function fetchTemperatureStats() {
            // fetchData
            setRoomsData(exampleData ?? []);
            setCurrentTemperature(exampleData[0]?.temp ?? null);
            setTemperature(exampleData[0]?.temp ?? null);
            setRoomName(exampleData[0]?.room ?? null);
        }
        fetchTemperatureStats()
    }, [])

    const handleThermostatIncrementChange: MouseEventHandler<HTMLDivElement> = function handleThermostatChange() {
        setTemperature((prevTemp) => prevTemp !== null ? prevTemp + 1 : prevTemp)
    }

    const handleThermostatDecrementChange: MouseEventHandler<HTMLDivElement> = function handleThermostatChange() {
        setTemperature((prevTemp) => prevTemp !== null ? prevTemp - 1 : prevTemp)
    }

    function handleRoomChange(event: ChangeEvent<HTMLSelectElement>) {
        const opt = roomsData.find((roomData) => roomData.room === event.currentTarget.value)
        if (!opt) return;

        setCurrentTemperature(opt.temp);
        setTemperature(opt.temp);
        setRoomName(opt.room);
    }

    function handlePresetSelect(presetName: string) {
        if (currentTemperature === null) return;
        switch (presetName) {
            case 'Auto':
                break;
            case 'Cool':
                setTemperature(currentTemperature - 2);
                break;
            case 'Heat':
                setTemperature(currentTemperature + 2);
                break;
            default:
                break;
        }
    }

    return <>
        <div style={{ width: '500px', padding: '4px', borderRadius: "8px", backgroundColor: '#444' }}>
            <h3 style={{ color: '#bbb', fontWeight: '600', fontSize: '14px' }}>THERMOSTAT</h3>
            <div style={{ display: 'flex', gap: '4px', color: 'white', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 22 }}>
                    <ThermostatStepButton symbol="-" onClick={handleThermostatDecrementChange} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: 96, marginBottom: '-24px' }}>
                            <span>{temperature}</span>&#8451;

                        </div>
                        <div >Current Temp: <span>{currentTemperature}</span>&#8451;</div>

                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 22 }}>
                    <ThermostatStepButton symbol="+" onClick={handleThermostatIncrementChange} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <div>
                    <Select value={roomName} onChange={handleRoomChange}>
                        {roomsData.map((roomData) => {
                            return <option value={roomData.room}>{roomData.room} {roomData.temp}&#8451;</option>
                        })}
                    </Select>
                </div>
                <div style={{ display: 'flex', color: 'white', gap: '2px' }}>
                    <ThermostatPresetCard label="Cool" color='white' handlePresetChange={handlePresetSelect}>
                        <IconSnowflake />
                    </ThermostatPresetCard>
                    <ThermostatPresetCard label="Heat" color='orangered' handlePresetChange={handlePresetSelect}>
                        <IconFire />
                    </ThermostatPresetCard>
                    <ThermostatPresetCard label="Auto" color='green' handlePresetChange={handlePresetSelect}>
                        <IconAuto />
                    </ThermostatPresetCard>
                </div>
            </div>
        </div>
    </>
}



export default ThermostatControl;