import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode;
    label: string;
    color: CSSProperties['fill'];
    handlePresetChange: (presetName: string) => void;
}

function ThermostatPresetCard({ children, label, color, handlePresetChange }: Props) {
    return <div onClick={() => handlePresetChange(label)} style={{ padding: '4px 4px 0', borderRadius: '4px', backgroundColor: '#333', cursor: 'pointer' }}>
        <div style={{ display: 'flex', justifyContent: 'center', fill: color }}>{children}</div>
        <div>{label}</div>
    </div>
}

export default ThermostatPresetCard;