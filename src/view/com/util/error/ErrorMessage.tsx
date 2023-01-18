import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {Text} from '../text/Text'
import {useTheme} from '../../../lib/ThemeContext'
import {usePalette} from '../../../lib/hooks/usePalette'

export function ErrorMessage({
  message,
  numberOfLines,
  style,
  onPressTryAgain,
}: {
  message: string
  numberOfLines?: number
  style?: StyleProp<ViewStyle>
  onPressTryAgain?: () => void
}) {
  const theme = useTheme()
  const pal = usePalette('error')
  return (
    <View testID="errorMessageView" style={[styles.outer, pal.view, style]}>
      <View
        style={[styles.errorIcon, {backgroundColor: theme.palette.error.icon}]}>
        <FontAwesomeIcon icon="exclamation" style={pal.text} size={16} />
      </View>
      <Text
        type="sm"
        style={[styles.message, pal.text]}
        numberOfLines={numberOfLines}>
        {message}
      </Text>
      {onPressTryAgain && (
        <TouchableOpacity
          testID="errorMessageTryAgainButton"
          style={styles.btn}
          onPress={onPressTryAgain}>
          <FontAwesomeIcon
            icon="arrows-rotate"
            style={{color: theme.palette.error.icon}}
            size={18}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  errorIcon: {
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  message: {
    flex: 1,
    paddingRight: 10,
  },
  btn: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
})