import style from './filter.module.scss'
import { Collapse } from 'antd'
import {Arr} from "../../assets/imeges";

const { Panel } = Collapse;

function Filter() {
    return <div className={style.filter}>
        <div className={style.filterBlock}>
            <Collapse bordered={false}
                      defaultActiveKey={['0']}
                      expandIconPosition={'right'}
                      className={'collapseBlock'}
                      expandIcon={({ isActive }) =>
                          isActive ? <Arr/> :  <Arr className={style.rightArr}/>}
            >
                <Panel  header="Comapny" key="1" className={'collapseItme'} >

                </Panel>
                
                <Panel header="About us" key="2">

                </Panel>
                <Panel header="Category" key="3">
                    <div className={style.resComponents}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Blog</div>
                        <div>Apps</div>
                        <div>Sine in</div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    </div>

}export default Filter