import React, { Component } from 'react';

class Resources extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Resources</h1>
                <ul className="list-unstyled">
                    <li>STD/HIV Prevention & Control/Loving Condoms & Candy Bags</li>
                    <li>Support for the Blind and Visually Impaired</li>
                    <li>Support for Pregnant teens with Toddlers</li>
                    <li>Homeless Support and Outreach Services</li>
                    <li>Anonymous and Confidential Free HIV Testing: 1 (408) 792-3720</li>
                </ul>

                <ul className="list-unstyled">
                    <li><span className="font-weight-bold">Homeless Hotline:</span></li>
                    <li><span className="font-weight-bold">Suicide Hotline: </span><a href="http://www.suicide.org/hotlines/california-suicide-hotlines.html" target="_blank" rel="noopener noreferrer" className="d-line">http://www.suicide.org/hotlines/california-suicide-hotlines.html</a></li>
                    <li><span className="font-weight-bold">Abuse: </span><a href="http://www.thehotline.org/" target="_blank" rel="noopener noreferrer" className="d-line">http://www.thehotline.org/</a></li>
                        <ul className="list-unstyled">
                        <li>Call the National Domestic Violence Hotline for support, resources and advice for safety: 1 (800) 799-SAFE (7233)</li>
                        <li></li>
                        </ul>
                    <li><span className="font-weight-bold">Women Rising Above Abuse (WRAA): </span><a href="http://womenrisingaboveabuse.org/" target="_blank" rel="noopener noreferrer" className="d-line">http://womenrisingaboveabuse.org/</a></li>
                </ul>
                <hr />
                <p className="h4">Santa Clara County Public Health Department <small class="text-muted">Crane Center</small></p>
                <iframe title="LCTW" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3647494125553!2d-121.91410528487653!3d37.33387254517634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb67b7e1fd15%3A0xbee30c589b7ba6e3!2sCrane+Center!5e0!3m2!1sen!2sus!4v1534203068830" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
                <ul className="list-unstyled">
                    <li>976 Lenzen Avenue</li>
                    <li>San Jose, CA 95126</li>
                    <li>Phone: 1 (408) 792-3720</li>
                    <li>Fax: 1 (408) 792-3721</li>
                    <li>Email: cranecenter@phd.sccgov.org</li>
                    <li>STD/HIV Prevention &amp; Control</li>
                </ul>
            </div>
        );
    }
}

export default Resources;