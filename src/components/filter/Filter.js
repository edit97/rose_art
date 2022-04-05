import style from './filter.module.scss'
import { Collapse } from 'antd'
import {Arr,TopIcon} from "../../assets/imeges";
import { Checkbox, Row, Col } from 'antd';
import { Slider } from 'antd';

const { Panel } = Collapse;

function Filter() {

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    return <div className={style.filter}>
            <div className={style.title}>Filter</div>
            <Collapse bordered={false}
                      defaultActiveKey={['0']}
                      expandIconPosition={'right'}
                      className={'collapseFilter'}
                      expandIcon={({ isActive }) =>
                          isActive ? <TopIcon  title={''}/> :  <Arr title={''}/>}
            >
                <Panel  header="Price" key="1"  className={style.filterPanel}>
                    <Slider range={{ draggableTrack: true }}
                            marks={{
                                12000: `12000`,
                                30000: `30000`
                            }}
                            defaultValue={[16000, 25000]}
                            max={30000} min={12000}
                            tipFormatter={value => `Դ ${value}`}
                    />
                </Panel>
                <Panel  header="Color" key="2" className={style.filterPanel}>

                </Panel>
                <Panel header="Features" key="3"className={style.filterPanel}>

                </Panel>
                <Panel header="Accessory Type" key="4" className={style.filterPanel}>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                            <Col span={8}>
                                <Checkbox value="A">Power & Battery</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B">Installation & Mounts</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C">Wifi conectivity</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="D">Faceplates</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="E">Lock & Sirens</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="F">Singnage</Checkbox>
                            </Col>
                    </Checkbox.Group>
                </Panel>
            </Collapse>
            <div className={style.buttonBlock}>
                <button className={style.clearBtn}>ALL CLEAR</button>
            </div>
    </div>

}export default Filter