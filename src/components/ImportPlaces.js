import React from 'react';
import { View, Text, TextInput } from 'react-native';

const ImportPlaces = ({ label, value, onChangeText, placeholder, secureTextEntry, onSubmitEditing }) => {
	const {inputStyle, labelStyle, containerStyle} = styles;

	state = {
	}

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				placeholderTextColor={'#D3D3D3'}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				onSubmitEditing={onSubmitEditing}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#fff',
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},

	labelStyle: {
		color: '#fff',
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},

	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'transparent'

	},
}

export default ImportPlaces;