import './index.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/polutedSea.jpg' // use a nother image 'clean sea' and do a transition
import StoryImage from '../../images/group.jpg'
import visionImage from '../../images/simpleLIfe.png'
import missionImage from '../../images/missionPic.png'


const About =() => {
    return (
        <>
        <Header title="About Us" image={HeaderImage} >
            Lets have a healthy world
        </Header>
        <section className="about_story">
            <div className="container about_story-container" >
            <div className="about_section-image">
<img src={StoryImage} alt="Our Story Image" />
</div>
<div className="about_section-content">
<h1>Our Story</h1>
<p>
    Our Organization was initiated in 2023.
</p>
<p>
    The strength in our organization is people. People united for a wholesome cause and collaborating in utmost discipline.
</p>
</div>
</div>
</section>



<section className="about_vision">
 <div className="container about_vision-container">
 
<div className="about_section-content">
<h1>Our Vision</h1>
<p>
    Our aim is to have a healthy environment and preseve nature in it's original pristine beauty.
</p>
<p>
    We believe that real peace and happliness comes through a simple life style. And real beauty and comfort can only be found in a clean natural environment. healty water, air, and food can only be obtained from nature itself. 
</p>
</div>


<div className="about_section-image">
<img src={visionImage} alt="Our Story Image" />
</div>



</div>
</section>


<section className="about_mission">
 <div className="container about_mission-container">
 <div className="about_section-image">
<img src={missionImage} alt="Our Story Image" />
</div>
 <div className="about_section-content">
<h1>Our Mission</h1>
<p>
    We believe that being closer to nature and by consuming in an environment friendly way, we can improve the quality of life.
</p>
<p>
    We achieve these objectives by conserving nature, promoting tree plantations, forrest conservation, recycling, minimal use of resources and saving resources for future generations.
</p>
</div>
</div>
</section>



        </>
    )

}

export default About