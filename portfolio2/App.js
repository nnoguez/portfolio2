import * as React from 'react';
// import { Component} from 'react';
import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image, FlatList, TouchableOpacity, ImageBackground, Button, Pressable, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Input, Card, Overlay, AirbnbRating, Avatar } from "react-native-elements";
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createBottomTabNavigator();

// Home Screen
function HomeScreen ( {navigation} ) {

  const image = {uri: 'https://www.linkpicture.com/q/homebg.jpg'};

  return (
    <View style={styles.home}>
      <ImageBackground source= {image} style={styles.image}>
        <Text style={styles.title}>F L O A T</Text>
        <Text style={styles.body}>Let your worries float away with the waves.</Text>
        <TouchableOpacity>
            <Text style={styles.falseButton} onPress={() => navigation.navigate('Form')}>
               Hello!
            </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

    // Form Screen
    function FormScreen ( {navigation} ) {
      const [name, setName] = useState('')
      const image = {uri: 'https://www.linkpicture.com/q/homebg.jpg'};

      return (
        <View style={styles.home}>
            <ImageBackground source= {image} style={styles.image}>
            <Text style={styles.body}> Before we begin. What's your name?</Text>
            <Input inputContainerStyle={{borderBottomWidth:0, alignItems: 'center'}} style={styles.input} 
              placeholder="Enter Name"
              // minLength={1}
              // errorMessage="Oops! that's not correct."
              // renderErrorMessage
              onChange={event => setName(event.target.value)}
            />
              <TouchableOpacity>
              <Text style={styles.falseButton} onPress={() => navigation.navigate('Activities', {name:name})}>
                    Enter
              </Text>
              </TouchableOpacity>
            </ImageBackground>
      </View>

      );
      
    }


// Main Screen
const data = [
  {
  id: "1",
  title: "BREATHE",
  image: "https://www.linkpicture.com/q/break_1.jpg",
  screen: "Breathe"
},
{
  id: "2",
  title: "HYDRATE",
  image: "https://www.linkpicture.com/q/hydrate_1.jpg",
  screen: "Hydrate"
},
{
  id: "3",
  title: "MOTIVATE",
  image: "https://www.linkpicture.com/q/motivation_1.jpg",
  screen: "Motivate"
},
{
  id: "4",
  title: "RELEASE",
  image: "https://www.linkpicture.com/q/release_4.jpg",
  screen: "Release"
}
];

const grid = (data) => {
return data;

};

const numColumns = 2;

function MainScreen ( {navigation, route} ){
  const { name } = route.params;
let renderItem = ({item}) => {
    return (
        <View style={styles.squareItem}>
          {/* <SafeAreaView> */}
          {/* <ScrollView> */}
            <TouchableOpacity onPress={() => navigation.navigate(item.screen,
              {
                title: item.title,
                image: item.image,
                name: name,
                // data: data
              })}>
              <Card containerStyle={{ elevation: 0, shadowColor: "white", borderColor: "white" }}>
              <Card.Title style={styles.squareText}>{item.title}</Card.Title>
              <Image style={styles.imageCard} resizeMode="contain"
                source={{
                  uri: item.image
                }}
              />
              </Card>
            </TouchableOpacity>
            {/* </ScrollView> */}
          {/* </SafeAreaView> */}
        </View>
    );
  };
    return (
      <View style={styles.backgroundMain}>
        {/* <SafeAreaView> */}
        {/* <ScrollView> */}
          {/* here */}
          <Text style={styles.title}>Welcome {name}!</Text>
          {/* here */}
          <FlatList
            data={grid(data, numColumns)}
            contentContainerStyle={styles.square}
            renderItem={renderItem}
            numColumns={numColumns}
            
          />
        <Button color='#6076aa' title="Profile" onPress={() => navigation.navigate('Profile', {name:name})}/>

          {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </View>
    );
  }
  
// BREATHE SCREEN
function Breathe ( {route, navigation} ) {
  const { title, image, name } = route.params;
  
  // const [count, setCount] = useState(0);

  return (
    <View style={styles.background}>
      {/* <SafeAreaView> */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body2}>It's important to take time to sit and take a break from reality now and then.</Text>
        <Text style={styles.body}>Select one of the options below and set up time to yourself.</Text>
        <Image style={styles.imageCard} resizeMode="contain" source={{uri: image}}/>
        {/* working */}

        {/* <Text style={styles.body} id="counter">Time Left: {secs}</Text> */}

        {/* working */}
        <View style={styles.button}>
          <Button color='#f1c47f' title="10 Minute" id="timefun" onPress={() => Timer()}/>
        </View>
        <View style={styles.button}>
        <Button color='#6076aa' title="Home" onPress={() => navigation.navigate('Activities', {name:name})}/>
        </View>
      {/* </SafeAreaView> */}
    </View>
  );
}

  // usePrev
    // function usePrevious(value) {
    //   const ref = useRef();
    //   useEffect(() => {
    //     ref.current = value;
    //   });
    //   return ref.current;
    // }

  //  timers function
    // function Timer (props) {
    //   constructor(props) {
    //     super(props)
    //     this.state = { time: props.seconds, complete: false, interval: undefined }
    //   }
    
    //    componentDidMount() {
    //     this.setState({
    //       interval: setInterval(() => {
    //         if (this.state.time > 0) {
    //           this.setState({ time: this.state.time - 1})
    //         } else {
    //           this.setState( {complete:true} )
    //           clearInterval(this.state.interval)
    //         }
    //       }
    //       , 1000)
    //     })
    //   }
        // let minutes = Math.floor(this.state.time / 60)
        // let seconds = this.state.time - minutes * 60
        // return (
        //   <View>
        //   {!this.state.complete ?
        //     <Text style={styles.body}> 
        //       You have
        //       {String(minutes).padStart(2, 0)}:{String(seconds).padStart(2, "0")}
        //       seconds left.
        //     </Text>
        //     :
        //     <Text style={styles.body}>Mindful cycle complete.</Text>
        //   }
        //   </View>
        // );
    
  

// HYDRATE SCREEN
function Hydrate ({route, navigation}) {
  const { title, image, name } = route.params;
  const [count, setCount] = useState(0);
  const noNegatives = () => {
    if (count < 1) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  return (
    <View style={styles.background}>
      {/* <SafeAreaView> */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body2}>It's easy to forget to drink water whenever we're stressed or not feeling the best.</Text>
      <Text style={styles.body}>How Many Bottles of Water Have You Had Today?</Text>
      <Image style={styles.imageCard} resizeMode="contain"source={{uri: image}}/>
      <Text style={styles.body}>{count}</Text>
      <View style={styles.button}>
        <Button color='#f1c47f' title="Add" onPress={() => setCount(count + 1)}/>
      </View>
      <View style={styles.button}>
        <Button color='#f1c47f' style={styles.button}title="Remove" onPress={noNegatives}/>
      </View>
      <View style={styles.button}>
        <Button color='#f1c47f' title="Reset" onPress={() => setCount(0)}/>
      </View>
      <View style={styles.button}>
        <Button color='#6076aa' title="Home" onPress={() => navigation.navigate('Activities', {name:name})}/>
      </View>
      {/* </SafeAreaView> */}
    </View>
 
  );
  
}

// MOTIVATE SCREEN
function Motivate ( {route, navigation} ) {
  const { title, image, name } = route.params;
  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible(!visible)
  return (
    <View style={styles.background}>
      {/* <SafeAreaView> */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body2}>Sometimes we need some inspiration to keep us going.</Text>
        <Text style={styles.body}>Take a look at some of these quotes.</Text>
        <Image style={styles.imageCard} resizeMode="contain" source={{uri: image}}/>
        <View style={styles.button}>
          <Button color='#f1c47f' title="Generate" onPress={onPress}/>
          <Overlay isVisible={visible} onBackdropPress={onPress}>
            <Text>{generateQuotes()}</Text>
          </Overlay>
        </View>
        <View style={styles.button}>
        <Button color='#6076aa' title="Home" onPress={() => navigation.navigate('Activities', {name:name})}/>
        </View>
      {/* </SafeAreaView> */}
    </View>
  );
}
    // generating random quotes function
    function generateQuotes() {

      const quotes = 
        ['"Almost everything will work again if you unplug it for a few minutes, including you." — Anne Lamott',
        '"Until you value yourself, you won’t value your time. Until you value your time, you will not do anything with it." — M. Scott Peck',
        '"Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself." — Hermann Hesse',
        '"It is not the mountain we conquer but ourselves." — Sir Edmund Hillary',
        '"It’s all about falling in love with yourself and sharing that love with someone who appreciates you, rather than looking for love to compensate for a self-love deficit." — Eartha Kitt',
        '"Grab a coffee. Journal your intentions. Get to work. Create miracles." — Elyse Santilli',
        '"To accept ourselves as we are means to value our imperfections as much as our perfections." — Sandra Bierig',
        '"Loving yourself isn’t vanity. It’s sanity." — Katrina Mayer',
        '"Never bend your head. Always hold it high. Look the world straight in the face." — Helen Keller',
        '"You have to believe in yourself when no one else does—that makes you a winner right there." — Venus Williams',
        '"You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level." — Eckhart Tolle',
        '"Part of courage is simple consistency." — Peggy Noonan',
        '"Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure." — Oprah Winfrey',
        '"Our bodies are our gardens, to which our wills are gardeners." — William Shakespeare',
        '"You are magnificent beyond measure, perfect in your imperfections, and wonderfully made." — Abiola Abrams',
        '"As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others." — Maya Angelou',
        '"Self-care means giving yourself permission to pause." — Cecilia Tran',
        '"When you recover or discover something that nourishes your soul and brings joy, care enough about yourself to make room for it in your life." — Jean Shinoda Bolen',
        '"Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment." — Stephen Covey',
        '"Keep good company, read good books, love good things, and cultivate soul and body as faithfully as you can." — Louisa May Alcott',
        ];
      const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
      return(
        <View style={styles.overlay}>
          <Text style={styles.body3}>{randomQuotes}</Text>
        </View>
      );
    }

// RELEASE SCREEN
function Release ( {route, navigation} ) {
  const { title, image, name } = route.params;
  const [val, setVal] = useState();

  return (
    <View style={styles.background}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body2}>Pent up feelings cause emotional baggage which negatively affects our loved ones and selves.</Text>
        <Text style={styles.body}>Write down everything that's been worrying you.</Text>
        <Image style={styles.imageCard} resizeMode="contain" source={{uri: image}}/>
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={styles.textbox}
          type="text" 
          value={val}
          />
        <Text style={styles.body2}>Now hit send off to get rid of these emotions.</Text>
        <Text style={styles.body2}>Don't worry everything will be deleted.</Text>
        <View style={styles.button}>
          <Button color='#f1c47f' title="Send Off" onPress={() => setVal(() => "",
          alert("Your worries have drifted away..."))}/>
        </View>
        <View style={styles.button}>
        <Button color='#6076aa' title="Home" onPress={() => navigation.navigate('Activities', {name:name})}/>
        </View>
    </View>
  );
}

// Profile Screen
function ProfileScreen ({route, navigation} ) {
  const { name } = route.params;
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.background}>
        <Text style={styles.title}> Welcome to your profile, {name}</Text>
        <Avatar 
          rounded
          size="large"
          source={{
            uri:
              "https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"
          }}
        />
        <Text style={styles.body2}>Rate your mood:</Text>
        <AirbnbRating
        count={5}
        defaultRating={1}
        reviews={[
          "Terrible",
          "Bad",
          "Okay",
          "Good",
          "Great"
        ]} 
        />
        <Button color='#6076aa' title="Home" onPress={() => navigation.navigate('Activities', {name:name})}/>

      </SafeAreaView>
    </View>
  );
};

const Stack = createNativeStackNavigator();


function App () {
  return (
    <NavigationContainer>
      {/* used to hide extra screens */}
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarButton: [
          "Form",
          "Breathe",
          "Hydrate",
          "Motivate",
          "Release"
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })}>
        {/* shown */}
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={30}/>
          }}
        />
        <Tab.Screen name="Activities" component={MainScreen} 
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="compass" size={30} />,
          }}
        />
        <Tab.Screen
          name="Profile" component={ProfileScreen} options={{
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="account" size={30} />,
          }}
        />
        {/* hidden */}
        <Tab.Screen name="Form" component={FormScreen}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false 
          }}
        />
        <Tab.Screen name="Breathe" component={Breathe} options={{
          headerShown: false,
          }}
        />
        <Tab.Screen name="Hydrate" component={Hydrate} options={{
          headerShown: false,
          }}
        />
        <Tab.Screen name="Motivate" component={Motivate} options={{
          headerShown: false,
          }}
        />
        <Tab.Screen name="Release" component={Release} options={{
          headerShown: false,
          }}
        />

      </Tab.Navigator>
      {/* <Timer seconds={90}/> */}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  home: {
    flex: 1, 
    justifyContent: 'center', 
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  imageCard: {
    width: "100%", 
    height: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  body: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  body2: {
    fontSize: 17,
    color: 'white',
    marginTop: 20,
    marginBottom: 0,
  },
  body3: {
    fontSize: 17,
    color: 'black',
    margin: 20,
  },
  falseButton: {
    backgroundColor: 'white',
    width: "25%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '37%',
    padding: "2%",
    fontSize:  20,
    marginTop: '10%'
  },
  button: {
    borderRadius: 25,
    width: 100,
    marginRight: '39%',
    marginLeft: '39%',
    marginVertical: '1%',
   },
  // avatar: {
  //   alignItems: 'center'
  // },
  background: {
    flex: 1, 
    width: "100%",
    justifyContent: 'center', 
    textAlign: 'center',
    backgroundColor: '#7595E0',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center'
  },
  backgroundMain: {
    flex: 1, 
    width: "100%",
    justifyContent: 'center', 
    textAlign: 'center',
    backgroundColor: '#7595E0'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 25,
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    marginLeft: '30%',
    marginRight: '30%'
  },
  textbox: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    marginTop: 20,
    marginLeft: '20%',
    marginRight: '20%',
    height:200, 
    width: 400,
    textAlignVertical: 'top',
    alignItems: 'center'
  },
  // grid styling
  square: {
    flex: 1,
    marginVertical: "25%",
    margin: 60,
    marginTop: 50
  },
  squareItem: {
    backgroundColor: 'white',
    borderWidth:  3,  
    borderStyle:  'solid',
    borderColor: '#6076aa',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 15,
    width: 10,
  },
  squareText: {
    fontSize: 20,
    color: '#7595E0',
    fontWeight: 'bold',
    margin: 20,
    alignItems: 'center'
  },
  overlay: {
    backgroundColor:'#D3D3D3',
    width: "25%",
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: '38%',
    marginRight: '41%',
  }
});


export default App;
