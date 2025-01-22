import { IHeader } from '@_types'
import { HiBeaker } from 'react-icons/hi'
import { IoIosDocument } from 'react-icons/io'
import { IoPerson } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'

export const header: IHeader = {
  navLinks: [
    {
      href: '#about',
      text: 'About',
      icon: <IoPerson />
    },
    {
      href: '#experience',
      text: 'Experience',
      icon: <MdWork />
    },
    {
      href: '#resume',
      text: 'Resume',
      icon: <IoIosDocument />
    },
    {
      href: '#projects',
      text: 'Projects',
      icon: <HiBeaker />
    }
  ]
}
