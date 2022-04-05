import style from './sort.module.scss'
import {Arr, Arrow, BurgerMenu, Flag, IconMenu, RuIcon, UsIcon} from "../../assets/imeges";
import {Collapse, Dropdown, Menu} from 'antd';
import { DownOutlined } from '@ant-design/icons';
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
                          // overlayStyle={"left: 300px; top: 682px"}
                >
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <div>
                            <span className={style.sortText}>Sort  </span>
                            <span className={style.sortBy}>By default</span><Arr/>
                        </div>
                    </a>
                </Dropdown>
            </div>
            <div className={style.sortMenu}>
                <BurgerMenu title={''}/>
                <IconMenu title={''}/>
            </div>
        </div>
        <div className={style.productsCard}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
}export default Sort