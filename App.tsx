import React, {useState} from 'react';
import {Switch, View, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('asdf');

  //function for color
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };
  // function for color
  const getColor = (light, dark) => (darkTheme ? dark : light);

  // function for on press color change
  const getBtnColor=(type)=>{
    if (type == 'top') {
      return '#35FBD6'
    } else if (type == 'right'){  
      return '#EB6363'
    } else{
      return getColor(colors.dark , colors.light1)
    }
  }
  // function of calculation 
  const calculate=(title)=>{
    if (title == 'C') {
      setResult('')
    } else if(title == 'DL') {
      setResult(result.substring(0, result.length - 1))
    } else if (title == '=') {
      setResult(eval(result))
    } else setResult(result + title)
  }

  // function for touchbtn
  const Btn = ({title, type}) => (
    <TouchableOpacity
    onPress={()=>calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        height: 70,
        width: 70,
        backgroundColor: getColor(colors.light1, colors.dark2),
        margin: 16,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 37, color: getBtnColor(type)}}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        height: '100%',
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: 'center',
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        //this is the color for the switch button
        thumbColor={getColor(colors.dark, colors.light)}
        //this is the color for the background slider of the switch
        trackColor={{true: colors.light2, false: colors.dark2}}
        //need to add the light and dark symbol in the switch
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          textAlign: 'right',
          paddingRight: 20,
          width: '100%',
          marginTop: 200,
          paddingBottom: 20,
        }}>
        {result}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: getColor(colors.light1),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        {/* btn function i called here */}
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="+" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
};

export default App;
