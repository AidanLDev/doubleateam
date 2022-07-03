import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { FaDotCircle, FaRegDotCircle } from 'react-icons/fa';

const StyledUL = ({ items, iconColour, isNested }) => {
  return (
    <List>
      {items.map((item) => {
        return (
          <ListItem>
            <ListIcon
              as={isNested ? FaRegDotCircle : FaDotCircle}
              color={iconColour ? iconColour : 'red'}
            />
            {item}
          </ListItem>
        );
      })}
    </List>
  );
};

export default StyledUL;
