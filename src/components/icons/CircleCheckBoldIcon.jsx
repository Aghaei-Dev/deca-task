export function CircleCheckBoldIcon({
  size = 24,
  color = "currentColor",
  ...props
}) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM16.7 9.7L10.7 15.7C10.5 15.9 10.3 16 10 16C9.7 16 9.5 15.9 9.3 15.7L7.3 13.7C6.9 13.3 6.9 12.7 7.3 12.3C7.7 11.9 8.3 11.9 8.7 12.3L10 13.6L15.3 8.3C15.7 7.9 16.3 7.9 16.7 8.3C17.1 8.7 17.1 9.3 16.7 9.7Z" />
    </svg>
  );
}
