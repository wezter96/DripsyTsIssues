import React from 'react';

import {SafeAreaView, styled, View} from 'dripsy';

export const MyComponent = () => {
  return (
    <SafeView success>
      <View
        sx={{
          height: [100, 400],
          width: '100%',
          backgroundColor: '$text',
          paddingBottom: '$4',
        }}
      />
    </SafeView>
  );
};

const SafeView = styled(SafeAreaView)((props: {success: boolean}) => ({
  bg: props.success ? '$background' : '$background2',
  flex: 1,
  borderWidth: 2,
  width: '100%',
  borderColor: '$background',
  justifyContent: 'center',
  alignItems: 'center',
}));
