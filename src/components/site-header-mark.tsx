"use client";

import { usePathname } from "next/navigation";

// Simple placeholder component instead of AR initials
function HeaderPlaceholder() {
  return (
    <div className="flex h-8 w-8 items-center justify-center text-sm font-medium text-muted-foreground">
      {/* Empty placeholder - no initials */}
    </div>
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  // Always return placeholder instead of AR initials
  return <HeaderPlaceholder />;
}
