import { useNavigation } from '@react-navigation/native';
import { Image, Box, VStack, Pressable, Text } from 'native-base';
const NFTCard = ({ nft }) => {
  const navigation = useNavigation();

  const navigateToDetail = () =>
    navigation.navigate('NFTDetail', {
      nft,
    });
  return (
    <Box
      flex={'0.5'}
      justifyContent={'space-between'}
      borderRadius="lg"
      bgColor={'gray.100'}
      m="1">
      <Pressable onPress={navigateToDetail}>
        <VStack space={'1'}>
          <Image
            source={nft.img}
            alt={nft.name}
            size={'2xl'}
            resizeMode="cover"
            borderTopRadius={'lg'}
          />
          <Box p={'1'}>
            <Text
              bold
              isTruncated
              fontSize={'lg'}>
              {nft.name}
            </Text>
            <Text>{nft.price}</Text>
          </Box>
        </VStack>
      </Pressable>
    </Box>
  );
};

export default NFTCard;
