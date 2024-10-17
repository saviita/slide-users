import { useState } from "react";
import Button from "./button/Button";
import User from "./user/User";
import { USERS } from "./constants/users";

const App = () => {
  const [position, setPosition] = useState(0)
  console.log(position)
  return (
    <>
    <User position={position} info={USERS}></User>
    <Button position={position} setPosition={setPosition}></Button>
    </>
  )
};
export default App;