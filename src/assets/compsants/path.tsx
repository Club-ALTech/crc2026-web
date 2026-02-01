import { useRef, useState } from 'react';

type LineHotspot = {
  id: string;
  title: string;
  top: string;
  left: string;
  width: string;
  angle?: number;
  details: string;
};

const lineHotspots: LineHotspot[] = [
  {
    id: 'line-1-0',
    title: 'Robot',
    top: '44%',
    left: '30%',
    width: '2%',
    angle: 0,
    details: 'Details for Robot.',
  },
  {
    id: 'line-1-1',
    title: 'Kiosk',
    top: '35%', 
    left: '37%',
    width: '2%',
    angle: 0,
    details: 'Details for Kiosk.',
  },
  {
    id: 'line-1-2',
    title: 'Vidéo',
    top: '35%',
    left: '50%',
    width: '2%',
    angle: 0,
    details: 'Details for Vidéo.',
  },
  {
    id: 'line-1-3',
    title: 'Site web ',
    top: '44%',
    left: '57%',
    width: '2%',
    angle: 0,
    details: 'Details for Site web .',
  },
  {
    id: 'line-2',
    title: 'Rencontre 1',
    top: '60%',
    left: '43%',
    width: '2%',
    angle: 0,
    details: 'Details for Rencontre 1.',
  },
  {
    id: 'line-3',
    title: 'Distibution des rôles',
    top: '70%',
    left: '43%',
    width: '2%',
    angle: 0,
    details: 'Details for Distibution des rôles.',
  },
  {
    id: 'line-4',
    title: 'Kikoff',
    top: '85%',
    left: '43%',
    width: '2%',
    angle: 0,
    details: 'Details for Kikoff.',
  }
];

const Path = () => {
  const [activeLineId, setActiveLineId] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleCloseModal = () => {
    setActiveLineId(null);
  };

  const activeLine = lineHotspots.find((line) => line.id === activeLineId) || null;

  return (
    <>  
      <div className="main-content">
        <div className="image-container">
          <img
            src="src/assets/Untitled9_20260130094710.png"
            id="cheminement"
            alt="pousse"
            ref={imgRef}
            className="path-image"
          />
          <div className="line-overlay" aria-hidden="true">
            <svg className="connector-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Line from line-1-0 (30%, 44%) to line-2 (43%, 60%) */}
              <path d="M 30 44 L 43 44 L 43 60" className="connector-path" />
              {/* Line from line-1-1 (37%, 35%) to line-2 (43%, 60%) */}
              <path d="M 37 35 L 43 35 L 43 60" className="connector-path" />
              {/* Line from line-1-2 (50%, 35%) to line-2 (43%, 60%) */}
              <path d="M 50 35 L 43 35 L 43 60" className="connector-path" />
              {/* Line from line-1-3 (57%, 44%) to line-2 (43%, 60%) */}
              <path d="M 57 44 L 43 44 L 43 60" className="connector-path" />
              {/* Line from line-2 (43%, 60%) to line-4 (43%, 85%) */}
              <path d="M 43 60 L 43 85" className="connector-path" />
            </svg>
            {lineHotspots.map((line) => (
              <button
                key={line.id}
                type="button"
                className="line-hotspot"
                style={{
                  top: line.top,
                  left: line.left,
                  width: line.width,
                  transform: `translate(-50%, -50%) rotate(${line.angle ?? 0}deg)`,
                }}
                onClick={() => setActiveLineId(line.id)}
                aria-label={`Open ${line.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {activeLine && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{activeLine.title}</h2>
              <button className="close-btn" onClick={handleCloseModal}>✕</button>
            </div>
            <div className="modal-body">
              <p>{activeLine.details}</p>
            </div>
            <div className="modal-footer">
              <button className="btn-confirm" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Path;