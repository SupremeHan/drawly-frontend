interface ColorPickerProps {
	fillColor: string;
	setFillColor: React.Dispatch<React.SetStateAction<string>>;
}

export function ColorPicker({ fillColor, setFillColor }: ColorPickerProps) {
	return (
		<button>
			<input className="w-6 h-6" type="color" value={fillColor} onChange={(e) => setFillColor(e.target.value)} />
		</button>
	);
}
