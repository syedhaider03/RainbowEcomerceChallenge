import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {debounce} from 'lodash'; // Import lodash debounce function
import {Search} from 'assets/svgs';
import {SvgIcon} from 'components';
import { HDP, WiP } from 'helpers';

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
  const debouncedSearch = debounce((query: string) => {
    onSearch(query);
  }, 1000);

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    width:WiP(93),
    alignSelf:'center',
    marginTop:HDP(15)
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default SearchComponent;
