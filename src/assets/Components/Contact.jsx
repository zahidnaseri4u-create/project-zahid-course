import "./Contact.css"

function Contact(){
    return (
        <div className="container-fluid Contact">
            <div className="container">
                <div className="contact-left">
                    <h3>Contact Us</h3>
                    <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea name="" id="" placeholder="Your message"></textarea>
                        <button>Send</button>
                    </form>
                </div>
                <div className="contact-right">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPacmjWL7nwok0QbOktbD-UU3Q7Nb6_pHbkA&s" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact;