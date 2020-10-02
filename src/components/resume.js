import React, { Component } from 'react';
import pdf from '../assets/resume.docx';
import Avatar from '../assets/images/avatar.JPG';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
    render() {
      return(

<div>
    <Grid>
        <Cell col={4}>
            <div style={{textAlign: 'center'}}>
{/* image */}
<img className='avatar' src={Avatar} alt="avatar" style={{height: '200px'}} />
            </div>
            <h2 style={{paddingTop: '2em'}}>Natalia Teaca</h2>
            <h4 style={{color: '#43cea2'}}>Full Stack Web Developer</h4>
            <hr style={{bordertop: '15px solid #185a9', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '15px solid #185a9', width: '50%'}}/>
            <h5>Address</h5>
            <p>1234 Some Address Way</p>
            <p>Phone</p>
            <p>867.5309</p>
            <h5>Email</h5>
            <p>my@email.com</p>
            <h5>Web</h5>
            <p>mywebpage.com</p>
            <hr style={{bordertop: '15px solid #185a9', width: '50%'}}/>
            <a href={pdf}>Click here to download my full resume</a>
        
        </Cell>
        <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education  
            startYear={2000}
            endYear={2002}
            schoolName="My University"
            schoolDesctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

<Education  
            startYear={2002}
            endYear={2006}
            schoolName="My University 2"
            schoolDesctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

<hr style={{bordertop: '15px solid #185a9'}}/>
            <h2>Experience</h2>
            <Experience  
            startYear={2007}
            endYear={20013}
            jobName="First Job"
            jobDesctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
             <Experience  
            startYear={2011}
            endYear={20018}
            jobName="Second Job"
            jobDesctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr style={{bordertop: '15px solid #185a9'}}/>
            <h2>Skills</h2>
            <Skills
                skill="JavaScript"
                progress={40}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={60}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={32}
                      />
            </Cell>
            
    </Grid>
      

</div>
        )
    }
}


export default Resume;