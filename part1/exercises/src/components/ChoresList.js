import classes from './ChoresList.module.css';
export default function ChoresList () {
   return (<div>
      <h3 className = {classes.choresHeading}>Chores List</h3>
   <p className = {classes.choresText}>What are you, a cop?</p>
   </div>);
}