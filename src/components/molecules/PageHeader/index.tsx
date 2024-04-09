import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Logo2} from '../../../assets/images';

const PageHeader = ({type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerWithPhoto}>
        <Image source={Logo2} style={styles.image} />
        <View>
          <Text style={styles.appTitle}>Sign In</Text>
        </View>
      </View>
    );
  }
};

export default PageHeader;

const styles = StyleSheet.create({
  containerWithPhoto: {
    backgroundColor: '#c3ffae',
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#c3ffae',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  image: {
    width: 82,
    height: 75,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#020202',
    flexDirection: 'column',
    paddingHorizontal: 80,
  },
});