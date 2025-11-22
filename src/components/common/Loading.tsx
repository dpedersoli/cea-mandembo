import './Loading.css';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Loading({ message = 'Carregando', size = 'medium' }: LoadingProps) {
  return (
    <div
      className={`loading-container loading-container--${size}`}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="spinner" aria-hidden="true">
        <div className="spinner__circle"></div>
      </div>
      <span className="loading-message">{message}...</span>
      <span className="sr-only">{message}</span>
    </div>
  );
}
