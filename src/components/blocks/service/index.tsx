import { FC } from 'react';
// -------- data -------- //
import data from '@/data/demo-27';

interface PricingProps {
  show?: boolean;
}

const Features: FC<PricingProps> = ({show = false}) => {
  return (
    <section className={`wrapper ${show ? 'bg-light' : null} `}>
      <div className={`container ${show ? 'py-12 py-md-12' : null} `}>
      <div className="row text-center">
            <div className="col-md-9 col-lg-9 col-xxl-9 col-xs-12 mx-auto">
              <h2 className="fs-15 text-uppercase text-muted mb-3">Prophetic Focus</h2>
              <h3 className="fs-26 ls-sm mb-9 px-xl-11">
              A wise man scaleth the city of the mighty, and casteth down the strength of the confidence thereof.
              </h3>
            </div>
          </div>

      </div>
    </section>
  );
};

export default Features;
