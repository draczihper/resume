 const Button = ({label, type = "button", onClick}) => {
  return <button type={type} onClick={onClick} className="bg-[#5B6E75] flex place-self-center m-3 p-2 rounded-md text-xl text-white ">{label}</button>;
};

export default Button;