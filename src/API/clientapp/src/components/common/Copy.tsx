import React, { FC } from 'react';
import './Copy.css';

export const Copy: FC<{ onClickHandler: () => void }> = (props) => {
  return (
    <svg
      onClick={props.onClickHandler}
      className="svg-icon ml-3"
      viewBox="0 0 20 20"
    >
      <path
        fill="none"
        d="M18.783,13.198H15.73c-0.431,0-0.78-0.35-0.78-0.779c0-0.433,0.349-0.78,0.78-0.78h2.273V3.652H7.852v0.922
    c0,0.433-0.349,0.78-0.78,0.78c-0.431,0-0.78-0.347-0.78-0.78V2.872c0-0.43,0.349-0.78,0.78-0.78h11.711
    c0.431,0,0.78,0.35,0.78,0.78v9.546C19.562,12.848,19.214,13.198,18.783,13.198z"
      ></path>
      <path
        fill="none"
        d="M12.927,17.908H1.217c-0.431,0-0.78-0.351-0.78-0.78V7.581c0-0.43,0.349-0.78,0.78-0.78h11.709
    c0.431,0,0.78,0.35,0.78,0.78v9.546C13.706,17.557,13.357,17.908,12.927,17.908z M1.997,16.348h10.15V8.361H1.997V16.348z"
      ></path>
    </svg>
  );
};
