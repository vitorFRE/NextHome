interface PasswordRequirementsProps {
  id: string;
}

export function PasswordRequirements({ id }: PasswordRequirementsProps) {
  return (
    <div id={id} className="text-xs text-muted-foreground space-y-1">
      <p className="font-medium">A senha deve ter:</p>
      <ul className="list-disc list-inside space-y-0.5">
        <li>No mínimo 6 caracteres</li>
      </ul>
    </div>
  );
}
