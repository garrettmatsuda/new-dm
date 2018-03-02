import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Card from './src/components/Card';
import OrgCard from './src/components/OrgCard';
import { Header } from 'react-native-elements';

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
        <Header 
                outerContainerStyles={{ backgroundColor: 'white'}}
                leftComponent={{  color: 'white' }}
                centerComponent={{text: 'source talent.', style:{ textAlign:'center',color:'black', fontSize: 18, fontWeight:'bold', fontFamily: 'Helvetica'} }}
                rightComponent={{ color: 'white' }}/>
        <ScrollView>
          <OrgCard 
                    textStyle={{fontSize: 18, textAlign:'center', fontWeight:'bold', fontFamily: 'Helvetica'}} 
                    name={'Student Consulting for Non Profit Organizations'} 
                    pic={require('./images/download.jpg')}>
                    Interested in operational, strategic and human capital solutions.
          </OrgCard>
          <OrgCard textStyle={{fontSize: 18, textAlign:'center', fontWeight:'bold', fontFamily: 'Helvetica'}} 
                    name={'Consulting Advising Student Enterprises'} 
                    pic={require('./images/case.jpg')}>
                    High quality consulting services to Northwestern student organizations, local businesses, and start ups.
          </OrgCard>
        </ScrollView>
      </View>
    );
  }
}
// image={require('./images/download.jpg')}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
