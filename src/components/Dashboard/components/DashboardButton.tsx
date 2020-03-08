import React, { FC } from 'react';
import classNames from 'classnames';

interface DashboardButtonProps {
  label: string;
  classes: any;
  className: string;
  icon: string;
  onClick: (event: any) => void;
  disabled?: boolean;
}

export const DashboardButton: FC<DashboardButtonProps> = ({
  label,
  classes,
  className,
  icon,
  onClick,
  disabled,
}) => {

  const handleClick = (e: any) => {
    navigator.vibrate(50);
    onClick(e);
  };

  return (
    <button
      className={classNames(
        classes.dashboardButton,
        className,
      )}
      aria-label={label}
      onClick={handleClick}
      disabled={Boolean(disabled)}
    >
      <i className={`gg-${icon}`}/>
      <span className={classes.dashbordButtonLabel}>{label}</span>
    </button>
  );
};

export default DashboardButton;