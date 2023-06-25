import {StyleSheet} from 'react-native';
import {getColors, moderateScale} from '../../../theme';

export default TotalAmountStyle = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    backgroundColor: getColors.lightBlue,
  },
  text: {
    color: getColors.black,
    textAlign: 'center',
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginVertical: '2%',
  },
});
