import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/Item';
import './index.css';


//MAKE IMAGES SMALLER. LIKE AVATAR SMALL
//MAKE IT LOOK MORE LIKE A TODO LIST
//CURRENTLY LOOKS LIKE BLOG POSTS


const App = () => {
  return(
    <div className="size">
      
      <div className="top">
        <h1 className="appName">Stephen's To do List</h1>
        <h4>Uncompleted Items</h4>
        <div className="textinput">
          <form className="ui form">
            <input type="text" placeholder="Add a Todo Item"></input>
            <span className="button ui addBtn">Add Item</span>
          </form>
        </div>
        
      </div>

      <div>
        <ul>
          <Item
            title={"Grocery Shop"}
            image={"https://images.unsplash.com/photo-1464374288807-174911d4adb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
            description={'This week I need to buy milk, eggs, sandwich ingredients, and a rotisserie chicken'}
            category={'Errand'}
          />
          <Item title={"Take a shower"}
          image={'https://images.unsplash.com/photo-1516147303597-2445c99ee744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
          description={'stay clean'}
          category={'health'}
          />
          <Item 
            title={'See the dentist'}
            image={'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
            description={'get cavity filled'}
            category={'health'}
          />
          <Item 
            title={'Go to work'}
            image={'https://images.unsplash.com/photo-1518081461904-9d8f136351c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
            description={'uber to work. beat city traffic. arrive 15min earlier than usual to unlock'}
            category={'work'}    
          />
          <Item 
            title={'Go to the gym'}
            image={'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
            description={'hit biceps and back today'}
            category={'health'}        
          />
        </ul>
      </div>
    </div>
    
        
   
  );
}


ReactDOM.render(<App />, document.querySelector('#root'));


