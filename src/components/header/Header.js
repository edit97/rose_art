import {Bitmap, Combined, Shape,User } from "../../assets/imeges";

function  Header() {

return <div>
    <img src={Bitmap} alt="logo"/>
    <img src={Combined} alt="logo"/>
    <img src={Shape} alt=""/>
    {/*<input type="text" placeholder={search}/>*/}
    {/*<img src={User} alt=""/>*/}
    <User title={''}/>
</div>
}
export default Header