import React from 'react'

const ContactInfo = () => (
    <>
        <p>Phone: <span itemProp="telephone">(02) 6572 6600</span><br/>
            <a itemProp="email" href="mailto:singleton@acc.edu.au">singleton@acc.edu.au</a><br/>
            <a href="https://www.google.com.au/maps/place/23+Maitland+Rd,+Singleton+NSW+2330/@-32.5718648,151.1786855,15z/data=!4m2!3m1!1s0x6b0cb02dd08f29eb:0x63380353f830befe?hl=en"
               target="_blank">
                    <span itemProp="address" itemScope="" itemType="//schema.org/PostalAddress">
                        <span itemProp="streetAddress">23 Maitland Road </span>,
                        <span itemProp="addressLocality">Singleton </span>
                        <span itemProp="addressRegion">NSW</span>
                    </span>
            </a>
        </p>
    </>
)

export default ContactInfo
