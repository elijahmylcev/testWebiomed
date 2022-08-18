import './MyButton.scss';

function MyButton({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default MyButton;
