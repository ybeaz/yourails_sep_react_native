import { SectionType, LinkType } from '../@types/LinkType'

export const links01R: LinkType[] = [
  {
    profileID: '1',
    iconLibrary: 'Ionicons',
    iconName: 'calendar-outline',
    contentType: SectionType['linkHref'],
    contentSrc: 'https://calendly.com/romanch',
    content: 'Feel free to setup a phone call',
    label: 'Link',
    isActive: true,
  },
  {
    profileID: '1',
    iconLibrary: 'Ionicons',
    iconName: 'logo-linkedin',
    contentType: SectionType['linkHref'],
    contentSrc: 'https://www.linkedin.com/in/romanches',
    content: 'Profile in Linkedin.com',
    label: 'Link',
    isActive: true,
  },
  {
    profileID: '1',
    iconLibrary: 'Ionicons',
    iconName: 'logo-stackoverflow',
    contentType: SectionType['linkHref'],
    contentSrc: 'https://stackoverflow.com/users/4791116/roman',
    content: 'Profile in Stackoverflow',
    label: 'Link',
    isActive: true,
  },
  {
    profileID: '1',
    iconLibrary: 'Ionicons',
    iconName: 'logo-github',
    contentType: SectionType['linkHref'],
    contentSrc: 'https://github.com/ybeaz',
    content: 'Profile in Github',
    label: 'Link',
    isActive: true,
  },
  {
    profileID: '1',
    iconLibrary: undefined,
    iconName: undefined,
    contentType: SectionType['imageSrc'],
    contentSrc: 'https://yourails.com/images/users/qrcode-romeQuietZone00.png',
    content: '',
    label: 'QR code with contacts',
    isActive: true,
  },
]
