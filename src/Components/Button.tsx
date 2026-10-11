
interface buttonProps {
    buttonName : string;
    buttonType : string;
    onclick : () => void;
}

const Button = ({buttonName , buttonType , onclick} : buttonProps) => {
  return (
    <div>
      <button type="button" onClick={onclick} className={"btn btn-"+buttonType}>{buttonName}</button>
    </div>
  )
}

export default Button
