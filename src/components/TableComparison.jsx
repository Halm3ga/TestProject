import Styles from './TableComparison.module.css'

function TableComparison(){
    return(
        <div className='main'>
            <h1 className='hed'>Plan Comparison</h1>
            <table>
                <tr>
                    <th className={Styles.heading}>Feature</th>
                    <th className={Styles.heading}>Basic</th>
                    <th className={Styles.heading}>Standard</th>
                    <th className={Styles.heading}>Premium</th>
                </tr>
                <tr>
                    <td>Users</td>
                    <td>1 User</td>
                    <td>5 Users</td>
                    <td>10 Users</td>
                </tr>
                <tr>
                    <td>Storage</td>
                    <td>5 GB</td>
                    <td>50 GB</td>
                    <td>100 GB</td>
                </tr>
                <tr>
                    <td>Support</td>
                    <td>Email Support</td>
                    <td>Priority Email Support</td>
                    <td>24/7 Phone Support</td>
                </tr>
            </table>

        </div>
    );
}