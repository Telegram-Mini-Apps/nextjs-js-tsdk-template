'use client';

import { List } from '@telegram-apps/telegram-ui';

import { DisplayData } from '@/components/DisplayData/DisplayData.jsx';
import { getWebApp } from '@/utils/getWebApp';

/**
 * @returns {import('react').JSX.Element}
 */
export default function LaunchParamsPage() {
  const webApp = getWebApp();

  return (
    <List>
      <DisplayData
        rows={[
          { title: 'tgWebAppPlatform', value: webApp.platform },
          { title: 'tgWebAppVersion', value: webApp.version },
          { title: 'tgWebAppStartParam', value: webApp.initDataUnsafe?.start_param },
          { title: 'tgWebAppData', type: 'link', value: '/init-data' },
          { title: 'tgWebAppThemeParams', type: 'link', value: '/theme-params' },
        ]}
      />
    </List>
  );
}

