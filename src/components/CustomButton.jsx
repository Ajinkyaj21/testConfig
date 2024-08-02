import { Button} from "antd";

export const CustomButton = ({ children, onClick = () => {}, disabled = false, style = {}, type, modaltarget, databsdismiss, active = true }) => {
  return (
    <Button onClick={onClick} disabled={disabled}  type={type} data-bs-target={modaltarget ? modaltarget : ""} data-bs-toggle={modaltarget ? "modal" : "none"} data-bs-dismiss={databsdismiss ? databsdismiss : "none"}>
    {children}
    </Button>
  )
}
