import React, { Component } from 'react'
import { View, Image, Modal, StyleSheet, Text} from 'react-native';

import { PropTypes } from 'prop-types';

export default class index extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return (
      <Modal animationType={animationType} transparent={true} visible={modalVisible}>
          <View style={styles.wrapper}>
            <Text>This is modal</Text>
          </View>
      </Modal>
    );
  }
}

index.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};










