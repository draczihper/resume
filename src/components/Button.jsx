 const Button = ({label, type = "button", onClick}) => {
  return <button type={type} onClick={onClick}>{label}</button>;
};

export default Button;