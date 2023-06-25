import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AccountScreenStyle from './AccountScreenStyle';

import {AddEditModal} from '../add-edit-modal';
import {ViewModal} from '../view-modal';
import {useStorage} from '../../../hooks';
import {Strings} from '../../../constants';
import {useIsFocused} from '@react-navigation/native';

const AccountScreen = () => {
  const {getAsyncId} = useStorage();
  const [activeUser, setActiveUser] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);

  const focus = useIsFocused();

  useEffect(() => {
    (async () => {
      setActiveUser(await getAsyncId());
    })();
  }, [focus]);

  const props = {
    setIsVisible,
    isVisible,
    edit,
    setEdit,
    activeUser,
  };

  return (
    <View style={AccountScreenStyle.container}>
      {activeUser.length !== 0 ? (
        <>
          <Text style={AccountScreenStyle.welcome}>{Strings.welcome}</Text>
          <Text style={AccountScreenStyle.email}>{activeUser.email}</Text>
          <View style={AccountScreenStyle.buttonContainer}>
            {activeUser.userDetails.length !== 0 ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setEdit(true);
                    setIsVisible(true);
                  }}
                  style={AccountScreenStyle.button}>
                  <Text style={AccountScreenStyle.credentials}>
                    {Strings.edit} {Strings.details}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setView(true)}
                  style={AccountScreenStyle.button}>
                  <Text style={AccountScreenStyle.credentials}>
                    {Strings.view} {Strings.details}
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={() => setIsVisible(true)}
                style={AccountScreenStyle.button}>
                <Text style={AccountScreenStyle.credentials}>
                  {Strings.add} {Strings.details}
                </Text>
              </TouchableOpacity>
            )}
            <ViewModal
              userDetails={activeUser.userDetails[0]}
              isVisible={view}
              setIsVisible={setView}
            />
            <AddEditModal {...props} />
          </View>
        </>
      ) : null}
    </View>
  );
};

export default AccountScreen;
