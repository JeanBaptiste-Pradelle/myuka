import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Energie({ data }) {
  if (data) {
    const energyKcal = data.product.nutriments['energy-kcal'];
    return (
      <div>
        <h3 className="mx-auto my-4 p-1 fs-2 fw-bold">Energie (en Kcal)</h3>
        <div className="position-relative">
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '16%' }}
              aria-valuenow="160"
              aria-valuemin="0"
              aria-valuemax="1000"
              aria-label="barre1"
            />
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: '20%' }}
              aria-valuenow="200"
              aria-valuemin="0"
              aria-valuemax="1000"
              aria-label="barre2"
            />
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: '20%' }}
              aria-valuenow="200"
              aria-valuemin="0"
              aria-valuemax="1000"
              aria-label="barre3"
            />
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: '44%' }}
              aria-valuenow="440"
              aria-valuemin="0"
              aria-valuemax="1000"
              aria-label="barre4"
            />
          </div>
          <div className="d-flex w-100" style={{ position: 'relative', top: '10px' }}>
            <div style={{ position: 'absolute', left: '15%' }}>160</div>
            <div style={{ position: 'absolute', left: '35%' }}>360</div>
            <div style={{ position: 'absolute', left: '55%' }}>560</div>
          </div>
          {energyKcal < 160 && (
            <div style={{ position: 'absolute', left: '4%', top: '-25px' }}>
              <i className="fas fa-caret-down fa-2x"></i>
            </div>
          )}
           {energyKcal >= 160 && energyKcal < 360 && (
            <div style={{ position: 'absolute', left: '25%', top: '-25px' }}>
              <i className="fas fa-caret-down fa-2x"></i>
            </div>
          )}
            {energyKcal >= 360 && energyKcal < 560 && (
            <div style={{ position: 'absolute', left: '45%', top: '-25px' }}>
              <i className="fas fa-caret-down fa-2x"></i>
            </div>
          )}
               {energyKcal >= 560 &&  (
            <div style={{ position: 'absolute', left: '75%', top: '-25px' }}>
              <i className="fas fa-caret-down fa-2x"></i>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Energie;