import { type IconType } from 'react-icons';
import { type FC } from "react";
export type ToolbarButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  icon: IconType;
  label: string;
  id?: string;
  dataTip: string;
};

export const ToolbarButton: FC<ToolbarButtonProps> = ({ onClick, disabled, icon: IconType, label, id, dataTip }: ToolbarButtonProps) => (
  <div className="tooltip tooltip-bottom" data-tip={dataTip}>
    <button
      id={id}
      type="button"
      className="btn btn-ghost btn-sm btn-square"
      onClick={onClick}
      disabled={disabled}
    >
      <IconType className="w-5 h-5" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </button>
  </div>
);
