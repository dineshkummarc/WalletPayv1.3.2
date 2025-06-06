import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomBottomSheet from '../../../../components/CustomBottomSheet/CustomBottomSheet';
import {useTheme} from '@react-navigation/native';
import {selectCurrencyBottomSheetStyle} from '../SelectCurrency/selectCurrencyBottomSheet.style';
import CustomInput from '../../../../components/CustomInput/CustomInput';
import {rs} from '../../../../../utils/styles/responsiveSize';
import Search from '../../../../../assets/svg/search.svg';
import Cancel from '../../../../../assets/svg/cross-icon.svg';
import SearchFile from '../../../../../assets/svg/searchFile.svg';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import { bottomSheetStyle } from '../../../../Deposit/CreateDeposit/DepositBottomSheet/bottomSheet.style';
const SelectCountryBottomSheet = ({
  bottomSheetRef,
  setSelectedItem,
  data = {},
  label,
  selectedItem
}) => {
  const {colors} = useTheme();
  const style = selectCurrencyBottomSheetStyle(colors);
  const {t:trans} = useTranslation();
  const [searchCountry, setSearchCountry] = useState('');
  const [searchParam] = useState(['name']);
  let allCountries = Object.values(data);
  function search(items) {
    return items.filter(item => {
      return searchParam.some(newItem => {
        return (
          item[newItem]
            ?.toString()
            ?.toLowerCase()
            ?.indexOf(searchCountry?.toLowerCase()) > -1
        );
      });
    });
  }
  const handleCancelSearchText = () => {
    setSearchCountry('');
  };
  return (
    <CustomBottomSheet
      style={style.alignCenter}
      bgColor={colors.bgQuaternary}
      bottomSheetRef={bottomSheetRef}
      snapPoint={['90%']}
      contentHeight={false}
      header={
        <View style={style.pt_18}>
          <Text style={[style.title, style.mb_24]}>{label}</Text>
          <CustomInput
            onChangeText={text => setSearchCountry(text)}
            bgColor={colors.bgQuaternary}
            value={searchCountry}
            leftIcon={
              <Search fill={colors.btnPrimary} height={rs(15)} width={rs(15)} />
            }
            style={style.textInput}
            placeholder={trans('Type here')}
            rightIcon={
              searchCountry && (
                <Pressable
                  onPress={handleCancelSearchText}
                  style={style.cancelBtn}>
                  <Cancel
                    fill={colors.btnPrimary}
                    height={rs(9)}
                    width={rs(9)}
                  />
                </Pressable>
              )
            }
          />
        </View>
      }>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsHorizontalScrollIndicator={false}>
        <View style={style.sheetCont}>
          {data?.length === 0 ? (
            <Text style={[style.textStyle, style.loadingText]}>
              {trans('Loading')}....
            </Text>
          ) : search(allCountries)?.length === 0 ? (
            <View style={style.emptyCont}>
              <SearchFile fill={colors.textQuaternaryVariant} />
              <Text style={style.notFoundText}>{trans('Data Not Found')}</Text>
              <Text style={style.notFoundDesc}>
                {trans('Please check for any spelling mistake or contact our support.')}
              </Text>
            </View>
          ) : (
            search(allCountries)?.map((item, index) => {
              return (
                <View key={index}>
                  {index !== 0 && (
                    <View
                      style={[style.textBottomBorder, style.width_80]}></View>
                  )}
                  <Pressable
                    key={item?.id}
                    style={[style.textContainer, style.itemText]}
                    onPress={() => {
                      setSelectedItem(item);
                      bottomSheetRef.current.close();
                    }}>
                    <Text style={bottomSheetStyle(colors, item?.name, selectedItem?.name).textStyle}>{item?.name}</Text>
                  </Pressable>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </CustomBottomSheet>
  );
};

export default memo(SelectCountryBottomSheet);
