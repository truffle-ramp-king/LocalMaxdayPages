'use client';

import { useEffect } from 'react';

/** A first-party integration point for the production site's analytics container. */
export function FeatureAnalytics() {
  useEffect(() => {
    function track(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[data-feature]',
      );
      if (!link) return;
      const detail = {
        event: 'maxday_feature_click',
        feature: link.dataset.feature,
        placement: link.dataset.placement,
        destination: link.pathname,
      };
      const analyticsWindow = window as typeof window & {
        dataLayer?: Record<string, unknown>[];
      };
      analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
      analyticsWindow.dataLayer.push(detail);
      window.dispatchEvent(new CustomEvent('maxday:feature-click', { detail }));
    }
    document.addEventListener('click', track);
    return () => document.removeEventListener('click', track);
  }, []);
  return null;
}
