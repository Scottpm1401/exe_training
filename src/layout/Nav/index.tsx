import {
  Avatar,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FlexProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';

import SocialIcon from '../../components/SocialIcon';
import { useResponsive } from '../../hooks/useResponsive';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions, selectors } from '../../redux/reducer';
import { logout } from '../../services/auth';
import Container from '../Container';
import NavLink from './NavLink';

type Props = {} & FlexProps;

const OFFSET = 20;

const Nav = (props: Props) => {
  const { isMobileOrTablet } = useResponsive();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPopoverOpen,
    onToggle: onPopoverToggle,
    onClose: onPopoverClose,
  } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const user = useAppSelector(selectors.user.selectUser);
  const refreshToken = useAppSelector(selectors.auth.selectRefreshToken);
  const dispatch = useAppDispatch();

  const [isTop, setIsTop] = useState(true);

  const scrollEvent = useCallback(() => {
    const body = document.body;
    if (body) {
      const rect = body.getBoundingClientRect();
      if (rect.top <= -OFFSET) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    }
  }, []);

  const handleLogout = async () => {
    if (refreshToken) {
      const data = await logout({ refreshToken });
      if (data.success) {
        dispatch(actions.auth.reset());
        dispatch(actions.user.reset());
      }
    }

    onPopoverToggle();
  };

  useEffect(() => {
    if (document) {
      document.addEventListener('scroll', scrollEvent);
    }

    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <Flex
      position='sticky'
      top='0px'
      left='0px'
      w='full'
      h='72px'
      background={isTop ? 'transparent' : '#FAEEAB'}
      zIndex={99}
    >
      <Container justifyContent='space-between' alignItems='center'>
        <Flex alignItems='center'>
          <Link to='/'>
            <Button variant='unstyled' display='flex' alignItems='center'>
              <Flex w='42px' h='35px'>
                <SVG src='/svg/logo.svg' />
              </Flex>
              <Text ml='0.5rem' fontWeight='bold' fontSize='lg'>
                Salty
              </Text>
            </Button>
          </Link>

          {!isMobileOrTablet && (
            <Flex ml='3rem'>
              <NavLink title={'Home'} href={'/'} />
              <NavLink title={'About us'} href={'/about'} />
              <NavLink title={'Destinations'} href={'/destinations'} />
              <NavLink title={'Tour'} href={'/tour'} />
              <NavLink title={'Blog'} href={'/blog'} />
            </Flex>
          )}
        </Flex>

        {isMobileOrTablet ? (
          <Button variant='unstyled' ref={btnRef} onClick={onOpen}>
            <SVG
              style={{ width: 20, height: 16, stroke: 'black' }}
              src='/svg/menu.svg'
            />
          </Button>
        ) : (
          <Flex alignItems='center'>
            <Button
              _hover={{
                background: 'rgba(246, 111, 77,10%)',
              }}
              variant='unstyled'
              color='#F66F4D'
              display='flex'
              alignItems='center'
              padding='0.75rem 2rem'
              h='auto'
              border='1.5px solid #F66F4D'
              borderRadius='2rem'
            >
              <Text fontWeight={500} fontSize='medium'>
                Book Now
              </Text>
              <Flex w='16px' h='15px' ml='0.5rem'>
                <SVG fill='#F66F4D' src='/svg/paper_flight.svg' />
              </Flex>
            </Button>
            {user._id ? (
              <Popover isOpen={isPopoverOpen} onClose={onPopoverClose}>
                <PopoverTrigger>
                  <Button variant='unstyled' h='auto' onClick={onPopoverToggle}>
                    <Avatar
                      ml='1rem'
                      name={user?.displayName}
                      src={user?.info?.avatar}
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent maxW='120px'>
                  <Flex direction='column'>
                    <Link to='/profile'>
                      <Button
                        w='full'
                        variant='unstyled'
                        onClick={onPopoverToggle}
                      >
                        Your Profile
                      </Button>
                    </Link>
                    <Button variant='unstyled' onClick={() => handleLogout()}>
                      Log out
                    </Button>
                  </Flex>
                </PopoverContent>
              </Popover>
            ) : (
              <Flex alignItems='center' ml='1rem'>
                <Link to='/login'>
                  <Button
                    _hover={{
                      background: 'rgba(246, 111, 77,10%)',
                    }}
                    variant='unstyled'
                    color='#F66F4D'
                    display='flex'
                    alignItems='center'
                    padding='0.75rem 1rem'
                    h='auto'
                    borderRadius='0.25rem'
                  >
                    Sign in
                  </Button>
                </Link>
                <Link to='/signup'>
                  <Button
                    ml='1rem'
                    _hover={{
                      background: 'rgba(246, 111, 77,10%)',
                    }}
                    variant='unstyled'
                    color='#F66F4D'
                    display='flex'
                    alignItems='center'
                    padding='0.75rem 1rem'
                    h='auto'
                    border='1.5px solid #F66F4D'
                    borderRadius='0.25rem'
                  >
                    Sign up
                  </Button>
                </Link>
              </Flex>
            )}
          </Flex>
        )}
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent background='#FAEEAB'>
            <Flex h='full' direction='column'>
              <Flex p='1rem 1.5rem' w='full' justifyContent='space-between'>
                <Button variant='unstyled' display='flex' alignItems='center'>
                  <Flex w='42px' h='35px'>
                    <SVG src='/svg/logo.svg' />
                  </Flex>
                  <Text ml='0.5rem' fontWeight='bold' fontSize='lg'>
                    Salty
                  </Text>
                </Button>
                <Button p='10px' variant='unstyled' onClick={onClose}>
                  <SVG
                    style={{ width: 20, height: 20, stroke: 'black' }}
                    src='/svg/close.svg'
                  />
                </Button>
              </Flex>
              <Flex
                mt='3.75rem'
                direction='column'
                justifyContent='flex-start'
                alignItems='center'
                h='full'
              >
                <NavLink
                  title={'Home'}
                  textProps={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    lineHeight: '31.25px',
                    color: '#212529',
                  }}
                  href={'/'}
                  onClick={onClose}
                />
                <NavLink
                  title={'About us'}
                  textProps={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    lineHeight: '31.25px',
                    color: '#212529',
                  }}
                  mt='2.5rem'
                  href={'/about'}
                  onClick={onClose}
                />
                <NavLink
                  title={'Destinations'}
                  textProps={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    lineHeight: '31.25px',
                    color: '#212529',
                  }}
                  mt='2.5rem'
                  href={'/destinations'}
                  onClick={onClose}
                />
                <NavLink
                  title={'Tour'}
                  textProps={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    lineHeight: '31.25px',
                    color: '#212529',
                  }}
                  mt='2.5rem'
                  href={'/tour'}
                  onClick={onClose}
                />
                <NavLink
                  title={'Blog'}
                  textProps={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    lineHeight: '31.25px',
                    color: '#212529',
                  }}
                  mt='2.5rem'
                  href={'/blog'}
                  onClick={onClose}
                />
              </Flex>
              <Flex mb='64px' justifyContent='center'>
                <SocialIcon
                  src='/svg/facebook.svg'
                  iconSize={{ width: 6, height: 12 }}
                />
                <SocialIcon
                  src='/svg/instagram.svg'
                  ml='14px'
                  iconSize={{ width: 12, height: 12 }}
                />
                <SocialIcon
                  src='/svg/twitter.svg'
                  iconSize={{ width: 15, height: 12 }}
                  ml='14px'
                />
              </Flex>
            </Flex>
          </DrawerContent>
        </Drawer>
      </Container>
    </Flex>
  );
};

export default Nav;
