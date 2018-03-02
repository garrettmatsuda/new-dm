import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = ({ onPress, buttonText }) => {
	const{buttonStyle, buttonTextStyle} = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={buttonTextStyle}>
				{buttonText}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle:{
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fafad2',
		borderRadius: 5,
		borderWidth: 1,
		marginLeft: 5,
		marginRight: 5

	},
	buttonTextStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 30,
		fontFamily: 'Cochin',
		fontWeight: 'bold',
	}
}

export default Button;