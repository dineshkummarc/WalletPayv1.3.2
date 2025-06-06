import {Dimensions, StyleSheet, Platform} from 'react-native';
import {rs} from '../../utils/styles/responsiveSize';
const {width,height} = Dimensions.get('screen');
export const qrPayStyle = colors =>
  StyleSheet.create({
    scroll_view: {flex: 1, backgroundColor: colors.bgSecondary},
    qrLoader: {
      width: rs(200),
      height: rs(200),
      position: 'absolute',
      top: Platform.OS === 'ios' ? rs(25) : rs(40),
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: rs(24),
      backgroundColor: colors.bgSecondary,
    },
    mt_115: {marginTop: rs(115)},
    balanceCont: {flexDirection: 'row', justifyContent: 'center'},
    defaultBalanceText: {
      color: colors.textSecondary,
      fontFamily: 'Gilroy-Semibold',
      fontSize: rs(12),
      lineHeight: rs(15),
    },
    balanceText: {
      color: colors.textTertiaryVariant,
      fontFamily: 'Gilroy-Semibold',
      fontSize: rs(12),
      lineHeight: rs(15),
    },
    userProfileCont: {
      marginTop: rs(12),
      backgroundColor: colors.bgQuaternary,
      borderColor: colors.ifSecondary,
      borderWidth: 1,
      width: width - rs(80),
      borderRadius: rs(8),
      padding: rs(14),
      flexDirection: 'row',
      alignItems: 'center',
    },
    pl_12: {paddingLeft: rs(12)},
    userNameText: {
      fontFamily: 'Gilroy-Semibold',
      fontSize: rs(14),
      lineHeight: rs(20),
      marginBottom: rs(4),
      color: colors.textSecondary,
    },
    userEmail: {
      fontFamily: 'Gilroy-Medium',
      fontSize: rs(11),
      lineHeight: rs(13),
      color: colors.textQuaternaryVariant,
    },
    scanDescription: {
      marginTop: rs(24),
      marginBottom: rs(10),
      fontFamily: 'Gilroy-Semibold',
      fontSize: rs(14),
      lineHeight: rs(17),
      color: colors.textSecondary,
    },
    qrMethodCont: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: rs(16),
      paddingRight: rs(20),
      paddingVertical: rs(20),
      borderWidth: 1,
      borderColor: colors.borderPrimary,
      backgroundColor: colors.bgQuinary,
      borderRadius: 8,
      justifyContent: 'space-between',
      marginBottom: rs(12),
      width: width - rs(80),
    },
    methodCont: {flexDirection: 'row', alignItems: 'center'},
    methodText: {
      paddingLeft: rs(16),
      fontFamily: 'Gilroy-Semibold',
      fontSize: rs(15),
      lineHeight: rs(18),
      color: colors.textSecondary,
    },
  });
