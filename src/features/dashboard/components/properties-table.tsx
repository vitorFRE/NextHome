import type { Property } from "@/src/types/property"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table"
import { formatPrice, propertyTypeLabels } from "@/src/lib/format"

interface PropertiesTableProps {
  properties: Property[]
  limit?: number
}

export function PropertiesTable({ properties, limit }: PropertiesTableProps) {
  const displayedProperties = limit ? properties.slice(0, limit) : properties

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayedProperties.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-muted-foreground">
              Nenhum imóvel encontrado
            </TableCell>
          </TableRow>
        ) : (
          displayedProperties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.title}</TableCell>
              <TableCell>{propertyTypeLabels[property.type]}</TableCell>
              <TableCell>{property.city}</TableCell>
              <TableCell>{formatPrice(property.price)}</TableCell>
              <TableCell>—</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
