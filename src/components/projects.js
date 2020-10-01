import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import Buddy from '../assets/images/runbuddy.jpg';
import Trakster from '../assets/images/trakster.png';
import Covie from '../assets/images/covie.png';
import Tech from '../assets/images/tech.jpg';
import Note from '../assets/images/note.jpg';
import Read from '../assets/images/read.jpg';
import { CardImg } from 'reactstrap';
  
class Projects extends Component {
    constructor(props) {
    super(props);
    this.state = { activeTab: 0};
    }

toggleCategories() {
if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">

                {/* project 1 Run Buddy */}
     
    <Card shadow={5} style={{minWidth: '550', margin: 'auto'}}>
        <CardTitle style={{color:  '#05668dff'}} >Run Buddy</CardTitle>
        <CardImg src={Buddy} style={{color: '#f0f8ff', height: '175px' }}  />
         <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/natka58/run-buddy">GitHub</Button>
              <Button colored href="https://natka58.github.io/run-buddy/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#05668dff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>    
          </div>  
    
    
        )
    } else if(this.state.activeTab === 1) {
        return (
            <div className="projects-grid">
       
  {/* project 2 Trakster */}

    <Card shadow={5} style={{minWidth: '550', margin: 'auto'}}>
        <CardTitle style={{color: ' #05668dff'}} >Trakster</CardTitle>
        <CardImg src={Trakster} style={{color: '#f0f8ff', height: '175px' }}  />
         <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/pv95335/trakster">GitHub</Button>
              <Button colored href="https://project-trakster.herokuapp.com/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: ' #05668dff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        )
    } else if(this.state.activeTab === 2) {
        return (
            <div className="projects-grid">  
 {/* project 3 Covie Search */}
         
 <Card shadow={5} style={{minWidth: '550', margin: 'auto'}}>
        <CardTitle style={{color: ' #05668dff'}} >Covie Search</CardTitle>
        <CardImg src={Covie} style={{color: '#f0f8ff', height: '175px' }}  />
         <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/jaaybe/covidsearch">GitHub</Button>
              <Button colored href="https://jaaybe.github.io/covidsearch/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: ' #05668dff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
            </div>
        )
    } else if(this.state.activeTab === 3) {
        return (
            <div className="projects-grid">  
{/* project 4 Tech Blog */}
          
<Card shadow={5} style={{minWidth: '550', margin: 'auto'}}>
        <CardTitle style={{color: ' #05668dff'}} >Tech Blog</CardTitle>
        <CardImg src={Tech} style={{color: '#f0f8ff', height: '175px' }}  />
         <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/natka58/Tech-Blog">GitHub</Button>
              <Button colored href="https://vast-tor-45679.herokuapp.com/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#05668dff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
            </div>
        )
    } else if(this.state.activeTab === 4) {
        return (
            <div className="projects-grid">  
 {/* project 5 Note Taker */}

 <Card shadow={5} style={{minWidth: '550', margin: 'auto'}}>
        <CardTitle style={{color: ' #05668dff'}} >Note Taker</CardTitle>
        <CardImg src={Note} style={{color: '#f0f8ff', height: '175px' }}  />
         <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/natka58/note-taker">GitHub</Button>
              <Button colored href="https://floating-gorge-69732.herokuapp.com">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#05668dff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
            </div> 
        )
    } else if(this.state.activeTab === 5) {
        return (
            <div className="projects-grid">  

          {/* project 6 Read ME */}

          <Card shadow={5} style={{minWidth: '550', margin: 'auto'}}>
        <CardTitle style={{color: '#05668dff'}} >ReadMe Generator</CardTitle>
        <CardImg src={Read} style={{color: '#f0f8ff', height: '175px' }}  />
         <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/natka58/note-taker">GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#05668dff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
            </div> 
        )
    }
}

    render() {
      return(
<div className="category-tabs">
 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
    <Tab>HTML/CSS</Tab> 
    <Tab>Full-Stack</Tab>
    <Tab>Third Party API's</Tab>
    <Tab>MVC</Tab>
    <Tab>Express.js</Tab>
    <Tab>Node.js</Tab>
     </Tabs>

     
         <Grid>
             <Cell col={12}>
<div className="content">{this.toggleCategories()}</ div>
             </Cell>
         </Grid>
       
   
</div>
        )
    }
}


export default Projects;