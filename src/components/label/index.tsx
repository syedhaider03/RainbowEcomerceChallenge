import React, {FC, ReactElement, useState} from 'react';
import styles from './style';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextProps} from 'react-native';
import {WiP} from 'helpers';
import {family} from 'theme';

interface Props extends TextProps {
  text: string;
}
export const Heading: FC<Props> = ({text, ...props}) => {
  return (
    <Text {...props} style={[styles.heading, props.style]}>
      {text}
    </Text>
  );
};

interface HeadingSmProps extends TextProps {
  text: string;
  size?: number;
  bold?: boolean;
  topSpacing?: number;
  supportingText?: string;
  color?:string;
  children?:ReactElement|false,
  autoCalcWidth?:boolean
}
export const HeadingSmall: FC<HeadingSmProps> = ({
  text,
  topSpacing,
  size,
  bold,
  supportingText,
  color,
  children,
  autoCalcWidth,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        styles.headingSmall,
        !!size && {fontSize: size},
        bold && {fontFamily: family.PoppinsSemiBold},
        !!topSpacing && {marginTop: topSpacing},
        !autoCalcWidth && {width:WiP(75)},
        props.style,
        !!color && {color}
      ]}>
      {text}{!!children && " "}
      {children}
      {!!supportingText && (
        <Text style={styles.supportingText}> {supportingText}</Text>
      )}
    </Text>
  );
};

interface PriceLabelProps extends TextProps {
  price: string;
  color?: string;
}
export const PriceLabel: FC<PriceLabelProps> = ({price, color, ...props}) => {
  return (
    <Text
      {...props}
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[styles.priceLabel, {color}, props.style]}>
      {price}
    </Text>
  );
};

interface DescriptionProps extends TextProps {
  text: string;
  color?: string;
}
export const DescriptionText: FC<DescriptionProps> = ({
  text,
  color,
  ...props
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [description, setDescription] = useState(text);

  const handlePress = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <Text
      {...props}
      adjustsFontSizeToFit
      style={[styles.descriptionLabel, {color}, props.style]}>
      {isTruncated && description?.length > 149
        ? description.slice(0, 150) + '...'
        : description}
      {description?.length > 149 && (
        <Text onPress={handlePress} style={styles.buttonLabel}>
          {isTruncated ? ' Show More' : ' Show Less'}
        </Text>
      )}
    </Text>
  );
};
