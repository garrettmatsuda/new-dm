//Index.ios.js - place code in here for IOS

// Import a library to help create a component
import React from 'react';
import {Text, View} from 'react-native';


// Create a component
const Header = (props) => {
	const{textStyle,viewStyle} = styles;
	return (	
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#E9F318',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		paddingTop: 25,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'Cochin'
	}
};

// Make the component available to other parts of the app

export default Header;