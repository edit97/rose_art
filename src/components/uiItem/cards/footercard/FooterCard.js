import style from './footerCard.module.scss'

function FooterCard() {
    return <div className={style.footerCard}>
        <div className={style.components}>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Apps</div>
            <div>Sine in</div>
        </div>
    </div>
}export default FooterCard