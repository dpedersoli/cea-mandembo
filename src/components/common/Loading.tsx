import './Loading.css';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Loading({ message = 'Carregando...', size = 'medium' }: LoadingProps) {
  return (
    <div className={`loading loading--${size}`} role="status" aria-live="polite">
      <div className="loading__spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {message && <p className="loading__message">{message}</p>}
    </div>
  );
}
