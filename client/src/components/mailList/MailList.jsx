import "./mailList.css";

const MailList = () => {
    return( 
        <div className="mail">
            <h1 className="mailTitle">Feedback Corner!</h1>
            <span className="mailDesc">Please let me know your feedback</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your comment"/>
                <button>Send comment</button>
            </div>
        </div>
    )
}

export default MailList;