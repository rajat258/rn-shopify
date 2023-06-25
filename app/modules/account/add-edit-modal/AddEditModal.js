import {KeyboardAvoidingView, Modal, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  CloseButton,
  CustomButton,
  CustomTextInput,
  AlertBox,
} from '../../../components';

import {CommonUtils, validationSchema} from '../../../utils';
import {useStorage} from '../../../hooks';
import {Formik} from 'formik';
import {Strings} from '../../../constants';
import AddEditModalStyle from './AddEditModalStyle';

const AddEditModal = ({
  isVisible,
  setIsVisible,
  activeUser,
  setEdit = false,
  edit = false,
}) => {
  const [props, setProps] = useState({});
  const {getOS} = CommonUtils();
  const {setAsyncId} = useStorage();

  useEffect(() => {
    if (edit) {
      setProps({
        name: activeUser.userDetails[0].name,
        mobileNo: activeUser.userDetails[0].mobileNo,
        address: activeUser.userDetails[0].address,
        pincode: activeUser.userDetails[0].pincode,
        city: activeUser.userDetails[0].city,
        state: activeUser.userDetails[0].state,
      });
    } else {
      setProps({
        name: '',
        mobileNo: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
      });
    }
  }, [isVisible]);

  const addDetails = values => {
    activeUser.userDetails.push({
      ...values,
    });
    setAsyncId(activeUser);
    setIsVisible(false);
  };

  const editDetails = values => {
    activeUser.userDetails.pop();
    activeUser.userDetails.push({
      ...values,
    });
    setAsyncId(activeUser);
    setEdit(false);
    setIsVisible(false);
  };

  return (
    <Formik
      enableReinitialize={true}
      validationSchema={validationSchema.userDetails}
      initialValues={{
        ...props,
      }}>
      {({
        handleChange,
        handleSubmit,
        errors,
        isValid,
        setFieldTouched,
        touched,
        values,
      }) => (
        <Modal
          onRequestClose={() => setIsVisible(!isVisible)}
          transparent={true}
          visible={isVisible}
          animationType="slide">
          <KeyboardAvoidingView
            style={AddEditModalStyle.container}
            keyboardVerticalOffset={5}
            behavior={getOS() === 'android' ? 'position' : 'padding'}>
            <ScrollView keyboardDismissMode="interactive">
              <CloseButton {...{setIsVisible}} />
              <CustomTextInput
                handleChange={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                value={values.name}
                defaultValue={props.name}
                width="80%"
                placeholderValue={`${Strings.enter} ${Strings.name}`}
              />
              {errors.name && touched.name && (
                <Text style={AddEditModalStyle.errorText}>{errors.name}</Text>
              )}
              <CustomTextInput
                handleChange={handleChange('mobileNo')}
                onBlur={() => setFieldTouched('mobileNo')}
                value={values.mobileNo}
                defaultValue={props.mobileNo}
                width="80%"
                placeholderValue={`${Strings.enter} ${Strings.mobileNo}`}
              />
              {errors.mobileNo && touched.mobileNo && (
                <Text style={AddEditModalStyle.errorText}>
                  {errors.mobileNo}
                </Text>
              )}
              <CustomTextInput
                handleChange={handleChange('address')}
                onBlur={() => setFieldTouched('address')}
                value={values.address}
                defaultValue={props.address}
                width="80%"
                placeholderValue={`${Strings.enter} ${Strings.address}`}
              />
              {errors.address && touched.address && (
                <Text style={AddEditModalStyle.errorText}>
                  {errors.address}
                </Text>
              )}
              <CustomTextInput
                handleChange={handleChange('pincode')}
                onBlur={() => setFieldTouched('pincode')}
                value={values.pincode}
                defaultValue={props.pincode}
                width="80%"
                placeholderValue={`${Strings.enter} ${Strings.pincode}`}
              />
              {errors.pincode && touched.pincode && (
                <Text style={AddEditModalStyle.errorText}>
                  {errors.pincode}
                </Text>
              )}
              <CustomTextInput
                handleChange={handleChange('city')}
                onBlur={() => setFieldTouched('city')}
                value={values.city}
                defaultValue={props.city}
                width="80%"
                placeholderValue={`${Strings.enter} ${Strings.city}`}
              />
              {errors.city && touched.city && (
                <Text style={AddEditModalStyle.errorText}>{errors.city}</Text>
              )}
              <CustomTextInput
                handleChange={handleChange('state')}
                onBlur={() => setFieldTouched('state')}
                value={values.state}
                defaultValue={props.state}
                width="80%"
                placeholderValue={`${Strings.enter} ${Strings.state}`}
              />
              {errors.state && touched.state && (
                <Text style={AddEditModalStyle.errorText}>{errors.state}</Text>
              )}
              <CustomButton
                onPress={() => {
                  handleSubmit();
                  console.log(errors.name, touched.name);
                  if (isValid === true && values.name !== '') {
                    console.log('hey neel');
                    if (edit) {
                      editDetails(values);
                    } else {
                      addDetails(values);
                    }
                  } else {
                    AlertBox(Strings.incorrectInput, Strings.checkfield);
                  }
                }}
                marginBottom="3%"
                align="center"
                text={
                  edit
                    ? `${Strings.edit} ${Strings.details}`
                    : `${Strings.add} ${Strings.details}`
                }
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </Modal>
      )}
    </Formik>
  );
};

export default AddEditModal;
