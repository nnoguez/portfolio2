# Portfolio 2: Float App
I decided to work on a Self Care app named Float.

My application is meant to provide users with several activities that help relieve stress and calm them down.
---
## Home Screen
Upon entering the page, the user is brought to a home screen which displays the title of the application along with a short description. There is also text 'Hello!' containing an ```onPress()``` function that brings them over to the Form Screen.
---
## Form Screen
Once the user is brought to the Form Screen after pressing 'Hello!' in the last screen they're met with text calling for their name along with an ```Input``` that allows them to enter their name. The value of this ```Input``` is then stored through ```onChange={event => setName(event.target.value)``` which is then passed onto the Main Screen. Upon pressing 'Enter' the user is then redirected to the Main Screen.
---
## Main Screen
After the last ```onPress()``` the user was redirected to this Main Screen. At the top the title 'Welcome $name!' is displayed, showing the name value that the user entered on the Form Screen. A grid is then rendered containing the values of ```title: item.title, image: item.image, and name: name``` which pass in the title and image url from the array **data** and ensure that the stored $name is kept in the 'Welcome' title upon returning to the Main Screen. 

In the grid the following activities are passed in: 

### Breathe
The title, image, and name are passed in through ```route.params``` to display the activity's title, image, and maintain the name value upon returning to the Main Screen. ```Text``` is displayed to add in a short description of the activity and a button is presented below to start a 10 minute timer ```onPress()```. The functionality is currently under construction, but would show the minutes:seconds left before the user is met with a message stating that the Timer is up. Another button 'Home' is shown with an ```onPress()``` that navigates the user back to the Main Screen.

### Hydrate
The title, image, and name are passed in through ```route.params``` to display the activity's title, image, and maintain the name value upon returning to the Main Screen. ```Text``` is displayed to add in a short description of the activity. Through ```useState()``` I was able to display three buttons named 'Add', 'Remove, and 'Reset' which add onto and take away from the starting count of 0. Here the user is meant to add how many bottles of water they've had for the day with options to take away one if they added one too many or if they simply want to reset their input back to 0. By implementing an ```if... else``` statement under const **noNegatives** I was able to prevent the count from falling into the negatives. Another button 'Home' is shown with an ```onPress()``` that navigates the user back to the Main Screen.

### Motivate
The title, image, and name are passed in through ```route.params``` to display the activity's title, image, and maintain the name value upon returning to the Main Screen. ```Text``` is displayed to add in a short description of the activity. A single button named 'Generate' is here to generate a random quote found in array **quotes**. 'Generate' contains an ```onPress()``` that calls ```const onPress = () => setVisible(!visible)``` to set the visibility of 'Overlay.' The overlay contains **Text** that calls ```function generateQuotes()```. This function is what actually contains array **quotes**  and a ```Math.random``` command to send in a random quote. This quote is then displayed through 'Text'. Another button 'Home' is shown with an ```onPress()``` that navigates the user back to the Main Screen.

### Release
The title, image, and name are passed in through ```route.params``` to display the activity's title, image, and maintain the name value upon returning to the Main Screen. ```Text``` is displayed to add in a short description of the activity. Through ```useState()``` I was able to change the value of the 'TextInput' by setting the value to ```{val}``` and the ```onPress()``` of button 'Send Off' to ```setVal() => ""```. In doing so, the user's text input is erased upon pressing the button and they're alerted that their "Worries have drifted away." Another button 'Home' is shown with an ```onPress()``` that navigates the user back to the Main Screen.

---
## Profile Screen
The user can also access the Profile Screen through the bottom navigation and be directed to a screen  
which displays a welcome text with the user's name (sent in through the ```onPress()``` on Profile button in the Main Screen). An avatar is also shown with a call for the user to rate their mood on a scale of 1-5 stars with reviews ranging from Terrible, Bad, Okay, Good, and Great. Another button 'Home' is shown with an ```onPress()``` that navigates the user back to the Main Screen.

---
Link to GitHub pages site:

http://nnoguez.github.io/portfolio2
