'use client';

import createBackend from "@/services/gooddata-client";
import { AttributeFilterButton, BackendProvider, newPositiveAttributeFilter, WorkspaceProvider } from "@gooddata/sdk-ui-all";
import Image from "next/image";

export default function Home() {
  const handleAttributeFilterApply = (updatedFilter: any) => {
    console.log("Applying updated filter:", updatedFilter);
  };

  return (
    <BackendProvider backend={(createBackend())}>
      <WorkspaceProvider workspace={'test'}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
          <AttributeFilterButton
                        key='test'
                        filter={newPositiveAttributeFilter('outburstclient', ['test'])}
                        onApply={handleAttributeFilterApply}
                      />
        </main>
      </WorkspaceProvider>
    </BackendProvider>
  );
}
