import Styles from './Hero.module.css'


function Hero(){
    return(
        <>
            <div className={Styles.main}>
                <h1>Simple and affordable housing</h1>
                <p>Choose a plan that workds best for you and your team. Upgrade or downgrade anytime</p>
            </div>
        </>
    );
}

export default Hero