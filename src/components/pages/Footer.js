import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Подпишитесь на рассылку
                </p>
                <p className="footer-subscription-text">
                    И вы первыми узнаете о наших секретных акциях
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Введите ваш емейл' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Подписаться</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>О компании</h2>
                        <Link to='/about'>О нас</Link>
                        <Link to='/contacts'>Контакты</Link>
                        <Link to='/'>Отзывы о нас</Link>
                        <Link to='/'>Наши партнеры</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Туристам</h2>
                        <Link to='/'>Пользовательское соглашение</Link>
                        <Link to='/'>Правила покупки</Link>
                        <Link to='/'>Туры в рассрочку</Link>
                        <Link to='/'>Страхование</Link>
                    </div>
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Мы в социальных сетях</h2>
                        <a href='https://www.instagram.com/ekbtours/' target="_blank">Instagram</a>
                        <a href='https://vk.com/ivangelista' target="_blank">Vkontakte</a>
                        {/* <Link to='/'>Vkontakte</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div> */}
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Ivangelista
                        </Link>
                    </div>
                    <small className='website-rights'>Ivangelista © 2021</small>
                    <div className="social-icons">
                        <a href='https://vk.com/ivangelista' target='_blank' aria-label='Vkontakte' className="social-icon-link vk">
                            <i class="fab fa-vk"></i>
                        </a>
                        <a href='https://www.instagram.com/ekbtours/' target='_blank' aria-label='Instagram' className="social-icon-link instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
