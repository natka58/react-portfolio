import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../assets/images/avatar.JPG';
class Landing extends Component {
    render() {
      return(
<div style ={{width: '100%', margin: 'auto'}}>
  <Grid className="landing-grid">
      <Cell col={12}>
        
          {/* image */}
      <img className='avatar' src={Avatar} alt="avatar" />
    
     {/* banner */}
     <div className="banner-text">
         <h1>Full Stack Web Developer</h1>
  
    {/* line break */}
    <hr/>

{/* paragraph     */}
<p>HTML/CSS | Bootstrap | JavaScript | React | NodeJs | Express | MongoDb</p>
 
 <div className="social-links">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/nataliateaca/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/natka58" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

           {/* facebook */}
           <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
 </div>
 </div>
      </Cell>
 </Grid> 
</div>
        )
    }
}


export default Landing;