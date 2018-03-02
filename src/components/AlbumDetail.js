import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({data}) => {
	const {title, artist, thumbnail_image, image, url} = data;
	const {
		headerContentStyle,
		thumbnailStyle,
		thumbnailContainerStyle,
		headerTitleStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardItem>
				<View style={thumbnailContainerStyle}>
					<Image
						style={thumbnailStyle}
						source={{ uri: thumbnail_image }}
					/>
				</View>

				<View style={headerContentStyle}>
					<Text style={headerTitleStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardItem>

			<CardItem>
				<Image
					style={imageStyle}
					source={{ uri: image }}
				/>
			</CardItem>

			<CardItem>
				<Button whenPressed={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardItem>

		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTitleStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	thumbnailContainerStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	}
};

export default AlbumDetail;