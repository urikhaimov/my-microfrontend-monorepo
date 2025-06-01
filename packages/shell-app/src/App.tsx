import React, { Suspense } from 'react';

const MetricsWidget = React.lazy(() => import('widgetMetrics/WidgetApp'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading widget...</div>}>
      <MetricsWidget />
    </Suspense>
  );
}
