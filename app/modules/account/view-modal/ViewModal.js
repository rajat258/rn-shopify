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
            <Text style={ViewModalStyle.headerText}>{Strings.name}:</Text>
            <Text style={ViewModalStyle.name}> {userDetails.name}</Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>{Strings.mobileNo}:</Text>
            <Text style={ViewModalStyle.name}> {userDetails.mobileNo}</Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>{Strings.address}:</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={ViewModalStyle.name}>
              {' '}
              {userDetails.address}
            </Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>{Strings.pincode}:</Text>
            <Text style={ViewModalStyle.name}> {userDetails.pincode}</Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>{Strings.city}:</Text>
            <Text style={ViewModalStyle.name}> {userDetails.city}</Text>
          </View>
          <View style={ViewModalStyle.textContainer}>
            <Text style={ViewModalStyle.headerText}>{Strings.state}:</Text>
            <Text style={ViewModalStyle.name}> {userDetails.state}</Text>
          </View>
        </View>
      ) : null}
    </Modal>
  );
};

export default ViewModal;
