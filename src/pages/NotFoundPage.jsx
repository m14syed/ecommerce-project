import { Header } from '../components/Header'
import './NotFoundPage.css'

export function NotFoundPage () {
  return (
    <>
      <Header />
      <div className="notfound-message">
        <p>404:Page Not Found</p>
      </div>
    </>
  );
}

