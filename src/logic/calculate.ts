export const calculate = (button: string, state: State): State => {
  function operate(state: State): number {
    const current = parseFloat(state.current);
    if (state.operator === "+") {
      return state.operand + current;
    }
    if (state.operator === "-") {
      return state.operand - current;
    }
    return current;
  }

  function isNumerButton(button: string) {
    return (
      button === "0" ||
      button === "1" ||
      button === "2" ||
      button === "3" ||
      button === "4" ||
      button === "5" ||
      button === "6" ||
      button === "7" ||
      button === "8" ||
      button === "9"
    );
  }

  function handleNumberButton(button: string, state: State): State {
    if (state.isNextClear) {
      return {
        current: button,
        operand: state.operand,
        operator: state.operator,
        isNextClear: true
      };
    }
    if (state.current === "0") {
      return {
        current: button,
        operand: state.operand,
        operator: state.operator,
        isNextClear: false
      };
    }
    return {
      current: state.current + button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    };
  }

  if (isNumerButton(button)) {
    return handleNumberButton(button, state);
  }

  function isOperatorButton(button: string) {
    return button === "+" || button === "-";
  }
  function handleOperatorButton(button: string, state: State): State {
    if (state.operator === null) {
      return {
        current: state.current,
        operand: parseFloat(state.current),
        operator: button,
        isNextClear: true
      };
    }
    const nextValue = operate(state);
    return {
      current: `${nextValue}`,
      operand: nextValue,
      operator: button,
      isNextClear: true
    };
  }

  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }

  function isDeleteButton(button: string) {
    return button === "D";
  }

  function handleDeleteButton(button: string, state: State): State {
    if (state.current.length === 1) {
      return {
        current: "0",
        operand: state.operand,
        operator: state.operator,
        isNextClear: false
      };
    }
    return {
      current: state.current.substring(0, state.current.length - 1),
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    };
  }

  if (isDeleteButton(button)) {
    return handleDeleteButton(button, state);
  }

  function isAllClearButton() {
    return button === "AC";
  }

  function handleClearButton(): State {
    return {
      current: "0",
      operand: 0,
      operator: null,
      isNextClear: false
    };
  }

  if (isAllClearButton(button)) {
    return handleClearButton(button, state);
  }

  function isEqualButton(button: string) {
    return button === "=";
  }
  function handleEquelButton(button: string, state: State): State {
    if (state.operator === null) {
      return state;
    }
    const nextValue = operate(state);
    return {
      current: `${nextValue}`,
      operand: 0,
      operator: null,
      isNextClear: true
    };
  }

  if (isEqualButton(button)) {
    return handleEquelButton(button, state);
  }
};

export type State = {
  // 今表示している内容
  current: string;
  // 計算に使う数値
  operand: number;
  // +かー
  operator: string | null;
  // クリアすべきか
  isNextClear: boolean;
};
