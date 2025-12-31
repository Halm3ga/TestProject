import Styles from './Header.module.css'

function Header(){
    return(
        <div className={Styles.hed}>
            <div><h3 className={Styles.hone}>My App</h3></div>
            <div>
                <ul className={Styles.nav}>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Pricing</li>
                </ul>
                </div>
        </div>
    );
}

export default Header