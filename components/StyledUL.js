import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { BiCircle } from 'react-icons/bi';
import { AiTwotoneMinusCircle } from 'react-icons/ai';
// AiTwotoneMinusCircle
// BiCircle
const StyledUL = ({ items, iconColour }) => {
  return (
    <List spacing={3}>
      {items.map(({ text, isNested }, idx) => {
        return (
          <ListItem
            key={`${text}__${idx}`}
            pl={isNested ? '42px' : '0'}
            className={isNested && 'styledList'}
          >
            <ListIcon
              as={isNested ? BiCircle : AiTwotoneMinusCircle}
              color={iconColour ? iconColour : 'inherit'}
            />
            {text}
          </ListItem>
        );
      })}
    </List>
  );
};

export default StyledUL;
