type ChipProps = {
  label: string;
  selected?: boolean;
  onClick: () => void;
};

export function Chip({ label, selected = false, onClick }: ChipProps) {
  return (
    <button
      type="button"
      className={`chip ${selected ? 'active' : ''}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}
