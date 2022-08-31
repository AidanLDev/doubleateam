import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Tooltip, Icon, Box } from '@chakra-ui/react';

import { AiFillCheckCircle } from 'react-icons/ai';
import { BsClipboard } from 'react-icons/bs';

export default function CodeSyntax({ children, language }) {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <Box pos='relative' top='65px' left='90%' w='fit-content'>
        <Tooltip
          label={copied ? 'Copied!' : 'Copy code snippet'}
          shouldWrapChildren
        >
          <CopyToClipboard text={children}>
            <Icon
              as={copied ? AiFillCheckCircle : BsClipboard}
              cursor={copied ? 'default' : 'pointer'}
              color={copied ? 'green' : 'primary'}
              boxSize={6}
              zIndex='20'
              onClick={() => setCopied(true)}
            />
          </CopyToClipboard>
        </Tooltip>
      </Box>

      <SyntaxHighlighter language={language} style={a11yDark}>
        {children}
      </SyntaxHighlighter>
    </>
  );
}
