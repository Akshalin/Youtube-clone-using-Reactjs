import './App.css';
import { IoMenu } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

function App() {
  return (
   <div className='container'>
      <div className='menu-section'>
        <h2><IoMenu/><span><IoLogoYoutube/></span>Youtube</h2>
        <ul>
          <li><MdHome/> Home</li>
          <li><SiYoutubeshorts/>Shorts</li>
          <li><MdOutlineSubscriptions/>Subscriptions</li>
        </ul>
        <hr/>
        <h4>You</h4>
        <ul>
          <li><MdHistory/>History</li>
          <li><MdOutlinePlaylistPlay/>Playlists</li>
          <li><FaRegCirclePlay/>Your videos</li>
          <li><MdOutlineWatchLater/>Watch later</li>
          <li><AiOutlineLike/>Liked videos</li>
        </ul>
        <hr/>
        <h4>Subscriptions</h4>
        <ul>
          <li>Madras Samayal</li>
          <li>Remya cooking</li>
          <li>Riya's cooking</li>
        </ul>
      </div>
      <div>
      <div className='display-playlist'>
        <div className='playlist'>
          <img src='food_1.png' alt=''></img>
          <h5>How to make vegetable salad with cumcumber without using fire?</h5>
          <p>Remya cooking</p>
          <p>3 hours ago</p>
        </div>
        <div className='playlist'>
          <img src='food_2.png' alt=''></img>
          <h5>Chicken Noodles which is very tasty!</h5>
          <p>Village cooking</p>
          <p>3 months ago</p>
        </div>
        <div className='playlist'>
          <img src='food_3.png' alt=''></img>
          <h5>Spinach which is the healthy food and tasty to eat rich in protein!</h5>
          <p>Riya's cooking</p>
          <p>1 year ago</p>
        </div>
        <div className='playlist'>
          <img src='food_4.png' alt=''></img>
          <h5>A new snack with bread and tomato.</h5>
          <p>Madaras Samayal</p>
          <p>8 year ago</p>
        </div>
      </div>
      <div className='display-playlist'>
        <div className='playlist'>
          <img src='food_13.png' alt=''></img>
          <h5>Healthy and tasty chicken sandwich rich taste!</h5>
          <p>Rena cooking channel</p>
          <p>2 days ago</p>
        </div>
        <div className='playlist'>
          <img src='food_14.png' alt=''></img>
          <h5>Easy to make bread sandwich with 3 ingredients?</h5>
          <p>Village cooking</p>
          <p>3 weeks ago</p>
        </div>
        <div className='playlist'>
          <img src='food_15.png' alt=''></img>
          <h5>How to make vegetable sandwich which is rich in cheese flavour?</h5>
          <p>Riya's cooking</p>
          <p>1 min ago</p>
        </div>
        <div className='playlist'>
          <img src='food_16.png' alt=''></img>
          <h5>One of the easy and simple snacks with bread.</h5>
          <p>Multi bowl channel</p>
          <p>5 months ago</p>
        </div>
      </div>
      </div>
   </div>
  );
}

export default App;
