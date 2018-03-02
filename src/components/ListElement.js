import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ListElement {

	render() {
		return(
			 <TouchableOpacity onPress={this.onPress}>
				<Text style={styles.DropDownTextStyle}>
					{this.props.title}
				</Text>
				<View style={{ backgroundColor: '#fff', width: width*3/4, height: 1 }}/>
			</TouchableOpacity>
		);
	}
}

const styles = {
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'

	},
	DropDownTextStyle: {
		paddingRight: 20,
		paddingLeft: 20,
		fontSize: 18,
		lineHeight: 23,
		numberOfLines: 1,
		color: '#fff',
		flex: 2
	},
}