import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewHeader: {flex: 1, justifyContent: 'space-between', alignItems: 'stretch'},
    backButton: {top: 10, left: 10, padding: 6 },
    textHeader: {position: 'absolute', left: 16, bottom: 16, color: 'white', fontSize: 16, fontWeight: 'bold', letterSpacing: 1},
    priceHeader: {position: 'absolute', right: 16, bottom: 16, backgroundColor: '#F7574C', padding: 4, borderRadius: 4, color: 'white', fontWeight: 'bold'}
})

export default styles;