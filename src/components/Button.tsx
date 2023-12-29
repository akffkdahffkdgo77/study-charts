interface Props {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: Props) {
    return (
        <button type="button" onClick={onClick} className="rounded-md border border-black p-1">
            {text}
        </button>
    );
}
