import './style.scss';
import MasterCard from '@/assets/images/mastercard_logo.svg';
import Logo from '@/assets/images/logo.svg';
import Chip from '@/assets/images/chip.svg';
import { useState } from 'react';

export const Card = () => {
  const [visible, setVisible] = useState(true);
  const [rotate, setRotate] = useState(true);

  const toggleVisible = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const toggleRotation = () => {
    setRotate(!rotate);
  };

  return (
    <div className={`card ${rotate ? '' : 'rotate'}`} onClick={toggleRotation}>
      <div className="card__inner">
        {rotate ? (
          <div className="card__front">
            <div className="info">
              <div className="balance">
                <h2 className="balance__text">Current Balance</h2>
                <h1 className="balance__title">$5,750,20</h1>
              </div>
              <div className="logo">
                <MasterCard />
              </div>
            </div>
            <div className="requisites">
              <p
                onClick={(e) => toggleVisible(e)}
                className={`requisites__number ${
                  visible ? '' : 'gradient-blur'
                }`}
              >
                5282 3456 7890 1289
              </p>
              <p
                onClick={(e) => toggleVisible(e)}
                className={`requisites__date ${visible ? '' : 'gradient-blur'}`}
              >
                09/25
              </p>
            </div>
          </div>
        ) : (
          <div className="card__back">
            <div className="logo">
              <Logo />
            </div>
            <div className="data">
              <div className="data__date">
                <p className="data__date-text">Date</p>
                <p
                  onClick={(e) => toggleVisible(e)}
                  className={`data__date-value ${
                    visible ? '' : 'gradient-blur'
                  }`}
                >
                  09/25
                </p>
              </div>
              <div className="data__cvv">
                <p className="data__cvv-text">CVV</p>
                <p
                  onClick={(e) => toggleVisible(e)}
                  className={`data__cvv-value ${
                    visible ? '' : 'gradient-blur'
                  }`}
                >
                  1289
                </p>
              </div>
            </div>
            <div className="chip">
              <Chip />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
