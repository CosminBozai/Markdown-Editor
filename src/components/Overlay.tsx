import "../styles/Overlay.scss";

type Props = {
  onClose: () => void;
  children: JSX.Element;
};

function Overlay({ onClose, children }: Props) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      {children}
    </div>
  );
}

export default Overlay;
