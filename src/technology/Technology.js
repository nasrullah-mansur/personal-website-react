import React from 'react';

import './technology.scss';
import technologyData from './technologyData';

function Technology() {
  return (
    <section className="technology-area section-padding">
        <div className="container">
            <div className="row align-items-center">
                {technologyData?.map((item, i) => {
                    return (
                        <div key={i} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <div className="single-tech">
                                <div className="tech-img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <span className="tech-name">{item.title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Technology;