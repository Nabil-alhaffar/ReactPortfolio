import './index.scss'
import Loader from 'react-loaders'
import Modal from 'react-modal';

import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { getDocs, collection } from 'firebase/firestore/lite'
import { db } from '../../firebase';

const Blog = ()=> {

    const [letterClass, setLetterClass]= useState('text-animate');
    const [blog, setBlog]= useState([])
 
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image URL

    const openModal = (imageUrl) => {
        setModalOpen(true);
        setSelectedImage(imageUrl); // Set the selected image URL when opening the modal
        console.log(modalOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null); // Clear the selected image URL when closing the modal
    };

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLetterClass('text-animate-hover');
        }, 3000);
        return ()=>{
            clearTimeout(timer);
        }
    });
    useEffect(()=>{
        getBlogItems();
    },[])
    const getBlogItems=  async() =>{
        const querySnapshot =  await getDocs(collection(db, 'blog'));
        console.log(querySnapshot);
        setBlog(querySnapshot.docs.map((doc)=>doc.data()))
    }
    console.log(blog);
    const renderBlog = (blog) => {
        return (
            <div className="images-container">
                {
                    blog.map((blogItem, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={blogItem.image}
                                className="blog-image"
                                alt="blog" />
                                <div className="content">
                                    <p className="title">{blogItem.name}</p>
                                    <h4 className="description">{blogItem.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => openModal(blogItem.image)}
                                    >Expand</button>
                                </div>
                              
                            </div>
                            
                        )
                    })
                }
            </div>
        );
    }
    return (
        <>
        <div className='container blog-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={"Photography Gallery".split("")}
                idx={15}

                />
            </h1>
            <div>
                {renderBlog(blog)}
            </div>
            
        </div>
        <Modal className="modal"
            isOpen={modalOpen}
            onRequestClose={closeModal}
                    >
         <div className="modal-content">
          <span className="close" onClick={closeModal} color='#ffd700'>&times;</span>
            <img src={selectedImage}  alt="Expanded Image" />
  </div>
</Modal>
        <Loader type= "pacman"/>
        </>
    );
}

export default Blog