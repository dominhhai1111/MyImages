import {
    ActivityIndicator,
    Text,
    ViewPropTypes,
    SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default class Feed extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
    };

    static defaultProps = {
        style: null,
    };
}