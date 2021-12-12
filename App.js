import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Multimedia from './multimedia'
import Record from './records'
import { items, recs } from './dades'
import { ScrollView } from 'react-native-gesture-handler';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var clr_main = '#59ffe1';

class MultimediaQuery extends React.Component {  
  render() {
    
    return (
      <View style={styles.container}>
        {items.map((data, key) => {
          return (
            <Multimedia key={key} title={data.title} desc={data.descripcio} url={data.link} type={data.type} />
          );
        })}
      </View>
    );
  }
}

class RecordsQuery extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {recs.map((data, key) => {
          return (
            <Record key={key} title={data.title} date={data.data} lloc={data.lloc} company={data.companyia} desc={data.descripcio} />
          );
        })}
      </View>
    )
  }
}


export default class App extends React.Component {
  state={
    afegir: false,
    afegirRecord: false,
    _title: "",
    _date: "",
    _lloc: "",
    _comp: "",
    _desc: "",
    _link: "",
    _type: "",
  }

  afegirRecord = async ()=>{
    this.setState({
      afegir: !this.state.afegir,
      afegirRecord: true,
    });
  }

  handleAfegirRecord = async () => {
    recs.push({
      title : this.state._title,
      data : this.state._date,
      lloc : this.state._lloc,
      companyia : this.state._comp,
      descripcio : this.state._desc,
    })

    this.setState({
      afegir: !this.state.afegir,
      afegirRecord: false,
    });
  }

  afegirMultimedia = async ()=>{
    this.setState({
      afegir: !this.state.afegir,
      afegirRecord: false,
    });
  }

  handleAfegirMultimedia = async () => {
    items.push({
      descripcio : this.state._desc,
      link : this.state._link,
      title : this.state._title,
      type : this.state._type
    })

    this.setState({
      afegir: !this.state.afegir,
      afegirRecord: false,
    });
  }

  tornar = async () => {
    this.setState({
      afegir: false,
      afegirRecord: false,
    });
  }
  
  render() {
    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }

    if(this.state.afegir && this.state.afegirRecord) {
      let newDate = new Date();
      let date = newDate.getDate().toString() + '.' + newDate.getMonth().toString() + '.' + newDate.getFullYear().toString();
      return (
        <View style={styles.fullscreen}>
          <View className='header' style={styles.header} >
            <Text style={styles.appTitle}>ASTUPENDU</Text>
            <Image source={require("./img/logo.png")} style={styles.logoImg} />
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
            <Button onPress={this.tornar} title={"Tornar"} color='red'></Button>
            <Button onPress={this.handleAfegirRecord} title={"Afegir!!"}></Button>
          </View>

          <View style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
            <Text>Posa un títol al record: </Text>
            <TextInput
              style={styles.input}
              placeholder="Títol per recordar"
              keyboardType="ascii-capable"
              onChangeText={text => this.setState({
                _title: text
              })}
            />
          </View>

          <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <Text>Quan va ser? </Text>
              <TextInput
                style={styles.sideInput}
                placeholder={date}
                keyboardType="ascii-capable"
                onChangeText={text => this.setState({
                  _date: text
                })}
              />
            </View>

            <View style={{display: 'flex', alignItems: 'center', marginLeft: 5}}>
              <Text>A on va ser? </Text>
              <TextInput
                style={styles.sideInput}
                placeholder="Cancún"
                keyboardType="ascii-capable"
                onChangeText={text => this.setState({
                  _lloc: text
                })}
              />
            </View>
          </View>

          <View style={{display: 'flex', alignItems: 'center', marginTop: 5}}>
            <Text>Amb qui estaves? </Text>
            <TextInput
              style={styles.input}
              placeholder="Els amics de la universitat :D"
              keyboardType="ascii-capable"
              onChangeText={text => this.setState({
                _comp: text
              })}
            />
          </View>

          <View style={{display: 'flex', alignItems: 'center', marginTop: 5}}>
            <Text>Escriu la vivència: </Text>
            <TextInput
              style={[styles.input, {height: 180, width: width*0.85}]}
              placeholder="..."
              keyboardType="ascii-capable"
              multiline
              onChangeText={text => this.setState({
                _desc: text
              })}
            />
          </View>


        </View>
      );
    }
    else if(this.state.afegir && !this.state.afegirRecord) {
      let newDate = new Date();
      let date = newDate.getDate().toString() + '.' + newDate.getMonth().toString() + '.' + newDate.getFullYear().toString();
      return (
        <View style={styles.fullscreen}>
          <View className='header' style={styles.header} >
            <Text style={styles.appTitle}>ASTUPENDU</Text>
            <Image source={require("./img/logo.png")} style={styles.logoImg} />
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
            <Button onPress={this.tornar} title={"Tornar"} color='red'></Button>
            <Button onPress={this.handleAfegirMultimedia} title={"Afegir!!"}></Button>
          </View>

          <View style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
            <Text>Posa-li un nom! </Text>
            <TextInput
              style={styles.input}
              placeholder="Nom del multimèdia"
              keyboardType="ascii-capable"
              onChangeText={text => this.setState({
                _title: text
              })}
            />
          </View>

          <View style={{display: 'flex', alignItems: 'center'}}>
            <Text>Tipus: </Text>
            <TextInput
              style={styles.sideInput}
              placeholder="MUSIC / VIDEO"
              keyboardType="ascii-capable"
              onChangeText={text => this.setState({
                _type: text
              })}
            />
          </View>

          <View style={{display: 'flex', alignItems: 'center', marginTop: 5}}>
            <Text>Link a executar: </Text>
            <TextInput
              style={styles.input}
              placeholder="https://algunapaginaweb.com"
              keyboardType="ascii-capable"
              onChangeText={text => this.setState({
                _link: text
              })}
            />
          </View>

          <View style={{display: 'flex', alignItems: 'center', marginTop: 5}}>
            <Text>Fes una descripció del ítem: </Text>
            <TextInput
              style={styles.input}
              placeholder="..."
              keyboardType="ascii-capable"
              multiline
              onChangeText={text => this.setState({
                _desc: text
              })}
            />
          </View>


        </View>
      );
    }

    return (
      <View style={styles.fullscreen}>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <View className='header' style={styles.header} >
            <Text style={styles.appTitle}>FlyAway</Text>
            <Image source={require("./img/logo.png")} style={styles.logoImg} />
          </View>
          <View style={{marginTop: 20}}>
            <View className='records-container' >
              <Button onPress={this.afegirRecord} title={"Afegir Record"}></Button>
              <View style={{marginTop: 10}}></View>
              <RecordsQuery />
            </View>
            <View className='mm-container' >
              <Button onPress={this.afegirMultimedia} title={"Afegir Multimèdia"}></Button>
              <View style={{marginTop: 10}}></View>
              <MultimediaQuery />
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  fullscreen: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    zIndex: 999,
    display: 'flex',
    flexDirection: 'row',
    width: width,
    paddingLeft: width*0.045,
    paddingTop: 25,
    backgroundColor: clr_main
  },
  appTitle: {
    textAlignVertical: 'center',
    fontSize: 30,
    textAlign: 'left',
    width: width - 90
  },
  logoImg: {
    marginVertical: 8,
    width: 60,
    height: 60
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    width: 300,
    maxHeight: 60,
    padding: 10,
    backgroundColor: 'red'
  },
  scrollview: {
    width: width,
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    height: 40,
    textAlignVertical: 'top',
    width: width*0.7,
    borderColor: clr_main,
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginTop: 5
  },
  sideInput: {
    height: 40,
    textAlignVertical: 'top',
    width: width*0.4,
    borderColor: clr_main,
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginTop: 5
  }
});
