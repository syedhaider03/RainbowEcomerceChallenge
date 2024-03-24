import React, {useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {debounce} from 'lodash'; 
import {SvgIcon} from 'components';
import styles from './style';
interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchProps> = ({
  onSearch,
  placeholder = 'Search',
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Debounce the search function by 1 second
  const debouncedSearch = useCallback(
    debounce(query => {
      onSearch(query);
    }, 500),
    [],
  );

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    debouncedSearch(query);
  };

  return (
    <View style={styles.container}>
      <SvgIcon name="Search" size={20} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleSearch}
        value={searchTerm}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
};



export default SearchComponent;
