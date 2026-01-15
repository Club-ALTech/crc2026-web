import { useEffect, useRef, useState } from 'react';

const Path = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDivisions, setSelectedDivisions] = useState<number[]>([]);
  const [isOpaqueHover, setIsOpaqueHover] = useState(false);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const divisions = [
    { id: 1, label: 'Division 1', color: '#FF6B6B' },
    { id: 2, label: 'Division 2', color: '#4ECDC4' },
    { id: 3, label: 'Division 3', color: '#45B7D1' },
    { id: 4, label: 'Division 4', color: '#FFA07A' },
  ];

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const drawToCanvas = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      canvasRef.current = canvas;
    };

    if (img.complete && img.naturalWidth) {
      drawToCanvas();
    } else {
      img.addEventListener('load', drawToCanvas);
    }

    return () => {
      img.removeEventListener('load', drawToCanvas);
    };
  }, []);

  const handleImageClick = () => {
    if (isOpaqueHover) {
      setShowModal(true);
    }
  };

  const handleMouseMove: React.MouseEventHandler<HTMLImageElement> = (e) => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) {
      setIsOpaqueHover(false);
      return;
    }
    const rect = img.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    if (relX < 0 || relY < 0 || relX > rect.width || relY > rect.height) {
      setIsOpaqueHover(false);
      return;
    }
    const sx = Math.floor((relX / rect.width) * canvas.width);
    const sy = Math.floor((relY / rect.height) * canvas.height);
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsOpaqueHover(false);
      return;
    }
    const data = ctx.getImageData(sx, sy, 1, 1).data;
    const alpha = data[3];
    setIsOpaqueHover(alpha > 10); // threshold to ignore near-transparent pixels
  };

  const handleMouseLeave = () => setIsOpaqueHover(false);

  const handleDivisionToggle = (id: number) => {
    setSelectedDivisions((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>  
      <div className="main-content">
        <div className="image-container">
          <img 
            src="src/assets/IMG_2037.png" 
            id="cheminement" 
            alt="pousse"
            ref={imgRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleImageClick}
            className={`glow-image ${isOpaqueHover ? 'glow-active' : ''}`}
          />
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Select Divisions</h2>
              <button className="close-btn" onClick={handleCloseModal}>✕</button>
            </div>
            
            <div className="divisions-grid">
              {divisions.map((division) => (
                <div
                  key={division.id}
                  className={`division-option ${selectedDivisions.includes(division.id) ? 'selected' : ''}`}
                  style={{
                    borderColor: division.color,
                    backgroundColor: selectedDivisions.includes(division.id) ? `${division.color}20` : 'transparent'
                  }}
                  onClick={() => handleDivisionToggle(division.id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedDivisions.includes(division.id)}
                    onChange={() => handleDivisionToggle(division.id)}
                  />
                  <label>{division.label}</label>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={handleCloseModal}>Cancel</button>
              <button className="btn-confirm" onClick={handleCloseModal}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Path;