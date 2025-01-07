import React from "react";
interface Props {
  toggleEnabled: string;
  toggleDisabled: string;
  isToggled: boolean;
  toggleEffect: () => void;
}
const SwitchToggle: React.FC<Props> = ({
  toggleEnabled,
  toggleDisabled,
  isToggled,
  toggleEffect,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label style={{ marginRight: "10px" }}>
        {isToggled ? toggleEnabled : toggleDisabled}
      </label>
      <div
        onClick={toggleEffect}
        style={{
          width: "50px",
          height: "25px",
          borderRadius: "25px",
          background: isToggled ? "#4caf50" : "#ccc",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "23px",
            height: "23px",
            borderRadius: "50%",
            background: "#fff",
            position: "absolute",
            top: "1px",
            left: isToggled ? "24px" : "1px",
            transition: "left 0.3s",
          }}
        />
      </div>
    </div>
  );
};

export default SwitchToggle;
