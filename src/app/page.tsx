'use client';

import createBackend from "@/services/gooddata-client";
import { defaultDateFilterOptions } from '@gooddata/sdk-ui-filters';
import { AttributeFilterButton, BackendProvider, DateFilter, newPositiveAttributeFilter, WorkspaceProvider } from "@gooddata/sdk-ui-all";
import { ThemeProvider as GoodDataThemeProvider } from "@gooddata/sdk-ui-theme-provider";
import { customTheme } from "@/styles/goodDataTheme";

export default function Home() {
  const handleAttributeFilterApply = (updatedFilter: any) => {
    console.log("Applying updated filter:", updatedFilter);
  };

  const handleDateFilterApply = (updatedFilter: any) => {
    console.log("Applying updated filter:", updatedFilter);
  };

  return (
    <GoodDataThemeProvider theme={customTheme}>
      <BackendProvider backend={createBackend()}>
        <WorkspaceProvider workspace={'test'}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* The Date Filter Workes -- please excuse the styling */}
            <DateFilter
              filterOptions={defaultDateFilterOptions}
              availableGranularities={['GDC.time.date']}
              excludeCurrentPeriod={false}
              selectedFilterOption={defaultDateFilterOptions.allTime}
              onApply={handleDateFilterApply}
              dateFilterMode='active'
            />

            {/* The Attribute Filter Does NOT Work */}
            <AttributeFilterButton
              key='test'
              filter={newPositiveAttributeFilter('outburstclient', ['test'])}
              onApply={handleAttributeFilterApply}
            />
          </main>
        </WorkspaceProvider>
      </BackendProvider>
    </GoodDataThemeProvider>
  );
}
