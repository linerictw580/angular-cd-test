export interface IButton {
  label: string;
  color?: string;
  emitInZone: boolean;
  onClick: () => void;
}
