import './style.css'
import thinking1 from '../../assets/images/thinking1.png'


const data = [
    {
        q: "WHO CAN ATTEND MATRIX?",
        a: "Absolutely open to all! No matter what course you're in, MATRIX would be worth attending!"
    },
    {
        q: "IS IEDC MEMBERSHIP MANDATORY?",
        a: "No. Any student can register and be a part of MATRIX"
    },
    {
        q: "DO YOU PROVIDE FOOD AND ACCOMMODATION FACILITY?",
        a: "Yes. We'll be arranging food and accommodation facilities for boys and girls in our respective hostels."
    },
    {
        q: "WHAT ARE THE PREREQUISITES FOR ATTENDING THE WORKSHOP?",
        a: "Students who have their own laptops are encouraged to bring it with them. If you don’t have one don’t worry, you will be provided with one. "
    },
]

function KnowMore() {
    return (
        <section className="faq" id="faq">

            <div className="faq-think">
                <b>FAQ</b>
                <p>Some of the frequently asked questions</p>
                <img src={thinking1} alt="Thinking" />
            </div>
            <div className="questions">
                {data.map(
                    (e, i) => {
                        return (<div className="wrap-collabsible">
                            <input id={`collapsible${i}`} className="toggle" type="checkbox" />
                            <label htmlFor={`collapsible${i}`} className="lbl-toggle">{e.q}</label>
                            <div className="collapsible-content">
                                <div className="content-inner">
                                    <p>
                                        {e.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                        );
                    }
                )
                }
            </div>

        </section>
    )
}

export default KnowMore