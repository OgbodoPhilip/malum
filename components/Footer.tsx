import {footerLinks} from "@/constants";

const Footer = () => {
    return (
        <footer className="p-8">
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966. M4 helps you get massive wins while you are waiting.

            
                </p>
                
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
