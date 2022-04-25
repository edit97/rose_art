import {
    Flag,
    Steps,
    Facebook,
    Instagram,
    Linkedin,
    Arrow,
    Arr,
    UsIcon,
    RuIcon,
    RoseLogo
} from "../../assets/imeges";
import style from "./footer.module.scss";
import { Collapse } from 'antd';
import { Menu, Dropdown } from 'antd';
import {NavLink} from "react-router-dom";
import FooterCard from "../uiItem/cards/footercard/FooterCard";
import {useState} from "react";


const { Panel } = Collapse;

function Footer(){
    const [email,setEmail]=useState({
        email:""
    })
    function saveState(event){
        setEmail({
            ...email,
        [event.target.name]:event.target.value
        })
    }
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <div className={style.menuItem}>
                   <RuIcon title={''}/> RU
                </div>
            </Menu.Item>
            <Menu.Item key="1">
                <div className={style.menuItem}>
                   <UsIcon title={''}/> EN
                </div>
            </Menu.Item>
        </Menu>
    )
    return <div className={style.footer}>
        <div className={style.aboutUs}>
            <div className={style.address}>
                <NavLink to={"/"}>
                    <RoseLogo title={''}/>
                </NavLink>
                <div className={style.place}>
                    <h1 className={style.title}>Address</h1>
                    <div className={style.txt}>Margaryan 1st alley 4/2 building Yerevan Armenia</div>
                    <div className={style.flag}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <div className={style.languageChange}><Flag title={''}/>
                                    <span>HY</span><Arrow/>
                                </div>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className={style.comapny}>
                <div>
                    <h1 className={style.title}>Comapny <div className={style.arr}><Arr title={''}/></div></h1>
                    <FooterCard/>
                </div>
                <div>
                    <h1 className={style.title}>About us</h1>
                    <FooterCard/>
                </div>
                <div>
                    <h1 className={style.title}>Category <div className={style.arr}><Arr title={''}/></div></h1>
                    <FooterCard/>
                </div>
            </div>
            <div className={style.responsiveBlock}>
            <div className={style.responsiveCollapse}>
                    <Collapse bordered={false}
                              defaultActiveKey={['0']}
                              expandIconPosition={'right'}
                              className={'collapseBlock'}
                              expandIcon={({ isActive }) =>
                                  isActive ? <Arr/> :  <Arr className={style.rightArr}/>}
                    >
                        <Panel  header="Company" key="1" className={'collapseItme'} >
                            <div>
                                <FooterCard/>
                            </div>
                        </Panel>
                        <Panel header="About us" key="2">
                            <div >
                                <FooterCard/>
                            </div>
                        </Panel>
                        <Panel header="Category" key="3">
                            <div >
                                <FooterCard/>
                            </div>
                        </Panel>
                    </Collapse>
            </div>
            <div className={style.subscribe}>
                <div className={style.follow}>
                    <h1 className={style.title}>Follow us</h1>
                    <div className={style.icons}>
                        <Instagram title={''}/>
                        <Linkedin title={''}/>
                       <span className={style.iconFacebook}><Facebook title={''}/></span>
                    </div>
                </div>
                <div className={style.sub}>
                    <h1 className={style.title}>Subscribe</h1>
                    <span className={style.someText}>Subscribe, find out about discounts, deals, new products.</span>
                </div>
                <div className={style.scribe}>
                <input className={style.input}
                       type="email"
                       value={email.email}
                       name={'email'}
                       onChange={(event) => {saveState(event)}}
                       placeholder={"E-mail address"}/>
                <button className={style.btn}>Subscribe</button>
                </div>
                <div className={style.responsiveSub}>
                    <div><RoseLogo title={''}/></div>
                    <h1 className={style.title}>Subscribe</h1>
                    <span>Subscribe, find out about discounts, deals, new products.</span>
                </div>
            </div>
            </div>
        </div>
        <div className={style.line}/>
        <div className={style.date}>
            <div className={style.text}>© Copyright 2021 SmartԼife . All Rights Reserved</div>
            <div><Steps title={''}/></div>
        </div>
    </div>
}export default Footer;