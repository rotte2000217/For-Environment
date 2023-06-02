import './index.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/Gallery2.png' 

const Gallery =() => {
const galleryLength=6;
const images=[];
for (let i=1; i<=galleryLength; i++){
images.push(require(`../../images/gallery/${i}.jpg`))
}
//console.log(images);

    return (
        <>
        <Header title="Our Gallery" image={HeaderImage} >
            Lets have a healthy world
        </Header>
        <section className="gallery" >
            <div className="container gallery_container" >
                {
                    images.map((image,index)=>{
                        return <article key={index}>
                            <img src={image} alt={`Gallery Image ${index+1}`} />
                        </article>
                    })
                }

            </div>
        </section>
        </>
    )

}

export default Gallery