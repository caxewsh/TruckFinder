import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';
import { colors, textVariants, TextVariant } from '../theme';

type TextProps = RNTextProps & {
  variant?: TextVariant;
  color?: string;
  center?: boolean;
  children: React.ReactNode;
  style?: TextStyle;
};

const Text = ({
  variant = 'body',
  color = colors.dark,
  style,
  center = false,
  children,
  ...props
}: TextProps) => {
  const textStyle: TextStyle = {
    ...textVariants[variant],
    color,
    ...(center ? { textAlign: 'center' as const } : {}),
    ...(style as object || {}),
  };

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
