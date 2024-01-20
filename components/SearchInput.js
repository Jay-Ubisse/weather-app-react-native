import { TextInput, StyleSheet } from 'react-native';

const SearchInput = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            clearButtonMode='always'
            placeholderTextColor={'white'}
            style={styles.textInput}
            autoCorrect={false}
        />
    );
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

export default SearchInput;