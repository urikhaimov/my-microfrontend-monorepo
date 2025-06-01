import { jsx as _jsx } from "react/jsx-runtime";
import React, { Suspense } from 'react';
const MetricsWidget = React.lazy(() => import('widgetMetrics/WidgetApp'));
export default function App() {
    return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading widget..." }), children: _jsx(MetricsWidget, {}) }));
}
