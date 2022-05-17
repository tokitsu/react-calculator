export const calculate = (button: string, state: State) => {
  return state;
};

export type State = {
  // 今表示している内容
  currnet: string;
  // 計算に使う数値
  operand: number;
  // +かー
  operator: string | null;
  // クリアすべきか
  isNextClear: boolean;
};
