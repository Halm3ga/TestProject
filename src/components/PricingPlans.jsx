import Styles from './PricingPlan.module.css'

function PricingPlans(){
    return(
        <>
            <div className={Styles.main}>
                <div className={Styles.hed}>
                    <h3>Pricing Plans</h3>
                </div>
                <div className={Styles.basic}>
                    <h4>Basic</h4>
                    <h2 className={Styles.price}>$4.99</h2>
                    <ul>
                        <li>1 User</li>
                        <li>5 Projects</li>
                        <li>Email support</li>
                    </ul>
                    <button className={Styles.butt}>Choose Plan</button>
                </div>
                <div className={Styles.std}>
                    <h4>Standard</h4>
                    <h2 className={Styles.price}>$9.99</h2>
                    <ul>
                        <li>5 Users</li>
                        <li>20 Projects</li>
                        <li>Priority Support</li>
                    </ul>
                    <button className={Styles.butt}>Choose Plan</button>
                </div>
                <div className={Styles.prem}>
                    <h4>Premium</h4>
                    <h2 className={Styles.price}>$14.99</h2>
                    <ul>
                        <li>Unlimted Users</li>
                        <li>Unlimted Projects</li>
                        <li>24x7 Support</li>
                    </ul>
                    <button className={Styles.butt}>Choose Plan</button>
                </div>
            </div>
        </>
    );
}

export default PricingPlans