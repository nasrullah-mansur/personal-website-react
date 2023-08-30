import { footerData } from '@/data/footer';
import React, { Fragment } from 'react'

function Footer() {
  return (
    <section className="copy-right">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <p>{footerData?.copyrightText}</p>
                </div>
                <div className="col-lg-6">
                    <p className="text-start text-lg-end">
                    {footerData?.copyrightLink.map((item, i) => {
                        return (
                            <Fragment key={i}>
                                <a href={item.url}>{item.label}</a>
                                {i != footerData?.copyrightLink.length - 1 && <span>|</span>}
                            </Fragment>
                        );
                    })}
                         
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;