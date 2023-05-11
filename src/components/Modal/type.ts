export interface IModal {
  modal: boolean;
  setModal: (v: boolean) => void;
}

export interface IToggle {
  isOn: boolean
  toggle: () => void
  toggleOn: () => void
  toggleOff: () => void
}

export interface IConfirm extends IModal {
  callbackFn: () => void;
  status?: 'idle' | 'pending' | 'success' | 'error';
}

export interface IStake {
  modal: IToggle;
  operation: "Stake" | "Unstake"
}
