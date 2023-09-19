import React from 'react';
import { Swipeable } from 'react-swipeable';

const SwipeableComponent = ({ onSwipeRight }) => {
  return (
    <Swipeable onSwipedRight={onSwipeRight}>
      {/* Your content here */}
    </Swipeable>
  );
};

export default SwipeableComponent;
