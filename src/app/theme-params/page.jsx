'use client';

import { List } from '@telegram-apps/telegram-ui';

import { DisplayData } from '@/components/DisplayData/DisplayData.jsx';
import { getWebApp } from '@/utils/getWebApp';

export default function ThemeParamsPage() {
  return (
    <List>
      <DisplayData
        rows={
          Object
            .entries(getWebApp().themeParams)
            .map(([title, value]) => ({ title, value }))
        }
      />
    </List>
  );
}
