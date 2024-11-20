import React from "react";

export function ContactInfo() {
    return (
        <section className="contact-info text-center py-5">
            <h2 className="fs-1 mb-4 text-uppercase fw-bold">Where To Find Us</h2>
            <address className="mb-3 text-info fw-bold">
            Kondapur,Sirikonda<br />
            Nizamabad, Telangana-503165
            </address>

            <div className="contact-details mb-5">
                <h5 className="fw-bold text-primary mb-2">Contact Us</h5>
                <p>
                    <i className="fas fa-phone-alt me-1"></i> +91 837323820
                </p>
                <p>
                    <i className="fas fa-envelope me-1"></i> Manoj@tastetable.com
                </p>
            </div>

            <div className="opening-hours">
                <h3 className="fw-bold">Opening Hours</h3>
                <p className="m-0">Mon - Fri: 12:00 - 22:00</p>
                <p>Sat - Sun: 4:00 - 22:00</p>
            </div>
        </section>
    );
}
