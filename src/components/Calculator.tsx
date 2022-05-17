import { ButtonPanel } from "./ButtonPanel";
import { Display } from "./Display";
import { calculate } from "../logic/calculate";

export const Calculator = () => {
  const buttonHandler = (code: string) => {
    calculate(code, state);
  };
  return (
    <div>
      <Display />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  );
};
