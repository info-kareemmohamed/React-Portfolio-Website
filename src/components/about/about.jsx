import './about.css'
import Award from "../../img/award.png";

const About=()=>{
return(
   <div className="a">
   <div className='a-left'>
   <div className='a-card bg'></div>
   <div className='a-card'>
    <img src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" 
    className='a-img'
    alt="" />
   </div>


   </div>
   <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a mobile programmer, a graduate from ITI, and I have completed several development projects that reflect my programming expertise and skills in mobile application development. You can find some of these projects on my GitHub account where I showcase my programming creativity
        </p>
        <p className="a-desc">
        My experience as a mobile programmer at ITI expanded my understanding of application programming and efficient development. During this period, I completed several projects, which you can find on my GitHub account, showcasing my programming skills and development capabilities.
        </p>
        <div className="a-award">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBM2tDkg6FgCVSWhvRJqJQKb3dqYicWhCvy3kfrz7fKzGxU8s-PnrKKNca1Gd9QkDdmQ&usqp=CAU' alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Information Technology Institute (ITI) · Internship 2023</h4>
            <p className="a-award-desc">
            ITI Intensive Training Code Camp – Front End & Cross Platform Mobile Development
            </p>
          </div>
        </div>
      </div>
    </div>



)

}

export default About;