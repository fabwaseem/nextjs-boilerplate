import { IconSvgProps } from "@/types";

export const ArrowUpRight: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  strokeWidth = 2,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    width={size || width}
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      d="M14.1654 5.83398L5.83203 14.1673"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66797 5.83398H14.168V13.334"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Facebook: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M7.5 10V14H10.5V21H14.5V14H17.5L18.5 10H14.5V8C14.5 7.73478 14.6054 7.48043 14.7929 7.29289C14.9804 7.10536 15.2348 7 15.5 7H18.5V3H15.5C14.1739 3 12.9021 3.52678 11.9645 4.46447C11.0268 5.40215 10.5 6.67392 10.5 8V10H7.5Z"
      fill="#111111"
    />
  </svg>
);
export const LinkedIn: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="24" height="24" />
    <path
      d="M4.5 6C4.5 5.46957 4.71071 4.96086 5.08579 4.58579C5.46086 4.21071 5.96957 4 6.5 4H18.5C19.0304 4 19.5391 4.21071 19.9142 4.58579C20.2893 4.96086 20.5 5.46957 20.5 6V18C20.5 18.5304 20.2893 19.0391 19.9142 19.4142C19.5391 19.7893 19.0304 20 18.5 20H6.5C5.96957 20 5.46086 19.7893 5.08579 19.4142C4.71071 19.0391 4.5 18.5304 4.5 18V6Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11V16"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 8V8.01"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 16V11"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 16V13C16.5 12.4696 16.2893 11.9609 15.9142 11.5858C15.5391 11.2107 15.0304 11 14.5 11C13.9696 11 13.4609 11.2107 13.0858 11.5858C12.7107 11.9609 12.5 12.4696 12.5 13"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Instagram: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="24" height="24" />
    <path
      d="M4.5 8C4.5 6.93913 4.92143 5.92172 5.67157 5.17157C6.42172 4.42143 7.43913 4 8.5 4H16.5C17.5609 4 18.5783 4.42143 19.3284 5.17157C20.0786 5.92172 20.5 6.93913 20.5 8V16C20.5 17.0609 20.0786 18.0783 19.3284 18.8284C18.5783 19.5786 17.5609 20 16.5 20H8.5C7.43913 20 6.42172 19.5786 5.67157 18.8284C4.92143 18.0783 4.5 17.0609 4.5 16V8Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12C9.5 12.7956 9.81607 13.5587 10.3787 14.1213C10.9413 14.6839 11.7044 15 12.5 15C13.2956 15 14.0587 14.6839 14.6213 14.1213C15.1839 13.5587 15.5 12.7956 15.5 12C15.5 11.2044 15.1839 10.4413 14.6213 9.87868C14.0587 9.31607 13.2956 9 12.5 9C11.7044 9 10.9413 9.31607 10.3787 9.87868C9.81607 10.4413 9.5 11.2044 9.5 12Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 7.5V7.51"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Youtube: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="24" height="24" />
    <path
      d="M3.5 9C3.5 7.93913 3.92143 6.92172 4.67157 6.17157C5.42172 5.42143 6.43913 5 7.5 5H17.5C18.5609 5 19.5783 5.42143 20.3284 6.17157C21.0786 6.92172 21.5 7.93913 21.5 9V15C21.5 16.0609 21.0786 17.0783 20.3284 17.8284C19.5783 18.5786 18.5609 19 17.5 19H7.5C6.43913 19 5.42172 18.5786 4.67157 17.8284C3.92143 17.0783 3.5 16.0609 3.5 15V9Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 9.8831C10.5 9.49445 10.924 9.25439 11.2572 9.45435L14.7854 11.5713C15.1091 11.7655 15.1091 12.2345 14.7854 12.4287L11.2572 14.5457C10.924 14.7456 10.5 14.5056 10.5 14.1169V9.8831Z"
      fill="currentColor"
    />
  </svg>
);
export const User: React.FC<IconSvgProps> = ({
  size = 20,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    width={size || width}
    viewBox="0 0 74 88"
    {...props}
  >
    <path
      d="M8.42494 59.0133C10.303 55.8892 11.242 54.3272 12.4908 53.1485C13.9629 51.7592 15.7504 50.7481 17.6996 50.2022C19.3532 49.7391 21.1758 49.7391 24.8209 49.7391H49.1791C52.8242 49.7391 54.6468 49.7391 56.3004 50.2022C58.2496 50.7481 60.0371 51.7592 61.5092 53.1485C62.7581 54.3272 63.6971 55.8892 65.5751 59.0133C70.8362 67.7654 73.4668 72.1414 73.3989 75.7362C73.3191 79.9545 71.1169 83.848 67.5426 86.0897C64.4966 88 59.3907 88 49.1791 88H24.8209C14.6093 88 9.50344 88 6.45745 86.0897C2.88316 83.848 0.680858 79.9545 0.60113 75.7362C0.533186 72.1414 3.16377 67.7654 8.42494 59.0133Z"
      fill="currentColor"
    />
    <path
      d="M21.6667 15.3043C21.6667 6.85199 28.1082 0 37 0C45.8918 0 52.3333 6.85199 52.3333 15.3043C52.3333 23.7567 45.8918 30.6087 37 30.6087C28.1082 30.6087 21.6667 23.7567 21.6667 15.3043Z"
      fill="currentColor"
    />
  </svg>
);