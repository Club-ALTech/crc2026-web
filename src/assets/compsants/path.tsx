import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

type LineHotspot = {
  id: string;
  title: string;
  top: string;
  left: string;
  width: string;
  angle?: number;
  details: string;
};

const Path = () => {
  const { i18n, t } = useTranslation();
  const [activeLineId, setActiveLineId] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const lineHotspots: LineHotspot[] = useMemo(
    () => [
      {
        id: 'line-1-0',
        title: t('path.lines.robot.title'),
        top: '44%',
        left: '30%',
        width: '2%',
        angle: 0,
        details: t('path.lines.robot.details'),
      },
      {
        id: 'line-1-1',
        title: t('path.lines.kiosque.title'),
        top: '35%',
        left: '37%',
        width: '2%',
        angle: 0,
        details: t('path.lines.kiosque.details'),
      },
      {
        id: 'line-1-2',
        title: t('path.lines.video.title'),
        top: '35%',
        left: '50%',
        width: '2%',
        angle: 0,
        details: t('path.lines.video.details'),
      },
      {
        id: 'line-1-3',
        title: t('path.lines.website.title'),
        top: '44%',
        left: '57%',
        width: '2%',
        angle: 0,
        details: t('path.lines.website.details'),
      },
      {
        id: 'line-2',
        title: t('path.lines.kickoff.title'),
        top: '60%',
        left: '43%',
        width: '2%',
        angle: 0,
        details: t('path.lines.kickoff.details'),
      },
      {
        id: 'line-3',
        title: t('path.lines.roles.title'),
        top: '70%',
        left: '43%',
        width: '2%',
        angle: 0,
        details: t('path.lines.roles.details'),
      },
      {
        id: 'line-4',
        title: t('path.lines.meeting1.title'),
        top: '85%',
        left: '43%',
        width: '2%',
        angle: 0,
        details: t('path.lines.meeting1.details'),
      },
    ],
    [i18n.language, t]
  );

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
            alt={t('path.imageAlt')}
            ref={imgRef}
            className="path-image"
          />
          <div className="line-overlay" aria-hidden="true">
            <svg className="connector-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Diagonal line from line-1-0 (30%, 44%) to line-2 (43%, 60%) */}
              <path d="M 30 44 L 43 60" className="connector-path" />
              {/* Diagonal line from line-1-1 (37%, 35%) to line-2 (43%, 60%) */}
              <path d="M 37 35 L 43 60" className="connector-path" />
              {/* Diagonal line from line-1-2 (50%, 35%) to line-2 (43%, 60%) */}
              <path d="M 50 35 L 43 60" className="connector-path" />
              {/* Diagonal line from line-1-3 (57%, 44%) to line-2 (43%, 60%) */}
              <path d="M 57 44 L 43 60" className="connector-path" />
              {/* Vertical line from line-2 (43%, 60%) to line-4 (43%, 85%) */}
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
                aria-label={t('path.aria.openLine', { title: line.title })}
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
              <p dangerouslySetInnerHTML={{ __html: activeLine.details }} />
            </div>
            <div className="modal-footer">
              <button className="btn-confirm" onClick={handleCloseModal}>{t('path.modal.close')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Path;