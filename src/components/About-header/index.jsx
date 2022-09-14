import React from 'react';
import Split from '../Split';

const AboutHeader = () => {
  return (
    <header className='pages-header bg-img valign parallaxie'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='sec-head custom-font text-center'>
              <Split>
                <h3 className='wow words chars splitting' data-splitting>
                  About us
                </h3>
              </Split>
              <span className='tbg'>About us</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
