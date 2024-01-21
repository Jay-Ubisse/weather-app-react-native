import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = (text) => {
        this.setState({ text: text });

    }

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;
        if (!text) return;
        onSubmit(text);
        this.setState({ text: '' });
    };


    render() {
        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <TextInput
                placeholder={placeholder}
                value={text}
                clearButtonMode='always'
                placeholderTextColor={'white'}
                style={styles.textInput}
                autoCorrect={false}
                onChangeText={this.handleChangeText}
                onSubmitEditing={this.handleSubmitEditing}
            />

        );
    }

}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 5,
    },
});
