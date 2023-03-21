import { FlatList } from 'react-native';
import { Box } from 'native-base';
import NFTCard from './NFTCard';

const NFTCollection = ({ nfts }) => (
  <FlatList
    data={nfts}
    ListHeaderComponent={
      <Box _text={{ fontSize: 'xl', fontWeight: 'black', p: '1' }}>
        Hot collections
      </Box>
    }
    keyExtractor={(item, index) => item.id}
    numColumns={2}
    renderItem={({ item }) => <NFTCard nft={item} />}
  />
);

export default NFTCollection;
