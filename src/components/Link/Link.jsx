import { useCallback } from 'react';
import NextLink from 'next/link';

import { getWebApp } from '@/utils/getWebApp';

import './styles.css';

export function Link({
  className,
  onClick: propsOnClick,
  href,
  ...rest
}) {
  const onClick = useCallback((e) => {
    propsOnClick?.(e);

    // Compute if target path is external. In this case we would like to open link using
    // TMA method.
    let path;
    if (typeof href === 'string') {
      path = href;
    } else {
      const { search = '', pathname = '', hash = '' } = href;
      path = `${pathname}?${search}#${hash}`;
    }

    const targetUrl = new URL(path, window.location.toString());
    const currentUrl = new URL(window.location.toString());
    const isExternal = targetUrl.protocol !== currentUrl.protocol
      || targetUrl.host !== currentUrl.host;

    if (isExternal) {
      e.preventDefault();
      getWebApp().openLink(targetUrl.toString());
    }
  }, [href, propsOnClick]);

  return (
    <NextLink
      {...rest}
      href={href}
      onClick={onClick}
      className={[className, 'link'].filter(Boolean).join(' ')}
    />
  );
}
