import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList"> Opening hours
                    <li className="fListItem">Mon-Fri: 8:00 am - 5:30 pm</li>
                    <li className="fListItem">Sat: 8:00 am - 4:00 pm</li>                   
                </ul>                      
                <ul className="fList"> International University
                    <li className="fListItem">Home</li>
                    <li className="fListItem">Schools/Department</li>
                    <li className="fListItem">Blackboard</li>
                    <li className="fListItem">Edusoftweb</li>
                </ul>
                <ul className="fList"> Contact
                    <li className="fListItem">Phone: 08 3724 4270 - 3241</li>
                    <li className="fListItem">Email: library@hcmiu.edu.vn</li>
                    <li className="fListItem">Ward 6, Linh Trung, Thu Duc, HCMC</li>
                </ul>
                <ul className="fList"> Student
                    <li className="fListItem">Name: Đỗ Đông Quân</li>
                    <li className="fListItem">ID: ITITIU19043</li>
                    <li className="fListItem">Phone: 0985230227</li>
                    <li className="fListItem">Email: quan05022001@gmail.com</li>
                </ul>          
            </div>   
            <div className="fText">A web-based Digital Library for Finding Similar Image using Neural Network</div>
        </div>
    )
}

export default Footer