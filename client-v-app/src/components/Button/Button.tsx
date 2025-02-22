import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button({label, className = styles.buttonComponent, disabled = false, onClick}:ButtonProps) {
    return (
        <>
            <button className={className} disabled={disabled} onClick={onClick}>{label}</button>
        </>
    )
}
