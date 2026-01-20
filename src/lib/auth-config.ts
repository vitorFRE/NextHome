export const DASHBOARD_ALLOWED_ROLES = ["admin"] as const;

export function canAccessDashboard(role: string | null | undefined): boolean {
  return !!role && DASHBOARD_ALLOWED_ROLES.includes(role as (typeof DASHBOARD_ALLOWED_ROLES)[number]);
}
