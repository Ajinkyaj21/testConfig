import { EllipsisOutlined } from "@ant-design/icons";
import { Input, InputNumber } from "antd";
import { CustomButton } from "./CustomButton";

const CustomInput = ({ placeholder = 'Type here', size = "large", name = "name", label = "label", showLabel = true, readonly = false, value = "", style = {}, onChange = () => {}, type = "", mandatory = false, modalDataTarget, button = false}) => {
    
    return (
        <div  style={style.containerStyle}>
            {showLabel && <p >{label}<span style={{color: "red"}}>{mandatory ? " *" : ""}</span></p>}
            {(() => {
                switch (type) {
                case 'password': return <Input.Password placeholder={placeholder} size={size} name={name} value={value}  onChange={onChange} readOnly={readonly} />;
                case 'number': return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <InputNumber placeholder={placeholder} size={size}
                        name={name} value={value}
                        onChange={onChange}
                        controls={false}
                        disabled={!readonly}
                        type="number"
                    />
                    {button && <div style={{marginLeft: '10px'}}>
                        <CustomButton modaltarget={modalDataTarget} ><EllipsisOutlined style={{fontSize: '20px'}} /></CustomButton>
                    </div>}
                </div>;
                default: return <Input placeholder={placeholder} size={size} name={name} value={value} onChange={onChange} readOnly={readonly} />;
                }
            })()}
        </div>
    );
};

export default CustomInput;