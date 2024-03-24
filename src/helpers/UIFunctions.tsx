import {RefreshControl} from 'react-native';
import {palette} from 'theme';

export const RefreshController = (
  refreshing: boolean,
  onRefresh: () => void,
) => (
  <RefreshControl
    colors={[palette.primary]}
    refreshing={refreshing}
    onRefresh={onRefresh}
    tintColor={palette.primary}
  />
);
