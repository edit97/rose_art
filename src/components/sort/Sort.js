import style from './sort.module.scss'
import {Arr, BurgerMenu, IconMenu,} from "../../assets/imeges";
import { Menu, Dropdown } from 'antd';
import ProductCard from "../uiItem/cards/productcard/ProductCard";



function Sort() {
    const menu = (
        <Menu>
            <Menu.Item key="0">
            <span>By default</span>
            </Menu.Item>
            <Menu.Item key="1">
            </Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    return <div className={style.sort}>
        <div className={style.sortGroup}>
            <div className={style.sort}>
                <Dropdown overlay={menu} trigger={['click']}
                          overlayClassName={'sortDropdown'}
                >
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <div className={style.dropdownText}>
                            <span className={style.sortText}>Sort  </span>
                            <span className={style.sortBy}>By default</span><Arr title={""}/>
                        </div>
                    </a>
                </Dropdown>
            </div>
            <div className={style.sortMenu}>
                <div className={style.burgerMenuIcon}><BurgerMenu title={''}/></div>
                <div className={style.menuIcon}><IconMenu title={''}/></div>
            </div>
        </div>
        <div className={style.productsCardBlock}>
            <div className={style.productCard}><ProductCard/></div>
            <div className={style.productCard}><ProductCard/></div>
            <div className={style.productCard}><ProductCard/></div>
            <div className={style.productCard}><ProductCard/></div>
            <div className={style.productCard}><ProductCard/></div>
            <div className={style.productCard}><ProductCard/></div>
            <div className={style.productCard}><ProductCard/></div>
            <div className={style.productCard}><ProductCard/></div>
        </div>
    </div>
}export default Sort