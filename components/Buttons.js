const baseButton = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

const primaryStyle = {
  ...baseButton,
  backgroundColor: "#0070f3",
  color: "white",
};

export function PrimaryButton({ text }) {
  return (
    <button style={primaryStyle}>{text}</button>
  )
};

export function SecondaryButton({text}) {
  return (
    <button style={baseButton}>{text}</button>
  )
}