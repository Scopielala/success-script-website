import type { ReactNode } from "react";
import { NavigationPanel } from "@/components/navigation-panel";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <main className="site-main">{children}</main>
      <NavigationPanel />
    </div>
  );
}
