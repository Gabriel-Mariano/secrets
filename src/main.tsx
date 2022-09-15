import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoutes, MyDrawer } from './routes/route';
import { HomeScreen } from './views/authenticated/home';
import codePush from 'react-native-code-push';

const Main = () => {
    return (
        <HomeScreen/>
    )
}

export default codePush({
    checkFrequency:codePush.CheckFrequency.ON_APP_RESUME,
})(Main);
