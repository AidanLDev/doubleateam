import React, { useState } from 'react';
import { Tooltip, Icon } from '@chakra-ui/react';

import { AiFillCheckCircle } from 'react-icons/ai';
import { BsClipboard } from 'react-icons/bs';

export default function CopyClipboard({ postUrl }) {
  const [copied, setCopied] = useState(false);
  return (
    <Tooltip
      label={copied ? 'Copied!' : 'Copy Blog to clipboard'}
      zIndex={20}
      shouldWrapChildren
    >
      <Icon
        as={copied ? AiFillCheckCircle : BsClipboard}
        cursor={copied ? 'default' : 'pointer'}
        color={copied ? 'green' : 'primary'}
        boxSize={6}
        zIndex='20'
        onClick={() => {
          setCopied(true);
          navigator.clipboard.writeText(postUrl);
        }}
      />
    </Tooltip>
  );
}
