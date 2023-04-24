import "../styles/Overlay.scss";

type Props = {
  onClose: () => void;
};

function Overlay({ onClose }: Props) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <div className="overlay" onClick={handleOverlayClick}></div>;
}

export default Overlay;
