import React from 'react'
import { useState } from 'react';
import './blogpage.css'
import axios from 'axios';
import { S1, S2 } from '../../assets'

const Blogpage = () => {
    // Handeling what to show
    const [isPressed, setIsPressed] = useState(true);

    const handleH3Click = () => {
      setTimeout(() => {
        setIsPressed(!isPressed);
      }, 100);
      };
    const wh3Class = isPressed ? 'menu-h3-underline' : 'menu-h3';
    const hh3Class = !isPressed ? 'menu-h3-underline' : 'menu-h3';

    //Listing items in the grid

    const ListItem = ({ item }) => (
      <div className="list-item">
        <div className='list-item-imgdiv'>
          <img src={item.image} alt={item.title} />
        </div>
        <div className='list-item-iden'>
          <h3>{item.title}</h3>
          <p>{item.date}</p>
        </div>
      </div>
    );
      
    const ListGrid = ({ items }) => (
      <div className="list-grid">
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    );

    // Temp
      const items = [
        {
          image: S1,
          title: 'This is quite a longer title lets see how it turns out',
          date: '2023-10-27',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          image: S1,
          title: 'Item 2',
          date: '2023-10-28',
          text: 'Pellentesque ac justo in ante eleifend blandit at nec ipsum.',
        },
        {
          image: S1,
          title: 'Item 3',
          date: '2023-10-29',
          text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
        {
            image: S1,
            title: 'Item 3',
            date: '2023-10-29',
            text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
        {
            image: S1,
            title: 'Item 3',
            date: '2023-10-29',
            text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
        {
            image: S1,
            title: 'Item 3',
            date: '2023-10-29',
            text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
      ];
      const items2 = [
        {
          image: S2,
          title: 'Item 1',
          date: '2023-10-27',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          image: S2,
          title: 'Item 2',
          date: '2023-10-28',
          text: 'Pellentesque ac justo in ante eleifend blandit at nec ipsum.',
        },
        {
          image: S2,
          title: 'Item 3',
          date: '2023-10-29',
          text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
        {
            image: S2,
            title: 'Item 3',
            date: '2023-10-29',
            text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
        {
            image: S2,
            title: 'Item 3',
            date: '2023-10-29',
            text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
        {
            image: S2,
            title: 'Item 3',
            date: '2023-10-29',
            text: 'Fusce tincidunt varius turpis eu condimentum.',
        },
      ];

  return (
    <div className='header section-padding blog'>
        <div className='menu'>
            <div className='menu-div'>
                <h3 className={wh3Class} onClick={isPressed? null :handleH3Click}>
                    What's Up at Hunza?
                </h3>
            </div>
            <div className='menu-div'>
                <h1 className='menu-h1'>/</h1>
            </div>
            <div className='menu-div'>
                <h3 className={hh3Class} onClick={isPressed? handleH3Click: null}>
                    Hunza Happenings
                </h3>
            </div>
        </div>
        <div className='blog-grid'>
          <ListGrid items = {isPressed? items:items2}/>
        </div>
    </div>
  )
}

export default Blogpage