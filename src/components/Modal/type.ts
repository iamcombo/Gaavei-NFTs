export interface IModal {
  modal: boolean;
  setModal: (v: boolean) => void;
}

export interface IConfirm extends IModal {
  callbackFn: () => void;
}