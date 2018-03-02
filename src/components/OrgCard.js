import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import { Button, Icon } from 'react-native-elements';


const OrgCard = (props) => {
	var details_on = false;
	var details;
	if (details_on) {
		details = <View style={{ top:15, position:'absolute', height:270, width:300, backgroundColor:'rgba(130, 130, 130, 0.8)' }} />;
	}
	return (
		<Card style={{justifyContent:'center', alignItems:'center'}}>
			<View style={{ flexDirection:'row' }}>
				<TouchableOpacity style={{padding:10}}>
					<View style={{height:30, width: 190, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
						<Text style={{fontSize: 18, color:'white', textAlign:'center', fontWeight:'bold', fontFamily: 'Helvetica'}}>add to list.</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity 	onPress={()=>{
										details_on = true;
									}} 
									style={{padding:10, justifyContent:'center', alignItems:'center'}}
				>
					<View style={{height: 31, width:61, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
						<View style={{height: 30, width:60, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
							<Text style={{fontSize: 18, textAlign:'center', fontWeight:'bold', fontFamily: 'Helvetica'}}>more.</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
	
            <View
            	style={{ height: 300, width:300, backgroundColor: 'white', alignItems:'center', justifyContent:'center' }}
            >
              	<Image 
              		source={props.pic} style={{ padding:20, width: 260, height:150, resizeMode: Image.resizeMode.contain, }}
              	/>
	            <View 
	              	style={{ alignItems:'center', justifyContent:'center', padding:20}}
	            >
	              	<Text 
	              		style={{fontSize: 18, textAlign:'center', fontWeight:'bold', fontFamily: 'Helvetica'}}
	              	>
	              		{props.name}
	              	</Text>
            	</View>
            	<View style={{padding:20}}>
             		<Text style={{fontSize: 12, color:'black', textAlign:'center', fontFamily: 'Helvetica'}}>
             			{props.children}
             		</Text>
            	</View>
           	</View>
           	{details}
        </Card>
	);
	
};

export default OrgCard;

// source={require('.../images/download.jpg')}