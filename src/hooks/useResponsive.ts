import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1280 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768, minWidth: 501 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });
  const isSmallMobile = useMediaQuery({ maxWidth: 500 });

  return {
    isBigScreen,
    isDesktop,
    isMobile,
    isTablet,
    isSmallMobile,
    isMobileOrTablet,
  };
};
