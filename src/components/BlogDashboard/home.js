import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore/lite';
import { collection } from 'firebase/firestore/lite';
const Home = () => {

    const form = useRef();
    const submitBlogItem =  (e)=>{
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        // const url = form.current[2]?.value;
        const image = form.current[2]?.files[0]; // Use files[0] to get the selected file

        const storageRef =  ref(storage, `blog/ ${image.name}`);
         uploadBytes(storageRef,image).then(
            (snapshot)   => { 
                   getDownloadURL(snapshot.ref).then((downloadUrl)=>{
                    saveBlogItem({
                        name,
                        description,
                        // url,
                        image:downloadUrl
                    })
                },
                    (error)=>{
                        alert(error)
                        saveBlogItem({
                            name,
                            description,
                            // url,
                            image:null
                        })
                })
            }, (error)=>{
                alert(error)
                saveBlogItem({
                    name,
                    description,
                    // url,
                    image:null
                })
            }
        )
    }   
    const saveBlogItem = async (blogItem)=> {
        console.log(blogItem)
        try {
            await addDoc(collection(db, 'blog'), blogItem);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
            alert('failed to add blog item', +error);
            
        }
    }
    return (
        <div  className="dashboard" >
            <form ref ={form} onSubmit={submitBlogItem}>
                <p> <input type="text" placeholder="Name"/></p>
                <p> <textarea placeholder="Description"/></p>
                {/* <p> <input type="text" placeholder="Url"/></p> */}
                <p> <input type="file" placeholder="Image"/></p>
                <button type="submit"> Submit</button>
                <button onClick={()=> auth.signOut()}> Signout</button>


            </form>
        </div>
    )
}
export default Home;