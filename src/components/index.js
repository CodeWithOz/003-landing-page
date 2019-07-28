/**
 * Order is:
 * - independent components (do not render other components)
 * - Composite components:
 * - first, those that include independent components
 * - then, those that include the first group group
 */

/////////////////////////////////////////////////////////////////
// Composite components that render other composite components //
/////////////////////////////////////////////////////////////////

export { default as App } from './App/App';
