import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';

import styles from '../../styles/landingpage.module.css';

const LandingPage = ({ profile }) => {
  return (
    <>
      <Text fontSize="5xl" margin="2rem 0" textAlign="center" fontWeight="bold">
        Landing Page
      </Text>
      <Flex direction={'column'} alignItems="center">
        {profile.map((prof, i) => (
          <Box
            key={i}
            borderRadius="xl"
            padding="5"
            marginBottom="3"
            display="flex"
            alignItems="center"
            backgroundColor="white"
            boxShadow="md"
            cursor="pointer"
            width={'xl'}
            _hover={{
              transform: { scaleX: 2 }
            }}
          >
            <Image alt="test" src={prof.photo} width="32" height="32" borderRadius="full" marginRight="10" />
            <div>
              <Text fontSize={'2xl'} fontWeight="bold" borderBottomWidth="1px">{prof.name}</Text>
              <Text fontSize={'xl'} color="gray">{prof.job}</Text>
              <Text fontSize={'lg'}><span className={styles.span}>message:</span>  &quot;{prof.greeting}&quot;</Text>
            </div>
          </Box>
        ))}
      </Flex>
    </>
  )
};

export default LandingPage;