import {Modal, Text, View} from 'react-native';
import React from 'react';
import {CloseButton} from '../../../components';
import {Strings} from '../../../constants';
import ViewModalStyle from './ViewModalStyle';

const ViewModal = ({isVisible, setIsVisible, userDetails}) => {
  return (
    <Modal
      onRequestClose={() => setIsVisible(!isVisible)}
      visible={isVisible}
      animationType="slide">
      {userDetails ? (
        <View style={ViewModalStyle.container}>
          <CloseButton {...{setIsVisible}} />
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>
              {Strings.name}:
              <Text style={ViewModalStyle.name}> {userDetails.name}</Text>
            </Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>
              {Strings.mobileNo}:
              <Text style={ViewModalStyle.name}> {userDetails.mobileNo}</Text>
            </Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>
              {Strings.address}:
              <Text style={ViewModalStyle.name}> {userDetails.address}</Text>
            </Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>
              {Strings.pincode}:
              <Text style={ViewModalStyle.name}> {userDetails.pincode}</Text>
            </Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>
              {Strings.city}:
              <Text style={ViewModalStyle.name}> {userDetails.city}</Text>
            </Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>
              {Strings.state}:
              <Text style={ViewModalStyle.name}> {userDetails.state}</Text>
            </Text>
          </View>
        </View>
      ) : null}
    </Modal>
  );
};

export default ViewModal;
