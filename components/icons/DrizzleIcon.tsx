import React from "react";

function DrizzleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
    >
      <g fill="#CF272D">
        <path d="M127.86 222.304c-52.005 0-94.164-42.159-94.164-94.163 0-52.005 42.159-94.163 94.164-94.163 52.004 0 94.162 42.158 94.162 94.163 0 52.004-42.158 94.163-94.162 94.163zm0-222.023C57.245.281 0 57.527 0 128.141 0 198.756 57.245 256 127.86 256c70.614 0 127.859-57.244 127.859-127.859 0-70.614-57.245-127.86-127.86-127.86z"></path>
        <path d="M133.116 96.297c0-14.682 11.903-26.585 26.586-26.585 14.683 0 26.585 11.903 26.585 26.585 0 14.684-11.902 26.586-26.585 26.586-14.683 0-26.586-11.902-26.586-26.586M133.116 159.983c0-14.682 11.903-26.586 26.586-26.586 14.683 0 26.585 11.904 26.585 26.586 0 14.683-11.902 26.586-26.585 26.586-14.683 0-26.586-11.903-26.586-26.586M69.431 159.983c0-14.682 11.904-26.586 26.586-26.586 14.683 0 26.586 11.904 26.586 26.586 0 14.683-11.903 26.586-26.586 26.586-14.682 0-26.586-11.903-26.586-26.586M69.431 96.298c0-14.683 11.904-26.585 26.586-26.585 14.683 0 26.586 11.902 26.586 26.585 0 14.684-11.903 26.586-26.586 26.586-14.682 0-26.586-11.902-26.586-26.586"></path>
      </g>
    </svg>
  );
}

export default DrizzleIcon;