import { Icon } from "@chakra-ui/react";


export default function FooterIcon ({icon, link}) {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        <Icon as={icon} cursor='pointer'/>
     </a>
    </>
  )

}
