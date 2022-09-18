/* eslint-disable @next/next/no-img-element */
import React from 'react';
import featuresEffect from '../../common/featuresEffect';
import { thumparallaxDown } from '../../common/thumparallax';
import Split from '../Split';

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className='min-area sub-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='img'>
              <img
                className='thumparallax-down'
                src='/img/min-area.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-6 valign'>
            <div className='content'>
              <Split>
                <h4
                  className='wow custom-font words chars splitting'
                  data-splitting
                >
                  Technology and Digital Solutions
                </h4>
              </Split>

              <ul className='feat'>
                <li className='wow fadeInUp' data-wow-delay='.2s'>
                  <h6>
                    <span>1</span> IT Infrastructure and Security consulting
                  </h6>
                </li>
                <li className='wow fadeInUp' data-wow-delay='.4s'>
                  <h6>
                    <span>2</span> Web hosting
                  </h6>
                </li>
                <li className='wow fadeInUp' data-wow-delay='.6s'>
                  <h6>
                    <span>3</span> Web development
                  </h6>
                </li>
                <li className='wow fadeInUp' data-wow-delay='.6s'>
                  <h6>
                    <span>4</span> Customer Relationship Software (CRM)
                  </h6>
                </li>
                <li className='wow fadeInUp' data-wow-delay='.6s'>
                  <h6>
                    <span>5</span> Mobile Apps
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
