<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=@amoutonbrady/solid-apexcharts&background=tiles&project=%20" alt="@amoutonbrady/solid-apexcharts">
</p>

# @amoutonbrady/solid-apexcharts

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

A small wrapper around [Apexcharts](https://apexcharts.com/) for [Solid](https://solidjs.com).
There's already a package named `solid-apexcharts`.

If I end up using this package, I expect it to be tailored to my need which will probably be different than the original authors that is closer to the Apexcharts wrapper of Vue and React.

## Quick start

Install it:

```bash
pnpm add @amoutonbrady/solid-apexcharts
```

Use it:

```tsx
import { ApexCharts, useApexCharts } from '@amoutonbrady/solid-apexcharts';

function App() {
  const [apexChart] = useApexCharts(options);

  return <>
    <h1>Welcome to my super charts page!</h1>

    {/* You can either wire things manually and have more control over the template */}
    <div ref={apexCharts}></div>

    {/* Or use pre-built components */}
    <ApexCharts {...options} />
  </>
}
```
