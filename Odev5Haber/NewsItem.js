import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class NewsItem extends React.Component {
    render() {

        const { type, title, description } = this.props;
        let btnColor;



        if (type === 'Sağlık') {
            btnColor = '#B87333';
        } else if (type === 'Teknoloji') {
            btnColor = '#2E8B57';
        } else if (type === 'Magazin') {
            btnColor = '#801818';
        } else if (type === 'Siyasi') {
            btnColor = '#7BA05B'
        } else if (type === 'Spor') {
            btnColor = '#013220'
        }



        return (
            <TouchableOpacity
                style={{
                    backgroundColor: btnColor,
                    flex: 1,
                    height: 200,
                    width: 'auto',
                    marginTop: 15
                }}>

                <Text
                    style={{ color: 'white', fontSize: 25, textAlign: 'center' }}
                >{title}</Text>

                <Text
                    style={{ color: 'white', fontSize: 17, textAlign: 'center', marginTop: 50 }}


                >{description}</Text>

            </TouchableOpacity>
        )

    }


}