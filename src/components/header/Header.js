import {Bitmap, Menu, Shape,User,Heart,Notific } from "../../assets/imeges";
import stayle from "./header.module.css"

function  Header() {

return <div className={stayle.items}>
    <div className={stayle.search}>
        <img className={stayle.bitmap} src={Bitmap} alt="logo"/>
        <Menu title={''} className={stayle.menu}/>
        <input className={stayle.put} type="text" placeholder="Search by name and by category..."/>
        <button className={stayle.btn}>Search</button>
    </div>
    <div className={stayle.user}>
        <User title={''} />
        Sign in</div>
    <div className={stayle.user}>
        <Notific title={''}/>
        Notification</div>
    <div  className={stayle.user}>
        <Heart title={''}/>
        Favorite</div>
    <div className={stayle.user}>
        <Shape title={''} />
        My cart</div>

</div>
}
export default Header