import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Популярные направления</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                        src='./images/cappadokia.jpg'
                        text='Турция'
                        info='Сиде, Кемер, Мармарис, Бодрум, Белек, Анталья'
                        price='от 20 128 руб./чел.'
                        label='Без визы'
                        path='/'/>
                        <CardItems
                        src='./images/egypt.jpg'
                        text='Египет'
                        info='Эль Гуна, Шарм-Эль-Шейх, Хургада, Марса Алам, Эль Кусейр, Макади, Дахаб'
                        price='от 30 094 руб./чел.'
                        label='Без визы'
                        path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                        src='./images/russia.jpg'
                        text='Россия'
                        info='Краснодарский край, Крым, Сибирь, Калининград, Санкт-Петербург, Москва'
                        price='от 10 187 руб./чел.'
                        label='Без визы'
                        path='/'
                        />
                        <CardItems
                        src='./images/greece.jpg'
                        text='Греция'
                        info='Афины, о. Корфу, о. Кос, о. Родос, о. Санторини'
                        price='от 55 120 руб./чел.'
                        label='Виза'
                        path='/'
                        />
                        <CardItems
                        src='./images/cypres.jpg'
                        text='Кипр'
                        info='Айя-Напа, Ларнака, Лимассол, Протарас, Пафос'
                        price='от 30 120 руб./чел.'
                        label='Adrenaline'
                        path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
