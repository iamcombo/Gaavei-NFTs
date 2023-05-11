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
}

export interface IStake {
  modal: IToggle
}