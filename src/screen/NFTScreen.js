import { useRoute } from '@react-navigation/native';
import { Box, Image, VStack, HStack, useTheme } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const NFTScreen = () => {
  const route = useRoute();
  const { nft } = route.params;
  const theme = useTheme();
  return (
    <Box>
      <VStack
        space={2}
        bgColor="gray.100">
        <Image
          source={nft.img}
          alt={nft.name}
          w="full"
          h={'72'}
        />
        <Box p={'2'}>
          <HStack
            alignItems={'center'}
            space={'0.5'}>
            <Box
              mb={'1.5'}
              _text={{
                fontSize: 'lg',
                fontWeight: 'light',
                color: theme.colors.violet['900'],
              }}>
              {nft.collection}
            </Box>
            <MaterialIcons
              name="verified"
              size={20}
              color={theme.colors.violet['900']}
            />
          </HStack>
          <Box
            _text={{
              fontSize: 'xl',
              fontWeight: 'bold',
            }}>
            {nft.name}
          </Box>
          <Box
            _text={{
              lineHeight: 'xl',
              fontWeight: 'medium',
            }}>
            {nft?.description}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default NFTScreen;
