import { ReactNode } from "react";

interface alertProps {
    children : ReactNode;
}

const Alerts = ({children} :alertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      <p>{children}</p>
    </div>
  )
}

export default Alerts
