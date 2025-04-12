"use client";

import { env } from '@todo/env.mjs';
import { RedocStandalone, type ResolvedThemeInterface } from 'redoc';
import type { AdvancedThemeObject } from 'redoc/typings/theme';

export default function Home() {
  return (
    <RedocStandalone
      specUrl={`${env.NEXT_PUBLIC_API_URL}/openapi.json`}
      options={{
        nativeScrollbars: true,
        theme,
        hideLoading: true,
        disableSearch: true,
      }}
    />
  );
}


const theme = { colors: { primary: { main: '#000000' } } } satisfies AdvancedThemeObject<ResolvedThemeInterface>;
