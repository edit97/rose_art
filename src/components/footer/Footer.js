import {Flag,Steps,Facebook,Instagram,Linkedin,Arrow,Bitmap,Arr} from "../../assets/imeges";
import style from "./footer.module.scss";
import { Collapse } from 'antd';
import { Menu, Dropdown } from 'antd';


const { Panel } = Collapse;


function Footer(){
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a target="_blank" rel="noopener noreferrer" >
                    RU
                </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer">
                   EN
                </a>
            </Menu.Item>
            <Menu.Divider />
        </Menu>
    )
    return <div className={style.footer}>
        <div className={style.aboutUs}>
            <div className={style.adress}>
              <img src={Bitmap} alt="logo"/>
                <div className={style.place}>
                    <h1 className={style.title}>Address</h1>
                    <div className={style.txt}>Margaryan 1st alley 4/2 building Yerevan Armenia</div>
                    <div className={style.flag}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <div className={style.languageChange}><Flag/>
                                    <span>HY</span><Arrow/>
                                </div>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className={style.comapny}>
                <div className={style.blok}>
                    <h1 className={style.title}>Comapny <div className={style.arr}><Arr/></div></h1>
                    <div className={style.responsivLine}></div>
                    <div className={style.components}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Blog</div>
                        <div>Apps</div>
                        <div>Sine in</div>
                    </div>
                </div>
                <div className={style.blok}>
                    <h1 className={style.title}>About us</h1>
                    <div className={style.responsivLine}></div>
                    <div className={style.components}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Blog</div>
                        <div>Apps</div>
                        <div>Sine in</div>
                    </div>
                </div>
                <div className={style.blok}>
                    <h1 className={style.title}>Category <div className={style.arr}><Arr/></div></h1>
                    <div className={style.components}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Blog</div>
                        <div>Apps</div>
                        <div>Sine in</div>
                     </div>
                </div>
            </div>
            <div className={style.responsivBlok}>
            <div className={style.responsivCollapse}>
                    <Collapse bordered={false} defaultActiveKey={['1']}
                              expandIconPosition={'right'} className={'collapseBlock'}
                    >
                        <Panel  header="Comapny" key="1" className={'collapseItme'}>
                            <div className={style.resComponents}>
                                <div>Home</div>
                                <div>About</div>
                                <div>Contact</div>
                                <div>Blog</div>
                                <div>Apps</div>
                                <div>Sine in</div>
                            </div>
                        </Panel>
                        <Panel header="About us" key="2">
                            <div className={style.resComponents}>
                                <div>Home</div>
                                <div>About</div>
                                <div>Contact</div>
                                <div>Blog</div>
                                <div>Apps</div>
                                <div>Sine in</div>
                            </div>
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
            <div className={style.subscribe}>
                <div className={style.responsivLine}></div>
                <div className={style.follow}>
                    <h1 className={style.title}>Follow us</h1>
                    <div className={style.icons}>
                        <Instagram title={''}/>
                        <Linkedin title={''}/>
                       <span className={style.iconFacebook}><Facebook title={''}/></span>
                    </div>
                </div>
                <div className={style.underLine}></div>
                <div className={style.sub}>
                    <h1 className={style.title}>Subscribe</h1>
                    <span>Subscribe, find out about discounts, deals, new products.</span>
                </div>
                <div className={style.scribe}>
                <input className={style.input} type="email" placeholder={"E-mail addres"}/>
                <button className={style.btn}>Subscribe</button>
                </div>
                <div className={style.responsivSub}>
                    <div className={style.logo}><img src={Bitmap} alt=""/></div>
                    <h1 className={style.title}>Subscribe</h1>
                    <span>Subscribe, find out about discounts, deals, new products.</span>
                </div>
            </div>
            </div>
        </div>
        <div className={style.line}></div>
        <div className={style.date}>
            <div className={style.text}>© Copyright 2021 SmartԼife . All Rights Reserved</div>
            <div className={style.iconComapny}><Steps title={''}/></div>
        </div>
    </div>
}export default Footer;