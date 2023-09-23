import { MouseEventHandler } from 'react';
import styles from './thermostatStepButton.module.css';

interface Props { symbol: string, onClick: MouseEventHandler<HTMLDivElement> }

function ThermostatStepButton({ symbol, onClick }: Props) {
    return (<div
        onClick={onClick}
        className={styles.controlButton} id="black-border" style={{ border: "5px solid rgba(48,48,48,1)", borderRadius: '50%', cursor: 'pointer', userSelect:'none' }}>
        <div id="orange-border" style={{ border: "5px solid rgba(255,128,0,1)", borderRadius: '50%' }}>
            <div style={
                {
                    fontSize: 32,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(255,164,32)',
                    padding: 22,
                    borderRadius: '50%',
                    color: 'white',
                    fontWeight: '600',
                    width: 32,
                    height: 32,
                    boxShadow: '0 6px 6px 8px rgba(255,128,0,0.2)'
                }}>
                {symbol}
            </div>
        </div>

    </div>)
}

export default ThermostatStepButton;