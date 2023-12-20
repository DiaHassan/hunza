import React from 'react'
import { useState, useEffect } from 'react';
import './blogpage.css'
import { getFirestore, doc, addDoc, collection, getDocs,updateDoc } from "firebase/firestore"; 
import { S1, S2 } from '../../assets'
import '../../firebase.config';
import Blogdisplay from '../blogdisplay/blogdisplay';
import CC from '../../assets/cc.svg'

const Blogpage = () => {
    // Handeling what to show
    const db = getFirestore();
    const [isPressed, setIsPressed] = useState(true);
    const [blogdb, setBlogDb] = useState([]);
    const [hhdb, setHhDb] = useState([]);
    const [viewBlog, setViewBlog] = useState(true);
    const [displayed, setDisplayed] = useState();

    const handleH3Click = () => {
      
      setTimeout(() => {
        setIsPressed(!isPressed);
      }, 100);
      };
    const wh3Class = isPressed ? 'menu-h3-underline' : 'menu-h3';
    const hh3Class = !isPressed ? 'menu-h3-underline' : 'menu-h3';





    const getFromFs = async () => {
      const returnListblg = []
      const returnListhh = []
      
      const blg = await getDocs(collection(db, "blog"));
      blg.forEach((doc) => {
        const tempList = []
        tempList.push(doc.data())
        returnListblg.push(tempList)
      });
      console.log(returnListblg)
      setBlogDb(returnListblg.reverse())
      const hh = await getDocs(collection(db, "hh"));
      hh.forEach((doc) => {
        const tempList = []
        tempList.push(doc.data())
        returnListhh.push(tempList)
      });
      console.log(returnListhh)
      setHhDb(returnListhh.reverse())
    }

    const isFormgot = async (ind) =>{
      console.log(viewBlog)
      if(isPressed){setDisplayed(blogdb[ind])}
      else{setDisplayed(hhdb[ind])}
      setViewBlog(false)
    }
    const ListGrid = ({ items }) => (
      <div className="list-grid">
        {items.map((item, index) => (
          // <ListItem key={index} item={item[0]} onClick={isFormgot(index)} />
          <div key={index} className="list-item" onClick={() => isFormgot(index)}>
            <div className='list-item-imgdiv'>
              <img src={item[0].imglnk} alt={item[0].title} />
            </div>
            <div className='list-item-iden'>
              <h3>{item[0].title}</h3>
              <p>{item[0].date}</p>
            </div>
          </div>        
        ))}
     </div>
    );
    const ListItem = ({ item }) => (
      <div className="list-item" >
        <div className='list-item-imgdiv'>
          <img src={item.imglnk} alt={item.title} />
        </div>
        <div className='list-item-iden'>
          <h3>{item.title}</h3>
          <p>{item.date}</p>
        </div>
      </div>
    );
      
      function rndr() {
        return <ListGrid items = {isPressed? blogdb:hhdb}/>
      }


      useEffect(() => {
          getFromFs()
          setViewBlog(true)
          console.log('This function runs once when the component is mounted.');
        
        return () => {
          console.log('Clean-up function runs when the component is unmounted.');
        };
      }, []);

  return (
    <div>
      {!viewBlog && 
      <div className='section-padding'>
          <div className='backbtn'>
            <img src={CC} alt='Close Blog' onClick={() => setViewBlog(true)}/>
          </div>
          <div className='blogv'>
          <img
            src={displayed[0].imglnk}
            alt="Banner"
            />
            <div className='inf'>
              <div className='td'>
                <h2>{displayed[0].title}</h2>
                <p>{displayed[0].date}</p>
              </div>
              <p className='text'>{displayed[0].text}</p>  
            </div>
          </div>
      </div>}
      {viewBlog && <div className='header section-padding blog'>
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
            {rndr()}
          </div>
      </div>}
    </div>
  )
}

export default Blogpage