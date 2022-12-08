import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const is3XLScreen = useMediaQuery({ minWidth: 1825 }); //19 inch
  const is2XLScreen = useMediaQuery({ minWidth: 1633 }); //17 inch
  const isXLScreen = useMediaQuery({ minWidth: 1441 }); //15 inch
  const isBigScreen = useMediaQuery({ minWidth: 1280 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });
  const isSmallMobile = useMediaQuery({ maxWidth: 500 });

  return {
    isBigScreen,
    isDesktop,
    isMobile,
    isTablet,
    isSmallMobile,
    isMobileOrTablet,
    isXLScreen,
    is2XLScreen,
    is3XLScreen,
  };
};
