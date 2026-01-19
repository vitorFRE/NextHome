import { getRecentProperties } from "@/src/lib/mock-data/properties"
import { PropertiesTable } from "./properties-table"

export function RecentPropertiesTable() {
  const recentProperties = getRecentProperties()

  return <PropertiesTable properties={recentProperties} limit={5} />
}
