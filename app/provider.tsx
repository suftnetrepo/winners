'use client';

import React from 'react';
import { SWRConfig } from 'swr';

type props = {
    children : React.ReactNode
}

export function Providers({ children } : props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then(res => res.json()),
        dedupingInterval: 60_000,
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
