export function CheckboxIcon({ size = 24, color = "currentColor", ...props }) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 21H6C4.3 21 3 19.7 3 18V6C3 4.3 4.3 3 6 3H18C19.7 3 21 4.3 21 6V18C21 19.7 19.7 21 18 21ZM6 5C5.4 5 5 5.4 5 6V18C5 18.6 5.4 19 6 19H18C18.6 19 19 18.6 19 18V6C19 5.4 18.6 5 18 5H6Z" />
    </svg>
  );
}
